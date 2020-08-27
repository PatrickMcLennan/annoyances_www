const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

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
  },
  plugins: [
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
  devtool: `source-map`,
  resolve: { extensions: [`.js`, `.ts`, `.scss`] },
  watch: true,
};
