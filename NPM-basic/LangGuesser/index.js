const franc = require('franc');
const langs = require('langs');

const language = franc(`'${process.argv[2]}'`)

function quessLanguage(inputLanguage) {
    const outputLanguage = langs.where("3", inputLanguage);
    console.log(outputLanguage.name);
}

quessLanguage(language);


// const output = langs.where("2", language);
// // console.log(output.name);
