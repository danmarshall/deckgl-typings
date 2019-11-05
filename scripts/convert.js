const fs = require('fs');
const glob = require("glob");
const dtsGen = require('dts-generator').default;

function js_to_ts(js) {
    //console.log(js);
    const ts = js.slice(0, -2) + 'ts';
    //console.log(ts);
    fs.copyFileSync(js, ts);
}

function removeIndex(packageName, moduleName) {
    let result = null;
    if (/\/index/g.test(moduleName)) {
        result = moduleName.replace(/\/index/g, '');
    }
    if (moduleName === 'index') {
        result = packageName;
    }
    return result;
}

function genDts(name, out) {
    console.log(`generating ${name}/index.d.ts`);

    const options = {
        prefix: name,
        project: `./node_modules/${name}`,
        out: `${out || name}/index.d.ts`,
        resolveModuleId: params => removeIndex(name, params.currentModuleId),
        resolveModuleImport: params => removeIndex(name, params.importedModuleId)
    };

    dtsGen(options).then(() => {
        const { version } = require(`.${options.project}/package.json`);
        const data = fs.readFileSync(options.out, 'utf8');
        fs.writeFileSync(options.out, `//typings for ${name} v${version}\n${data}`);
    });
}

function genProcess(obj) {
    const { name, out, convert } = obj;

    if (convert) {
        console.log(`copy tsconfig to ${name}`);
        fs.copyFileSync('tsconfig.json', `./node_modules/${name}/tsconfig.json`);

        const pattern = `./node_modules/${name}/src/**/*.js`;
        console.log(`renaming files in ${pattern}`);
        glob(pattern, (er, files) => {
            files.forEach(js_to_ts);
            genDts(name, out);
        });
    } else {
        genDts(name, out);
    }
}

console.log('make sure you have deck.gl installed with: "npm install deck.gl" ')

var list = [

    //comment out any of these that you don't want to execute.
    //make convert:false if you need to manually edit the .ts files in node_modules

    { name: 'math.gl', convert: true },
    { name: '@luma.gl/webgl', out: 'luma.gl__webgl', convert: true },
    //{ name: 'luma.gl', convert: true },
    // { name: 'deck.gl', convert: true },
    // { name: '@deck.gl/core', out: 'deck.gl__core', convert: true },
    // { name: '@deck.gl/layers', out: 'deck.gl__layers', convert: true },
    // { name: '@deck.gl/react', out: 'deck.gl__react', convert: true }
];

list.forEach(genProcess);

