import { BorderType, CellStyle } from "xlsx-js-style";
export interface BorderStyle {
    style: BorderType;
    color: {
        rgb: string;
    };
}
export declare const defaultHeadingsStyle: CellStyle;
export declare const defaultTitleStyle: {
    font: {
        sz: number;
        bold: boolean;
    };
    alignment: {
        horizontal: string;
        vertical: string;
    };
    border: {
        top: BorderStyle;
        bottom: BorderStyle;
        left: BorderStyle;
        right: BorderStyle;
    };
};
export declare const defaultCellStyle: {
    font: {
        sz: number;
    };
    border: {
        top: BorderStyle;
        bottom: BorderStyle;
        left: BorderStyle;
        right: BorderStyle;
    };
};
