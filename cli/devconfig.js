/**
 * @description resolve webpackConfig for eslint import/resolve
 */
const CliService = require('@giantx/cli-service');
const path = require('path');
const context = path.join(__dirname, '..');
const cliService = new CliService(context);
cliService.init('development');
const config = cliService.resolveWebpackConfig();
console.log(config, '----config');
module.exports = config;
