import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import MiniCssExrtactPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from "./types/config";
const Dotenv = require('dotenv-webpack');

export function buildPlugins({ paths }: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExrtactPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new Dotenv()
    ]
}
