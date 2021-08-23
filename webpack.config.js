const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, args) => {
  let mode = args.mode || "production";

  return {
    mode: "development",
    output: {
      assetModuleFilename: "images/[hash][ext][query]",
    },
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: "asset",
        },
        {
          test: /\.s?css$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: { publicPath: "" },
            },
            "css-loader",
            "postcss-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },
    plugins: [new MiniCssExtractPlugin()],
    resolve: {
      extensions: [".js", ".jsx"],
    },
    devtool: "source-map",
    devServer: {
      static: "./dist",
      port: 5000,
      hot: true,
    },
  };
};
