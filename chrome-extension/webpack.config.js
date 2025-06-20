const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development', // or 'production' for production builds
  target: 'web', // Target web platform
  entry: {
    popup: path.resolve(__dirname, 'popup/popup.js'), // Entry point for popup
    background: path.resolve(__dirname, 'background.js'), // Entry point for background script
    content: path.resolve(__dirname, 'content.js') 
    
  },
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory for bundled files
    filename: '[name].bundle.js', // Output filenames (popup.bundle.js, background.bundle.js)
    clean: true, // Clean the output directory before each build
  },
  devtool: 'cheap-module-source-map', // For better debugging in development
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Apply babel-loader to .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      // You can add loaders for CSS, images, etc., here if needed later
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'popup/popup.html'), // Path to your popup.html
      filename: 'popup.html', // Output filename for popup.html in dist folder
      chunks: ['popup'], // Only include the 'popup' entry bundle in popup.html
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'manifest.json'), 
          to: path.resolve(__dirname, 'dist/manifest.json') 
        }, // Copy manifest.json
        // You can add more static files to copy (e.g., icons, CSS)
      ],
    }),

   
  ],
  resolve: {
    extensions: ['.js', '.jsx'], // Allow importing .js and .jsx files without specifying extensions
  },
};