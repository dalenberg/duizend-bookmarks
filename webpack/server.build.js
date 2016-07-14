const tasks = require('./tasks');

// generate a 'fresh' unpacked extension folder
tasks.copyAssets('build');

// compress
exec('webpack --config webpack/config.prod.js --progress --profile --colors');
