const downloadFile = (url, fileName) => {
    const aElement = document.createElement('a');
    aElement.style.display = 'none';
    aElement.href = url;
    if (fileName) {
        aElement.download = fileName;
    }
    document.body.appendChild(aElement);
    aElement.click();
    document.body.removeChild(aElement);
};
export default downloadFile;
