export enum FILE_TYPES {
    OTHER = 'other',
    EXCEL = 'xls',
    CSV = 'csv'
}

export type ExportFileOptions = {
    headings: string[] | null | undefined;
    fileName: string;
    type: FILE_TYPES;
}