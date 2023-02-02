import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

export function buildLoaders({ isDev }: {isDev: boolean}): webpack.RuleSetRule[] {
    
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoader = {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
    };

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
                    },
                }
            },
            "sass-loader",
        ],
    };

  

    return [
        typescriptLoader,
        scssLoader,
        cssLoader,
    ];
}
