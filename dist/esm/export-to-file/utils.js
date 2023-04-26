import { writeFile, utils } from "xlsx-js-style";
import { defaultStyle, headingsStyle } from './styles';
export function exportToXLSX(data, options) {
    const { fileName = 'Excel.xlsx', sheetName = 'Sheet1', headings } = options;
    let excelData = [[]];
    const headingRow = headings && headings.length > 0 ? headings : Object.keys(data[0]);
    excelData.push(['', ...headingRow.map(heading => ({ v: heading, s: headingsStyle, t: 's' }))]);
    excelData = excelData.concat(data.map(obj => ['', ...Object.values(obj).map(value => ({ v: value, s: defaultStyle, t: 's' }))]));
    const workbook = utils.book_new();
    const worksheet = utils.aoa_to_sheet(excelData);
    utils.book_append_sheet(workbook, worksheet, sheetName);
    writeFile(workbook, fileName);
}
