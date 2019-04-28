const env = process.env.BUILD_MODE.trim();
module.exports = require(`./build/webpack.${env}.js`);
