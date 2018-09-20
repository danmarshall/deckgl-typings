const d = `deckgl-typings:`;

console.log(`${d} installing ...`)

const fs = require('fs-extra');
const path = require('path');
const types = path.resolve(__dirname, '../node_modules/@types');
if (!fs.existsSync(types)) {
    console.log(`${d} creating folder ${types}`)
    fs.mkdirSync(types);
}
const dirsToCopy = ['@deck.gl', 'deck.gl', 'luma.gl', 'math.gl'];
dirsToCopy.forEach(dir => {
    const destDir = path.resolve(types, dir);
    if (fs.existsSync(destDir)) {
        console.log(`${d} found ${destDir} , deleting`);
        fs.removeSync(destDir);
    }
    const srcDir = path.resolve(__dirname, '..', dir);
    console.log(`${d} copying ${srcDir} to ${destDir}`);
    fs.copySync(srcDir, destDir);
});

console.log(`${d} installation complete!`)
