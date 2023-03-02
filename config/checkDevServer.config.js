const path = require('path')

const devServer = {
  allowedHosts: 'all',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*'
  },
  compress: true, // ?
  static: {
    directory: path.join(__dirname, 'public'),
    publicPath: '/',
  },
  client: {
    overlay: {
      errors: true,
      warnings: false,
    },
    webSocketURL: {
      hostname: '0.0.0.0',
      pathname: '/ws',
      port: '3000',
      protocol: 'ws'
    }
  },
  devMiddleware: {
    index: true,
    mimeType: {phtml: 'text/html'},
    publicPath: '/',
    serverSideRender: false,
    writeToDisk: false
  },
  https: false,
  host: '0.0.0.0',
  historyApiFallback: true,
  proxy: undefined, // ?
  onBeforeSetupMiddleware(devServer) {
      console.log('before setup middleware', devServer)
  },
  onAfterSetupMiddleware(devServer) {
    console.log('after setup middleware', devServer)
  },
  open: true,
}


module.exports = devServer