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

function genDts(name) {
    console.log(`generating ${name}/index.d.ts`);

    const options = {
        name,
        project: `./node_modules/${name}`,
        out: `${name}/index.d.ts`,
        resolveModuleId: params => removeIndex(name, params.currentModuleId),
        resolveModuleImport: params => removeIndex(name, params.importedModuleId)
    };

    dtsGen(options);
}

function genProcess(obj) {
    const { name, convert } = obj;

    if (convert) {
        console.log(`copy tsconfig to ${name}`);
        fs.copyFileSync('tsconfig.json', `./node_modules/${name}/tsconfig.json`);

        const pattern = `./node_modules/${name}/src/**/*.js`;
        console.log(`renaming files in ${pattern}`);
        glob(pattern, (er, files) => {
            files.forEach(js_to_ts);
            genDts(name);
        });
    } else {
        genDts(name);
    }
}


var list = [

    //comment out any of these that you don't want to execute.
    //make convert:false if you need to manually edit the .ts files in node_modules
    
    { name: 'math.gl', convert: true },
    { name: 'luma.gl', convert: true },
    { name: 'deck.gl', convert: true },
    { name: '@deck.gl/core', convert: true },
    { name: '@deck.gl/layers', convert: true },
    { name: '@deck.gl/react', convert: true }
];

list.forEach(genProcess);
