process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

process.on('unhandledRejection', err => {
  throw err
});

require('../config/env');

const chalk = require('react-dev-utils/chalk');
const { createCompiler } = require('react-dev-utils/WebpackDevServerUtils');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const paths = require('../config/paths');
const configFactory = require('../config/webpack.check.config');

const config = configFactory('development');
const appName = require(paths.appPackageJson).name
const devServerConfig = require('../config/checkDevServer.config');
const openBrowser = require('react-dev-utils/openBrowser');

const url = 'http://localhost:3000';

// console.log('config is', config)
const compiler = createCompiler({
  appName,
  config,
  urls: url,
  webpack
});



const devServer = new WebpackDevServer(devServerConfig, compiler);
devServer.startCallback(() => {
  console.log(chalk.cyan('Starting the development server...\n'));
  openBrowser(url)
});
devServer.start();


['SIGINT', 'SIGTERM'].forEach(function (sig) {
  process.on(sig, function () {
    console.log('comes', sig)
    devServer.close();
    process.exit();
  });
});