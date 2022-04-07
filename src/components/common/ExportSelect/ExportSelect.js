import React from 'react';
import propTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import InsertDriveFile from '@material-ui/icons/InsertDriveFile';

import { exportFormats } from '../../../utils/data/enumMap';
import { exportCSVFromJSON } from '../../../utils/helper';
import {
  GridDataExport,
  proceedExport,
  exportPDFWithComponent,
} from '../../Shared/DataExporter/GridDataExport';
import OptionsButton from '../OptionsButton';

const ExportSelect = ({ fields, data, fileName }) => {
  const { t } = useTranslation();
  const handlers = {
    xls: proceedExport,
    pdf: exportPDFWithComponent,
    csv: () => exportCSVFromJSON(data, fields, fileName),
  };

  return (
    <React.Fragment>
      <GridDataExport
        gridData={data}
        exportExcelFileName={`${fileName}.xlsx`}
        exportPdfFileName={`${fileName}.pdf`}
        paperSize="A1"
        columnAndFields={fields}
      />
      <OptionsButton
        list={exportFormats}
        label={t('text_export')}
        float="right"
        Icon={InsertDriveFile}
        helper={t('text_export_data_list_as')}
        action={format => handlers[format]()}
      />
    </React.Fragment>
  );
};

ExportSelect.propTypes = {
  fields: propTypes.any,
  data: propTypes.any,
  fileName: propTypes.string,
};

export default ExportSelect;
