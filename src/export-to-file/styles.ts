const headingBorderStyle = { style: "thick", color: { rgb: "000000" } };
const deafultBorderStyle = { style: "thin", color: { rgb: "000000" } };

export const headingsStyle = {
    font: {
        sz: 12,
        bold: true
    },
    fill: {
        fgColor: { rgb: "B8CCE4" }
    },
    alignment: {
        horizontal: "center"
    },
    border: {
        top: headingBorderStyle,
        bottom: headingBorderStyle,
        left: headingBorderStyle,
        right: headingBorderStyle
    }
};

export const defaultStyle = {
    font: { sz: 11 },
    border: {
        top: deafultBorderStyle,
        bottom: deafultBorderStyle,
        left: deafultBorderStyle,
        right: deafultBorderStyle
    }
};