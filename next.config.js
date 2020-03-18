const withSass = require('@zeit/next-sass');

const globalSass = ["./theme/theme.scss"];

/* 
Configuration to enable Scoped & Global Sass
variables on NextJS 
*/
module.exports = withSass({
  cssModules: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    config.module.rules.push({
      enforce: "pre",
      test: /.scss$/,
      loader: "sass-resources-loader",
      options: {
        resources: globalSass
      }
    });
    return config;
  }
});
