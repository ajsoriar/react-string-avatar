/**
 * react-string-avatar
 * React String Avatar is a simple React component that generates a letter's avatar like Microsoft or Google do in their web apps. First letter of each word in a string or a group of initials will be used to generate the avatar. The image of the avatar will be rendered in an html img tag as a real png or jpeg. The image data can be retrieved using javascript to be stored in back-end giving you an initial profile picture in your web or mobile apps when the user does not upload one. Several React props are available to configure the output: size, shape, resolution, colors, etc.
 * @version v1.0.1 - 2018-08-26
 * @link https://github.com/ajsoriar/react-string-avatar
 * @author Andres J. Soria R. <ajsoriar@gmail.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
 
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StringAvatar = function (_React$Component) {
  _inherits(StringAvatar, _React$Component);

  function StringAvatar() {
    _classCallCheck(this, StringAvatar);

    return _possibleConstructorReturn(this, (StringAvatar.__proto__ || Object.getPrototypeOf(StringAvatar)).apply(this, arguments));
  }

  _createClass(StringAvatar, [{
    key: 'generateAvatar',
    value: function generateAvatar(text, w, h, bgColor, bgImage, props) {
      var WIDTH = 256,
          HEIGHT = 256,
          canvas = void 0,
          ctx = void 0,
          font_size = void 0;

      if (w !== undefined && w > 0) {
        if (h !== undefined && h > 0) {
          WIDTH = w;
          HEIGHT = h;
        }
      }

      canvas = document.createElement('canvas');
      canvas.id = 'ngAvatar-' + Date.now();
      canvas.width = WIDTH;
      canvas.height = HEIGHT;

      ctx = canvas.getContext('2d');
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, WIDTH, HEIGHT);
      font_size = WIDTH / (2 / (props.fontScale / 100));
      ctx.font = props.fontWeight + ' ' + font_size + 'px sans-serif';

      if (props.textShadow === true) {
        ctx.shadowColor = 'black';
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 5;
      }

      ctx.textAlign = 'center';
      ctx.fillStyle = props.textColor;
      // ctx.fillText(_text, WIDTH / 2, HEIGHT - (HEIGHT / 2) + (_default.font_size / 3) + 5 );
      ctx.fillText(text, WIDTH / 2, HEIGHT - HEIGHT / 2 + font_size / 3);

      return canvas.toDataURL('image/' + props.pictureFormat);
    }
  }, {
    key: 'getInitialsFromString',
    value: function getInitialsFromString(str) {
      if (!str) return '';
      str = str.split(' ');
      var output = '',
          i = 0,
          len = str.length;
      for (i; i < len; i += 1) {
        if (str[i] !== '') output += str[i][0];
      } // .toUpperCase();
      return output;
    }
  }, {
    key: '_renderImage',
    value: function _renderImage() {
      var _this2 = this;

      // let // _long = 45,
      // _picture_resolution = 256,
      // _wrapper = true,
      var _str = '',
          _bgColor = '#000',

      // _textColor = "#fff",
      _pixelated = false,
          _img_styling = { verticalAlign: 'top' },
          _roundShape = false,
          _defaultWrapperStyling = 'border-radius:0; display:block; overflow:hidden;',

      // _extra_classes = "",
      // _extra_img_classes = "",
      // _extra_styles = "",
      _corner_radius = 0,

      // _picture_format = "png",
      _colors_palette = ['#bdc3c7', '#6f7b87', '#2c3e50', '#2f3193', '#662d91', '#922790', '#ec2176', '#ed1c24', '#f36622', '#f8941e', '#fab70f', '#fdde00', '#d1d219', '#8ec73f', '#00a650', '#00aa9c', '#00adef', '#0081cd', '#005bab'],
          _autoColor = false;

      // Create text to be shown

      if (this.props.initials != undefined) {
        _str = this.props.initials;
      }

      if (this.props.string != undefined) {
        _str = this.getInitialsFromString(this.props.string);
      }

      // Calculate color

      if (this.props.bgColor != undefined) {
        _bgColor = this.props.bgColor;
      } else if (this.props.autoColor != undefined) {
        _autoColor = this.props.autoColor;
        if (_autoColor === true) {
          var i = void 0,
              lon = _str.length,
              charIndex = 0,
              colorIndex = void 0;
          for (i = 0; i < lon; i += 1) {
            charIndex = _str.charCodeAt(i);
          }colorIndex = charIndex % _colors_palette.length;
          _bgColor = _colors_palette[colorIndex];
        }
      }

      // --------------------------
      // Create the image here
      // --------------------------

      var imgData = this.generateAvatar(_str, this.props.pictureResolution, this.props.pictureResolution, _bgColor, // this.props.bgColor,
      null, this.props);

      // ------------------------------------------
      // Create HTML and styles wraping the image
      // ------------------------------------------

      _img_styling = _defineProperty({
        imageRendering: 'pixelated'
      }, 'imageRendering', '-moz-crisp-edges');

      _pixelated = this.props.pixelated;
      if (_pixelated === true) {
        _img_styling.imageRendering = 'pixelated';
        // _img_styling.imageRendering = "-moz-crisp-edges";
      }

      _defaultWrapperStyling = {
        overflow: 'hidden',
        width: this.props.width + 'px',
        height: this.props.width + 'px',
        boxSizing: 'unset'
      };

      if (this.props.roundShape !== undefined) {
        _roundShape = this.props.roundShape;
        if (_roundShape) {
          _defaultWrapperStyling.borderRadius = this.props.width + 'px';
          _img_styling.borderRadius = this.props.width + 'px';
        }
      } else if (this.props.cornerRadius !== undefined) {
        _corner_radius = this.props.cornerRadius;
        _defaultWrapperStyling.borderRadius = _corner_radius + 'px';
        _img_styling.borderRadius = _corner_radius + 'px';
      }

      _defaultWrapperStyling = Object.assign({}, this.props.wrapperStyle, _defaultWrapperStyling);

      var _defaultImageStyling = Object.assign({}, this.props.imgStyle, _img_styling);

      var imgHtml = function imgHtml() {
        return _react2.default.createElement('img', {
          src: imgData,
          style: _defaultImageStyling,
          width: _this2.props.width,
          height: '',
          alt: 'react-string-avatar'
        });
      };

      if (this.props.wrapper) {
        return _react2.default.createElement(
          'div',
          { className: 'avatar-wrapper ', style: _defaultWrapperStyling },
          imgHtml()
        );
      }

      return imgHtml();
    } // _renderImage ends here.

  }, {
    key: 'render',
    value: function render() {
      return this._renderImage();
    }
  }]);

  return StringAvatar;
}(_react2.default.Component);

StringAvatar.propTypes = {
  initials: _propTypes2.default.string,
  // width: PropTypes.string,
  wrapper: _propTypes2.default.bool,
  bgColor: _propTypes2.default.string,
  textColor: _propTypes2.default.string,
  pictureResolution: _propTypes2.default.number,
  width: _propTypes2.default.number,
  pixelated: _propTypes2.default.bool,
  roundShape: _propTypes2.default.bool,
  defaultWrapperStyling: _propTypes2.default.object,
  wrapperStyle: _propTypes2.default.object,
  // class: PropTypes.string,
  // imgClass: PropTypes.string,

  string: _propTypes2.default.string,
  cornerRadius: _propTypes2.default.number,
  pictureFormat: _propTypes2.default.string,
  colorsPalette: _propTypes2.default.array,
  autoColor: _propTypes2.default.bool,
  fontWeight: _propTypes2.default.number,
  fontScale: _propTypes2.default.number,
  textShadow: _propTypes2.default.bool,
  bind: _propTypes2.default.bool,
  // maxLength: PropTypes.string,
  upperCase: _propTypes2.default.bool,
  imgStyle: _propTypes2.default.object
};

StringAvatar.defaultProps = {
  initials: null,
  wrapper: true,
  bgColor: '#000',
  textColor: '#fff',
  pictureResolution: 256, // 256,
  width: 45,
  pixelated: false,
  // imgStyling: "vertical-align:top;",
  roundShape: false,
  defaultWrapperStyling: {
    borderRadius: 0,
    display: 'block',
    overflow: 'hidden'
  },
  wrapperStyle: {},
  // extraClasses: "",
  // extraImgClasses: "",
  // extraStyles: "",

  string: null,
  cornerRadius: 0,
  pictureFormat: 'png',
  colorsPalette: ['#bdc3c7', '#6f7b87', '#2c3e50', '#2f3193', '#662d91', '#922790', '#ec2176', '#ed1c24', '#f36622', '#f8941e', '#fab70f', '#fdde00', '#d1d219', '#8ec73f', '#00a650', '#00aa9c', '#00adef', '#0081cd', '#005bab'],
  autoColor: false,
  fontWeight: 100,
  fontScale: 100,
  textShadow: false,
  bind: false,
  // imgWidth: "100%",
  upperCase: false,
  imgStyle: {}
};

exports.default = StringAvatar;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = react;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = prop-types;

/***/ })
/******/ ]);