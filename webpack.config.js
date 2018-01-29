const webpack = require('webpack');
const path = require('path');
const paths = {
    appBuild: path.resolve(__dirname, 'build'),
    appIndexHtml: path.resolve(__dirname, 'public/index.html'),
    appIndexJs: path.resolve(__dirname, 'src/index.js'),
    nodePaths: path.join(__dirname, 'node_modules'),
};

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');

var appEnv = process.env.NODE_ENV || 'development';

var config = {
    entry: paths.appIndexJs,
    output: {
        path: paths.appBuild,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {}
    },
    module: {
        loaders: [
            // First, run the linter.
            // It's important to do this before Babel processes the JS.
            {
                enforce: "pre",
                test: /\.(js)$/,
                loader: 'eslint-loader',
                exclude: paths.nodePaths
            },
            // Process JS with Babel.
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: paths.nodePaths,
                query: {
                    plugins: ['transform-class-properties']
                }
            },
            // "css" loader resolves paths in CSS and adds assets as dependencies.
            // `ExtractTextPlugin` first applies the "sass" and "css" loaders
            // (second argument), then grabs the result CSS and puts it into a
            // separate file in our build process. This way we actually ship
            // a single CSS file in production instead of JS code injecting <style>
            // tags. If you use code splitting, however, any async bundles will still
            // use the "style" loader inside the async code so CSS from them won't be
            // in the main CSS file.
            {
                test: /\.css$/,
                use: 'css-loader'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            minimize: true
                        }
                    }
                    ]
                })
            },

            // JSON is not enabled by default in Webpack but both Node and Browserify
            // allow it implicitly so we also enable it.
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.html$/,
                loader: "raw-loader"
            },
            // "file" loader makes sure those assets end up in the `build` folder.
            // When you `import` an asset, you get its filename.
            {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[hash:8].[ext]',
                }
            },
            // "url" loader works just like "file" loader but it also embeds
            // assets smaller than specified size as data URLs to avoid requests.
            {
                test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: '[name].[hash:8].[ext]',
                }
            },
        ]
    },
    plugins: [
        // Makes some environment constiables available to the JS code, for example:
        // if (process.env.NODE_ENV === 'production') { ... }. 
        // It is absolutely essential that NODE_ENV was set to production here.
        // Otherwise React will be compiled in the very slow development mode.
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(appEnv)
            }
        }),
        new CleanPlugin(['build']),
        // Generates an `home.html` file with the <script> injected.
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: paths.appIndexHtml,
            inject: 'body',
            minify: false
        }),
        new ExtractTextPlugin('[name].css'),
        new ManifestPlugin({
            fileName: 'asset-manifest.json',
        }),
    ]
};

if (appEnv === 'production') {
    // minify/uglify the JS
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());

    config.plugins.push(new StatsPlugin('stats.json', {
        chunkModules: true,
        exclude: [/node_modules[\\\/]react/]
    }));
} else {
    // add source map files to be able to debug minified code
    config.devtool = '#inline-source-map';
}

module.exports = config;