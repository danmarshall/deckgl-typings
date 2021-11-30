const fs = require('fs');
const glob = require('glob');
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
    resolveModuleImport: params => removeIndex(name, params.importedModuleId),
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

console.log('make sure you have deck.gl installed with: "npm install deck.gl" ');

var list = [
  //comment out any of these that you don't want to execute.
  //make convert:false if you need to manually edit the .ts files in node_modules

  { name: 'math.gl', convert: true },
  { name: '@luma.gl/constants', out: 'luma.gl__constants', convert: true },
  { name: '@math.gl/core', out: 'math.gl__core', convert: true },
  { name: '@luma.gl/engine', out: 'luma.gl__engine', convert: true },
  { name: '@luma.gl/experimental', out: 'luma.gl__experimental', convert: true },
  { name: '@luma.gl/gltools', out: 'luma.gl__gltools', convert: true },
  { name: '@luma.gl/webgl', out: 'luma.gl__webgl', convert: true },
  { name: '@luma.gl/webgl-state-tracker', out: 'luma.gl__webgl-state-tracker', convert: true },
  { name: '@luma.gl/core', out: 'luma.gl__core', convert: true },
  { name: '@luma.gl/shadertools', out: 'luma.gl__shadertools', convert: true },
  { name: 'deck.gl', convert: true },
  { name: '@deck.gl/aggregation-layers', out: 'deck.gl__aggregation-layers', convert: true },
  { name: '@deck.gl/core', out: 'deck.gl__core', convert: true },
  { name: '@deck.gl/extensions', out: 'deck.gl__extensions', convert: true },
  { name: '@deck.gl/geo-layers', out: 'deck.gl__geo-layers', convert: true },
  { name: '@deck.gl/google-maps', out: 'deck.gl__google-maps', convert: true },
  { name: '@deck.gl/json', out: 'deck.gl__json', convert: true },
  { name: '@deck.gl/mapbox', out: 'deck.gl__mapbox', convert: true },
  { name: '@deck.gl/mesh-layers', out: 'deck.gl__mesh-layers', convert: true },
  { name: '@deck.gl/layers', out: 'deck.gl__layers', convert: true },
  { name: '@deck.gl/react', out: 'deck.gl__react', convert: true },
  { name: '@deck.gl/arcgis', out: 'deck.gl__arcgis', convert: true },
  { name: '@deck.gl/carto', out: 'deck.gl__carto', convert: true },
];

list.forEach(genProcess);
