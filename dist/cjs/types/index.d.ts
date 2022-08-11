export declare enum FILE_TYPES {
    OTHER = "other",
    EXCEL = "xls",
    CSV = "csv"
}
export declare type ExportFileOptions = {
    headings: string[] | null | undefined;
    fileName: string;
    type: FILE_TYPES;
};
