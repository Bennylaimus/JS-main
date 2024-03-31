const test = require("fs");

const newFolder = process.argv[2];

test.mkdirSync(`${newFolder}` || 'Project');
test.writeFileSync(`${newFolder}/test.html`, '');
test.writeFileSync(`${newFolder}/test.css`, '');
test.writeFileSync(`${newFolder}/test.js`, '');

