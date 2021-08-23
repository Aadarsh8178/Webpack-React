const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, args) => {
  let mode = args.mode || "production";

  return {
    mode: "development",
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
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
