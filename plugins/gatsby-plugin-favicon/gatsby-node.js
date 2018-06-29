'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _faviconsWebpackPlugin = require('favicons-webpack-plugin');

var _faviconsWebpackPlugin2 = _interopRequireDefault(_faviconsWebpackPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.onCreateWebpackConfig = function (_ref, _ref2) {
  var actions = _ref.actions,
      stage = _ref.stage;
  var logo = _ref2.logo,
      _ref2$icons = _ref2.icons,
      icons = _ref2$icons === undefined ? {} : _ref2$icons;

  if (stage === 'develop-html' || stage === 'build-html') {
    actions.setWebpackConfig({
      plugins: [new _faviconsWebpackPlugin2.default({
        logo: logo || './src/favicon.png',
        prefix: 'favicons/',
        icons: _extends({
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: true,
          favicons: true,
          firefox: true,
          twitter: true,
          yandex: true,
          windows: true
        }, icons)
      })]
    });
  }
};