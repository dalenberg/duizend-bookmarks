require('shelljs/global');

exports.copyAssets = type => {
  const env = type === 'build' ? 'prod' : type;
  rm('-rf', type);
  mkdir(type);
  cp('-R', 'chrome/_locales', `${type}/_locales`);
  cp(`chrome/manifest.${type}.json`, `${type}/manifest.json`);
  exec(`jade -O "{ env: '${env}' }" -o ${type} chrome/views/`);
};
