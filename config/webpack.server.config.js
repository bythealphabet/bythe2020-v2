const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const CURRENT_WORKING_DIR = process.cwd();

const serverConfig = {
    name: "server",
    entry: [path.join(CURRENT_WORKING_DIR, "./server/server.js")],
    target: "node",
    output: {
        path: path.join(CURRENT_WORKING_DIR, "/dist/"),
        filename: "server.generated.js",
        publicPath: "/dist/",
        libraryTarget: "commonjs2",
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/i,
                use: "isomorphic-style-loader",
            },
            {
                test: /\.module\.s(a|c)ss$/,
                use: [
                    "isomorphic-style-loader",
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: /\.module.(s(a|c)ss)$/,
                use: [
                    "isomorphic-style-loader",
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
            },
            {
                test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
                use: "file-loader",
            },
        ],
    },
};

module.exports = serverConfig;
