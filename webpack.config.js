const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    devtool: 'inline-cheap-source-map',
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                        plugins: [
                            '@babel/plugin-syntax-object-rest-spread',
                            // TODO remove (seems like babel bug, because Chrome support it already)
                            // https://github.com/babel/babel/blob/70361f12005e9ce0f9b961097006ff89f07c34a7/packages/babel-preset-env/README.md#issues
                            '@babel/plugin-proposal-object-rest-spread'
                        ]
                    }
                }
            }
        ]
    }
};
