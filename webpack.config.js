const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { NamedChunksPlugin } = require("webpack");

const PROD = process.argv[process.argv.length - 1].split(`--mode=`)[1].trim().toLowerCase() === `production`;

module.exports = {
  entry: {
    aboutMe: path.resolve(__dirname, `public/ts/aboutMe.ts`),
    global: path.resolve(__dirname, `public/ts/global.ts`),
  },
  output: {
    path: path.resolve(__dirname, `public/js`),
    filename: `[name].js`,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ["swc-loader"],
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          `css-loader`,
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [require("autoprefixer")],
            },
          },
          `sass-loader`,
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: 4,
      }),
      new OptimizeCssAssetsPlugin({}),
    ],
    namedChunks: true,
    splitChunks: {
      chunks: `all`,
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        gsap: {
          test: /node_modiles\/gsap\//,
          name: `gsap`,
          chunks: `all`,
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new NamedChunksPlugin(),
    new MiniCssExtractPlugin({
      filename: "../css/[name].css",
    }),
  ],
  resolve: {
    alias: {
      sass: path.resolve(__dirname, `public/scss/`),
      ts: path.resolve(__dirname, `public/ts/`),
    },
  },
  devtool: !PROD && `source-map`,
  resolve: { extensions: [`.js`, `.ts`, `.scss`] },
  stats: PROD ? `normal` : `minimal`,
  watch: !PROD,
};
