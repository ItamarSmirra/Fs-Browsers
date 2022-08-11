# Fs Browsers
An easy to use files functions and api for browsers.<br>
In your client side code, you can easilly download any file by a url or even export anything you want to several types of files like txt, js, yml, csv, and even **excel** files.<br>

![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/ItamarSmirra/Fs-Browsers/main?color=pink)
[![GitHub issues](https://img.shields.io/github/issues/ItamarSmirra/React-Meilisearch)](https://github.com/ItamarSmirra/Fs-Browsers/issues)
![GitHub](https://img.shields.io/github/license/ItamarSmirra/Fs-Browsers?color=purple)
![GitHub repo file count](https://img.shields.io/github/directory-file-count/ItamarSmirra/Fs-Browsers)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/fs-browsers?color=red)

# Install
```
npm install fs-browsers
```

# Download File
**downloadFile(url)**<br>
Download file based on url by the following code: <br>
```javascript
import { downloadFile } from 'fs-browsers';
downloadFile('url-to-the-file');
```

You can set the downloaded file name to anything you want like this: <br>
```javascript
import { downloadFile } from 'fs-browsers';
downloadFile('url-to-the-file', 'my-downloaded-file.txt');
```

# Export File
**exportFile(data, options)**<br>
Export data or any text to a file using the following code: <br>
```javascript
import { exportFile } from 'fs-browsers';
exportFile("this string will be exported to txt file");
```

The default file type is 'txt' but you can export to any file you want like this:<br>
```javascript
import { exportFile } from 'fs-browsers';
exportFile("this string will be exported to js file", { fileName: 'file.js' });
```
**export to csv file**<br>
To export data to csv file use the following code: <br>
```javascript
import { exportFile, CSV_FILE } from 'fs-browsers';
const data = [{ "id": 5, "name": "John", "grade": 90, "age": 15 }, { "id": 7, "name": "Nick", "grade": 70, "age": 17 }];
exportFile(data, { type: CSV_FILE });
```

You can override the csv headings by giving a headings list:<br>
```javascript
import { exportFile, CSV_FILE } from 'fs-browsers';
const data = [{ "id": 5, "name": "John", "grade": 90, "age": 15 }, { "id": 7, "name": "Nick", "grade": 70, "age": 17 }];
const headings = ["Student ID", "Student Name", "Test Grade", "Student Age"];
exportFile(data, { type: CSV_FILE, headings: headings, fileName: 'grades.csv' });
```

**export to excel file**<br>
To export data to excel file ('xls') use the following code: <br>
```javascript
import { exportFile, EXCEL_FILE } from 'fs-browsers';
const data = [{ "id": 5, "name": "John", "grade": 90, "age": 15 }, { "id": 7, "name": "Nick", "grade": 70, "age": 17 }];
exportFile(data, { type: EXCEL_FILE });
```

You can override the excel headings by giving a headings list:<br>
```javascript
import { exportFile, EXCEL_FILE } from 'fs-browsers';
const data = [{ "id": 5, "name": "John", "grade": 90, "age": 15 }, { "id": 7, "name": "Nick", "grade": 70, "age": 17 }];
const headings = ["Student ID", "Student Name", "Test Grade", "Student Age"];
exportFile(data, { type: EXCEL_FILE, headings: headings, fileName: 'grades.xls' });
```
It is very much the same as csv files in the code, but the result is a bit different. The excel file has some simple design and the csv file has not.<br>
Moreover, xls files are more complex and functional then csv files.<br>
The downside is that for exporting to xls files a http request is sent to an external server so it would not work offline (yet).

<br>
The excel file that will be downloaded looks like -<br>
<br>
![alt text](https://github.com/ItamarSmirra/Fs-Browsers/blob/main/excel-example.png?raw=true)

# Options

| option | description | default value |
| ------ | ------ | ------ |
| fileName | the name of the file to be exported, including the suffix | file.txt |
| type | excel file or other type of a file | non-excel file |
| headings | the headings for the excel file, if not presented the headings will be the object keys. relevant only for excel files | - |

<br>

# Comming Next

- remove the dependency of 'export-to-excel.js' package
- add promises for 'async/await' use (for excel files)
- enable export to excel files offline

<br>

## License

[MIT](LICENSE)
