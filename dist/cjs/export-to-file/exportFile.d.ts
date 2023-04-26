import { ExcelOptions } from "../types";
export declare const exportFile: (text: string, fileName?: string) => void;
export declare const exportCsvFile: (data: any, fileName?: string, headings?: string[]) => void;
export declare const exportXlsxFile: (data: {}[], fileName?: string, options?: ExcelOptions) => void;
export default exportFile;
