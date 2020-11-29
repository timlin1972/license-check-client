const path = require("path");

module.exports = {
  devtool: 'source-map',
  entry: './index.jsx',
  output: {
    path: path.resolve(__dirname, '..', 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: [".jsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-react",
              "@babel/preset-env"
            ]
          }
        }
      },
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env"] }
        }
      },
    ]
  },
}
