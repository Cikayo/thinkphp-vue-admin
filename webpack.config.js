const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const distPath = path.resolve(__dirname, './public/dist')

module.exports = {
  entry: path.resolve(__dirname, './src/main.js'),
  output: {
    path: distPath,
    filename: 'js/[name].[hash:5].bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',    //服务器的ip地址
    port: 8001,    //端口
    open: true,    //自动打开页面
    hot: true, // 热更新
    proxy: {
      '/sys': 'http://localhost:8000',
    },
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(cs|sas|scs)s$/,
        use: [
          'style-loader',
          {
            loader: "css-loader",
            options: {
              esModule: false
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/[name].[hash:5].[ext]',
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[hash:5].[ext]',
          }
        }
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true
    }),
    new HtmlWebpackPlugin(),
    new VueLoaderPlugin()
  ]
}