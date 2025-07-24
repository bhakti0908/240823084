// const path=require('path');

// //Directory and file names

// console.log("Directory Name:", __dirname); //Directory Name: E:\MCA\SEM_3\Node_js\240823084
// console.log("File Name:", __filename); //File Name: E:\MCA\SEM_3\Node_js\240823084\Modules.js

// //File Extension

// const extension=path.extname('Modules.js');
// console.log("File Extension:", extension); //File Extension: .js

// console.log("File Extenstion :",path.extname('package.json'));
// console.log(path.extname('index.coffee.md')); //.md
// console.log(path.extname('index.')); //.
// console.log(path.extname('index')); //not output
// console.log(path.extname('.index')); //no output

// //Path Join
// console.log(path.join('/users', '../system', './logs', 'file.txt')); //\system\logs\file.txt
// console.log(path.join('users', '//docs', 'file.txt')); //users\docs\file.txt


//FS Module

const fs = require('fs');

// var data="console.log('Hello World')";
// fs.writeFile('myfile.js', data, (err) => {
//   if (err) throw err; 
//   console.log('File written successfully');
// });

fs.readFile('myfile.txt', 'utf-8', (err,data) => {
  if (err) throw err; 
  console.log('File content :', data);
});