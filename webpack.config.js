/**
 * Webpack Config
 */
const path = require("path");
const fs = require("fs");

const publicPath = "/";

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

// plugins
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
    entry: ["./src/index.js"],
    output: {
        path: resolveApp("dist"),
        filename: "static/js/[name].[hash:8].js",
        publicPath: publicPath
    },
    devServer: {
        host: "127.0.0.1",
        compress: true,
        port: 3000,
    },
    resolve: {
        alias: {
            Assets: path.resolve(__dirname, "src/assets/"),
            Components: path.resolve(__dirname, "src/components/"),
            Contexts: path.resolve(__dirname, "src/contexts/"),
            Hooks: path.resolve(__dirname, "src/hooks/"),
            Services: path.resolve(__dirname, "src/services/"),
            Views: path.resolve(__dirname, "src/views/")
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10000,
                            name: "static/media/[name].[hash:8].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 100000
                        }
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html",
            favicon: "./public/favicon.ico"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "static/css/[name].[hash:8].css"
        }),
        new Dotenv()
    ],
}