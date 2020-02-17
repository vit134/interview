const cssLoaderConfig = require('@zeit/next-css/css-loader-config');
const withLess = require('@zeit/next-less');
const path = require('path');

module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  webpack: (config, { isServer, dev, defaultLoaders }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style.*?/;
      const origExternals = [...config.externals];
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback();
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback);
          } else {
            callback();
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ];

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      });
    }

    defaultLoaders.cssModules = cssLoaderConfig(config, {
      extensions: ['css'],
      cssModules: true,
      cssLoaderOptions: {
        localIdentName: '_[local]--[hash:base64:5]',
      },
      dev,
      isServer,
    });

    config.module.rules.push({
      test: /\.css$/,
      include: /\.module\.css$/,
      use: defaultLoaders.cssModules,
    });

    defaultLoaders.css = cssLoaderConfig(config, {
      extensions: ['css'],
      dev,
      isServer,
    });

    config.module.rules.push({
      test: /\.css$/,
      exclude: /\.module\.css$/,
      use: defaultLoaders.css,
    });

    config.module.rules.push({
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        loader: 'url-loader',
        options: {
          limit: 8192,
          esModule: false
        },
      },)

    /* eslint-disable dot-notation */
    config.resolve.alias['components'] = path.join(__dirname, 'src/components');
    config.resolve.alias['containers'] = path.join(__dirname, 'src/containers');
    config.resolve.alias['requests'] = path.join(__dirname, 'src/requests');
    config.resolve.alias['domains'] = path.join(__dirname, 'src/domains');
    config.resolve.alias['helpers'] = path.join(__dirname, 'src/helpers');
    /* eslint-enable dot-notation */

    return config;
  }
});
