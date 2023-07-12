const fs = require('fs');
const folderName = process.argv[2] || 'NewFolder';


// fs.mkdirSync(folderName, { recursive: true }, (err) => {
//     if (err) throw err;
// });

try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, '');
    fs.writeFileSync(`${folderName}/styles.css`, '');
    fs.writeFileSync(`${folderName}/app.js`, '');
} catch (error) {
    console.log(error)
}