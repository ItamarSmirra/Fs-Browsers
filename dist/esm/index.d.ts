import { FILE_TYPES } from './types/index';
declare const _default: {
    downloadFile: (url: string, fileName: string) => void;
    exportFile: (data: any, options?: import("./types/index").ExportFileOptions) => void;
    EXCEL_FILE: FILE_TYPES;
    CSV_FILE: FILE_TYPES;
    OTHER_FILE: FILE_TYPES;
};
export default _default;
