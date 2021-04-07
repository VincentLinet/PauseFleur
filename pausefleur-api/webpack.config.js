const nodeExternals = require("webpack-node-externals");

const getRootPath = () => {
  return __dirname
    .split("/")
    .slice(0, -2)
    .join("/");
};

module.exports = {
  target: "node",
  mode: "production",
  entry: "./src/index.js",
  externals: [nodeExternals(), nodeExternals({ modulesDir: `${getRootPath()}/node_modules` })],
  output: {
    filename: "main.js",
    path: `${__dirname}/dist`
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.m?js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          failOnError: true
        }
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: { node: "8" } }]]
          }
        }
      }
    ]
  },
  devtool: "sourcemap"
};
