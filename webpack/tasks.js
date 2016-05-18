require('shelljs/global');

exports.copyAssets = type => {
  const env = type === 'build' ? 'prod' : type;
  rm('-rf', type);
  mkdir(type);
  cp(`chrome/manifest.json`, `${type}/manifest.json`);
  cp(`chrome/index.html`, `${type}/index.html`);
//  cp('-R', 'chrome/assets/*', type);
//  exec(`jade -O "{ env: '${env}' }" -o ${type} chrome/views/`);
};
