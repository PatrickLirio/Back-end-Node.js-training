const fs = require('fs');

// console.log(fs);

// Async Version
// fs.mkdir('Dogs', {recursive:true}, (err) => {
//   console.log(`I'm in the callback`);
//   if(err) throw err;
// })

// console.log(`I'm outside the callback`);

// Sync Version
// fs.mkdirSync('Cats');
// console.log("After creating the cats folder");
// console.log("Last one to be printed");

const folderName = process.argv[2] || 'Project';

// fs.mkdirSync(folderName);

// lets do try catch creating a file inside the folder
try {
  fs.mkdirSync(folderName);
  // create index.html using writefileSync
  fs.writeFileSync(`./${folderName}/index.html`,"");
  // create style.css file using writefileSync
  fs.writeFileSync(`./${folderName}/style.css`,"");
  // create appl.js file using writefileSync
  fs.writeFileSync(`./${folderName}/app1.js`,"");
  // make sure they will be created on the created directory/folder
} catch (e) {
  console.log("Error:". e);
}