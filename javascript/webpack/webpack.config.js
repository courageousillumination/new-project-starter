const HtmlWebpackPlugin = require("html-webpack-plugin");
// const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.tsx"
  },
  mode: "development",
  output: {
    filename: "[name]-bundle.js"
  },
  module: {
    rules: [
      {
        test: /.tsx?/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx"],
    plugins: [new TsconfigPathsPlugin()]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new BundleTracker({ filename: "./webpack-stats.json" })
  ]
};
