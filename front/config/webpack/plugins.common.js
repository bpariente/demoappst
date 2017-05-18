/*
 * Copyright (C) 2016 Stratio (http://stratio.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NgToolsWebpack = require('@ngtools/webpack');

let plugins = [
   new ExtractTextPlugin('styles.css'),
   new HtmlWebpackPlugin({
      template: './src/index.html'
   }),
   new NgToolsWebpack.AotPlugin({
      tsConfigPath: './tsconfig.json',
      mainPath: "./src/main.ts"
   })
];

module.exports = plugins;