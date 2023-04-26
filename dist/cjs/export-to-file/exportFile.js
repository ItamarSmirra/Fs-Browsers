import { writeFile, utils } from "xlsx-js-style";
import { defaultStyle, headingsStyle } from './styles';
export const exportFile = (text, fileName = 'file.txt') => {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const blobUrl = URL.createObjectURL(blob);
    const aElement = document.createElement("a");
    aElement.href = blobUrl;
    aElement.download = fileName;
    aElement.style.display = "none";
    document.body.appendChild(aElement);
    aElement.click();
    document.body.removeChild(aElement);
};
export const exportCsvFile = (data, fileName = 'file.csv', headings) => {
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
export const exportXlsxFile = (data, fileName = 'file.xlsx', options) => {
    const sheetName = options && options.sheetName ? options.sheetName : 'Sheet1';
    const headingsRow = options && options.headings ? options.headings : Object.keys(data[0]);
    let excelData = [[]];
    excelData.push(['', ...headingsRow.map(heading => ({ v: heading, s: headingsStyle, t: 's' }))]);
    excelData = excelData.concat(data.map(obj => ['', ...Object.values(obj).map(value => ({ v: value, s: defaultStyle, t: 's' }))]));
    const workbook = utils.book_new();
    const worksheet = utils.aoa_to_sheet(excelData);
    utils.book_append_sheet(workbook, worksheet, sheetName);
    writeFile(workbook, fileName);
};
export default exportFile;
