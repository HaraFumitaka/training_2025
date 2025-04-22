module.exports = {
    // entryポイントの作成
    entry: {
        bundle: "./src/sample.ts"
    },
    // __dirname:current ディレクトリ
    output: {
        path: `${__dirname}/dist`,
        filename: "[name].js"
    },
    // productionモードは圧縮された形
    mode: "development",
    resolve: {
        extensions: [".ts", ".js"],
    },
    devServer: {
        static: {
            directory: `${__dirname}/dist`,
        },
        open: true,
    },
    module: {
        rules: [
            {
            test: /\.ts$/,
            loader: "ts-loader",
        }
    ]
    }
};
