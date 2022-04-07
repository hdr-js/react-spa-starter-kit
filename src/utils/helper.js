import axios from 'axios';
import { RESOURCE_POST_URL, RESOURCE_URL } from '../configs/urlConstants';
import { getTokenFromLocalStorage } from '../components/lib/Library';

export const induceImageURL = name => RESOURCE_URL + name;

export const uploadImageResource = async ({ target: { files } }) => {
  const image = files[0];
  const formData = new FormData();
  formData.append('file', image);
  const uploadedResource = await axios
    .post(RESOURCE_POST_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        authorization: `bearer ${getTokenFromLocalStorage('token')}`,
        docType: 'image',
      },
    })
    .then(res => {
      return res.data.path;
    });
  return uploadedResource;
};

export const parseCSVToJSON = csvText => {
  const columnNames = csvText.split('\n')[0].split(',');
  return csvText
    .split('\n')
    .slice(1, csvText.split('\n').length - 1)
    .map(row => {
      const rowObj = {};
      row.split(',').forEach((cell, index) => {
        rowObj[columnNames[index]] = cell;
      });
      return rowObj;
    });
};

export const convertCSVFileToJSON = csvFile => {
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onerror = () => {
      reader.abort();
      reject(new DOMException('Problem parsong the input file'));
    };
    reader.onload = ({ target: { result } }) => {
      resolve(parseCSVToJSON(result));
    };
    reader.readAsText(csvFile);
  });
};

export const mergeArrays = (array1, array2, type) => {
  return array1.map(obj => ({
    ...array2.find(item => item[type] === obj[type] && item),
    ...obj,
  }));
};

export const exportCSVFromJSON = (data, fields, fileName) => {
  const header = fields.map(item => item.fieldTitle);
  const replacer = (key, value) => {
    return value === null ? '' : value;
  };
  const body = data.map(row => {
    return fields.map(field => JSON.stringify(row[field.fieldName], replacer)).join(',');
  });
  body.unshift(header.join(',')); // add header column
  const csv = body.join('\r\n');

  const downloadLink = document.createElement('a');
  const blob = new Blob(['\ufeff', csv]);
  const url = URL.createObjectURL(blob);
  downloadLink.href = url;
  downloadLink.download = `${fileName}.csv`;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};
