import { FILE_TYPES } from '../types';
import { exportToXLSX } from './utils';
const getFileNameBySuffix = (fileName, suffix) => `${fileName.split('.')[0]}.${suffix}`;
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
const exportFile = (data, options) => {
    if (!options) {
        exportGenericFile(data, 'file.txt');
    }
    else {
        if (options.type === FILE_TYPES.EXCEL) {
            const excelName = options.fileName ? getFileNameBySuffix(options.fileName, FILE_TYPES.EXCEL) : 'Excel.xlsx';
            exportToXLSX(data, { ...options, fileName: excelName });
        }
        else if (options.type === FILE_TYPES.CSV) {
            const csvName = options.fileName ? getFileNameBySuffix(options.fileName, FILE_TYPES.CSV) : 'file.csv';
            exportCsvFile(data, { fileName: csvName, headings: options.headings });
        }
        else {
            exportGenericFile(data, options.fileName ? options.fileName : 'file.txt');
        }
    }
};
export default exportFile;
