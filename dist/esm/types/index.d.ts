import { CellStyle } from "xlsx-js-style";
export type ExcelOptions = {
    sheetName?: string;
    headings?: string[];
    sheetTitle?: string;
    cellStyle?: CellStyle;
    headingStyle?: CellStyle;
    titleStyle?: CellStyle;
};
