import { FILE_TYPES } from './types/index';
import downloadFile from './download-file/downloadFile';
import exportFile from './export-to-file/exportToFile';
export default {
    downloadFile,
    exportFile,
    EXCEL_FILE: FILE_TYPES.EXCEL,
    CSV_FILE: FILE_TYPES.CSV,
    OTHER_FILE: FILE_TYPES.OTHER
};
