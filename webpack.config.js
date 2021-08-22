module.exports = (env, args) => {
  let mode = args.mode || "production";

  return {
    mode: "development",
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },
    devtool: "source-map",
    devServer: {
      static: "./dist",
      port: 5000,
    },
  };
};
