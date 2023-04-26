const downloadFile = (url, fileName) => {
    const aElement = document.createElement('a');
    aElement.href = url;
    if (fileName) {
        aElement.download = fileName;
    }
    aElement.style.display = 'none';
    document.body.appendChild(aElement);
    aElement.click();
    document.body.removeChild(aElement);
};
export default downloadFile;
