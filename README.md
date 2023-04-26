# Fs Browsers
An easy to use files functions and api for browsers.<br>
In your client side code, you can easilly download any file by a url or even export anything you want to several types of files like txt, js, yml, csv, and even **excel** files.<br>

![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/ItamarSmirra/Fs-Browsers/main?color=pink)
[![GitHub issues](https://img.shields.io/github/issues/ItamarSmirra/React-Meilisearch)](https://github.com/ItamarSmirra/Fs-Browsers/issues)
![GitHub](https://img.shields.io/github/license/ItamarSmirra/Fs-Browsers?color=purple)
![GitHub repo file count](https://img.shields.io/github/directory-file-count/ItamarSmirra/Fs-Browsers)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/fs-browsers?color=red)

# Whats New?

- Using [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) for exporting text
- Export xlsx files without the need for network (can work offline)
- Update the methods names and imports
- Using [xlsx-js-style](https://www.npmjs.com/package/xlsx-js-style) instead of export-to-excel.js

# Install
```
npm install fs-browsers
```

# Download File
**downloadFile(url, filename?)**<br>
Download file based on url by the following code: <br>
```javascript
import { downloadFile } from 'fs-browsers';
// ...
downloadFile('url-to-file')
```

You can set the downloaded file name to anything you want like this: <br>
```javascript
import { downloadFile } from 'fs-browsers';
// ...
downloadFile('url-to-file', 'my-file.txt')
```
In some browsers the file name change might not work, read about HTTP Header [Content-Disposition](http://www.w3.org/Protocols/rfc2616/rfc2616-sec19.html#sec19.5.1)


### Parameters

| Parameter | Type | Description | Required | Default |
| ------ | ------  | ------ | ------ | ------ |
| url | string | the url for downloading the wanted file | true | - |
| fileName | string | the name of the file which will be downloaded | false | - |

# Export File
### exportFile(data, fileName?)
Export data or any text to a file using the following code: <br>
```javascript
import { exportFile } from 'fs-browsers';
//...
exportFile("this string will be exported to txt file");
```

The default file type is 'txt' but you can export to any file you want like this:<br>
```javascript
import { exportFile } from 'fs-browsers';
//...
exportFile("this string will be exported to js file", 'file-new-name.js');
```


### Parameters

| Parameter | Type | Description | Required | Default |
| ------ | ------  | ------ | ------ | ------ |
| text | string | the text that will be exported to the file | true | - |
| fileName | string | the name of the file which will be exported, including the suffix | false | file.txt |

<br>

### exportCsvFile(data, fileName, headings?)
To export data to csv file use the following code: <br>
```javascript
import { exportCsvFile } from 'fs-browsers';
// ...
const data = [
    {
      firstName: 'John',
      lastName: 'Doe',
      age: 20,
    },
    {
      firstName: 'Peter',
      lastName: 'Parker',
      age: 30,
    },
    {
      firstName: 'Mark',
      lastName: 'Twain',
      age: 40,
    },
  ]
exportCsvFile(data);
```

You can override the csv headings by giving a headings list:<br>
```javascript
import { exportCsvFile } from 'fs-browsers';
// ...
const data = [
    {
      firstName: 'John',
      lastName: 'Doe',
      age: 20,
    },
    {
      firstName: 'Peter',
      lastName: 'Parker',
      age: 30,
    },
    {
      firstName: 'Mark',
      lastName: 'Twain',
      age: 40,
    },
  ]
const headings = ["First Name", "Last Name", "Age"];
exportCsvFile(data, 'name.csv', headings);
```

### Parameters

| Parameter | Type | Description | Required | Default |
| ------ | ------  | ------ | ------ | ------ |
| data | {}[] | the array of data that will be exported into the Csv file | true | - |
| fileName | string | the name of the Csv which will be exported, including the suffix | false | file.csv |
| headings | string[] | array of string for the Csv headings row | false | null |

<br>

### exportXlsxFile(data, fileName, options?)
To export data to Excel file ('xlsx') use the following code: <br>
```javascript
import { exportXlsxFile } from 'fs-browsers';
// ...
const data = [
    {
      firstName: 'John',
      lastName: 'Doe',
      age: 20,
    },
    {
      firstName: 'Peter',
      lastName: 'Parker',
      age: 30,
    },
    {
      firstName: 'Mark',
      lastName: 'Twain',
      age: 40,
    },
  ]
exportXlsxFile(data);
```

You can override the excel headings by giving a headings list:<br>
```javascript
import { exportXlsxFile } from 'fs-browsers';
const data = [
    {
      firstName: 'John',
      lastName: 'Doe',
      age: 20,
    },
    {
      firstName: 'Peter',
      lastName: 'Parker',
      age: 30,
    },
    {
      firstName: 'Mark',
      lastName: 'Twain',
      age: 40,
    },
  ]
const headings = ["First Name", "Last Name", "Age"];
exportXlsxFile(data, 'names.xlsx', { headings: headings });
```
It is very much the same as csv files in the code, but the result is a bit different. The Excel file has some simple design and the csv file has not.<br>
Moreover, xlsx files are more complex and functional then csv files.<br>

<br>
The Excel file that will be downloaded looks like -<br>
https://github.com/ItamarSmirra/Fs-Browsers/raw/main/ExcelExample.jpg

### Parameters

| Parameter | Type | Description | Required | Default |
| ------ | ------  | ------ | ------ | ------ |
| data | {}[] | the array of data that will be exported into the Excel file | true | - |
| fileName | string | the name of the Excel which will be exported, including the suffix | false | file.xlsx |
| options | ExcelOptions | the advanced options of the Excel file| false | null |

### Options

| Option | Type | Description | Required | Default |
| ------ | ------ | ------ | ------ | ------ |
| headings | string[] | array of string for the Excel headings row | false | null |
| sheetName | string | the name of the sheet in the Excel | false | Sheet1 |

<br>

## License

[MIT](LICENSE)
