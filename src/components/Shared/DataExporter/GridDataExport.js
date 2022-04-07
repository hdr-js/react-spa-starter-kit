import React from 'react';
import propTypes from 'prop-types';

import { ExcelExport, ExcelExportColumn } from '@progress/kendo-react-excel-export';
import { PDFExport } from '@progress/kendo-react-pdf';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

let exporter;
let pdfExportComponent;

export const GridDataExport = ({
  columnAndFields,
  gridData,
  exportExcelFileName,
  exportPdfFileName,
  paperSize,
}) => {
  return (
    <div>
      <ExcelExport
        data={gridData}
        fileName={exportExcelFileName}
        ref={exporterEl => {
          exporter = exporterEl;
        }}
      >
        {columnAndFields.map(record => (
          <ExcelExportColumn
            headerCellOptions={{ textAlign: 'center' }}
            cellOptions={{ textAlign: 'center' }}
            field={record.fieldName}
            title={record.fieldTitle}
            width={150}
            key={record.fieldName}
          />
        ))}
      </ExcelExport>
      <div className="PdfExportWrapper">
        <PDFExport
          ref={component => {
            pdfExportComponent = component;
          }}
          paperSize={paperSize || 'A2'}
          fileName={exportPdfFileName}
        >
          <Grid data={gridData} className="PdfExportGrid">
            {columnAndFields.map(record => {
              return (
                <Column
                  headerCellOptions={{ textAlign: 'center' }}
                  field={record.fieldName}
                  title={record.fieldTitle}
                  width={150}
                  key={record.fieldName}
                />
              );
            })}
          </Grid>
        </PDFExport>
      </div>
    </div>
  );
};

GridDataExport.propTypes = {
  columnAndFields: propTypes.array,
  gridData: propTypes.array,
  exportExcelFileName: propTypes.string,
  exportPdfFileName: propTypes.string,
  paperSize: propTypes.string,
};

export const proceedExport = () => {
  exporter.save();
};

export const exportPDFWithComponent = () => {
  pdfExportComponent.save();
};
