import ExcelService from 'export-to-excel.js';
import { FILE_TYPES } from '../types';
// ExcelService.wakeUp();
const getFileNameBySuffix = (fileName, suffix) => fileName ? `${fileName.split('.')[0]}.${suffix}` : `file.${suffix}`;
const exportGenericFile = (text, fileName) => {
    const aElement = document.createElement("a");
    aElement.href = "data:text/plain;charset=utf-8," + text;
    aElement.download = fileName;
    aElement.style.display = "none";
    document.body.appendChild(aElement);
    aElement.click();
    document.body.removeChild(aElement);
};
const exportCsvFile = (data, { fileName, headings }) => {
    const dataAsRows = data.map(obj => ['', Object.values(obj)]);
    const headingRow = (headings && headings.length > 0) ? headings : (data.length > 0 ? Object.keys(data[0]) : []);
    const aElement = document.createElement("a");
    aElement.href = "data:text/csv;charset=utf-8," + [[''], ['', ...headingRow], ...dataAsRows].map(row => row.join(',')).join('\n');
    aElement.download = fileName;
    aElement.style.display = "none";
    document.body.appendChild(aElement);
    aElement.click();
    document.body.removeChild(aElement);
};
const exportFile = (data, options = { fileName: 'file.txt', type: FILE_TYPES.OTHER, headings: null }) => {
    if (options.type === FILE_TYPES.EXCEL) {
        const excelName = getFileNameBySuffix(options.fileName, FILE_TYPES.EXCEL);
        if (options.headings && options.headings.length > 0) {
            ExcelService.export(data, { headings: options.headings, fileName: excelName });
        }
        else {
            ExcelService.export(data, { fileName: excelName });
        }
    }
    else if (options.type === FILE_TYPES.CSV) {
        exportCsvFile(data, { fileName: getFileNameBySuffix(options.fileName, FILE_TYPES.CSV), headings: options.headings });
    }
    else {
        exportGenericFile(data, options.fileName ? options.fileName : 'file.txt');
    }
};
export default exportFile;
