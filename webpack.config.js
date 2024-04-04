const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, "client", "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "public")
  },
  target: "web",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  devServer: {
    historyApiFallback: true,
    proxy: {
      "/api/**": {
        target: 'http://localhost:3000',
        secure: false
      }
    },
    static: path.join(__dirname, "public"),
    port: 3001
  },
  


}