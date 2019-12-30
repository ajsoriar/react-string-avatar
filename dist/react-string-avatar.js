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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _avatarUtils = __webpack_require__(3);

var _avatarUtils2 = _interopRequireDefault(_avatarUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Avatar = function (_Component) {
    _inherits(Avatar, _Component);

    function Avatar() {
        _classCallCheck(this, Avatar);

        return _possibleConstructorReturn(this, (Avatar.__proto__ || Object.getPrototypeOf(Avatar)).apply(this, arguments));
    }

    _createClass(Avatar, [{
        key: 'renderImage',
        value: function renderImage() {
            var _props = this.props,
                initials = _props.initials,
                wrapper = _props.wrapper;

            //console.table(this.props);

            var imgData = _avatarUtils2.default.generateAvatarImage(this.props.string ? _avatarUtils2.default.getInitialsFromString(this.props.string).toLocaleUpperCase() : initials, // TODO: .toLocaleUpperCase() forceUpperCase = {true};
            this.props);

            var stringImageStyles = _avatarUtils2.default.getStringImageStyles(this.props);

            var stringWrapperStyles = _avatarUtils2.default.getStringWrapperStyles(this.props);

            // const AvatarImage = ({ data }) => <img alt="Avatar image" src={`data:image/jpeg;base64,${data}`} />
            var AvatarImage = function AvatarImage(_ref) {
                var data = _ref.data,
                    style = _ref.style;
                return _react2.default.createElement('img', { alt: 'Avatar image', src: '' + data, style: style });
            };

            if (wrapper) {
                return _react2.default.createElement(
                    'div',
                    { className: 'avatar-wrapper ', style: stringWrapperStyles },
                    _react2.default.createElement(AvatarImage, { data: imgData, style: stringImageStyles })
                );
            } else {
                return _react2.default.createElement(AvatarImage, { data: imgData, style: stringImageStyles });
            }
        }
    }, {
        key: 'render',
        value: function render(state, props) {
            return this.renderImage();
        }
    }]);

    return Avatar;
}(_react.Component);

exports.default = Avatar;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * react-string-avatar
 * React String Avatar is a simple React component that generates a letter's avatar like Microsoft or Google do in their web apps. First letter of each word in a string or a group of initials will be used to generate the avatar. The image of the avatar will be rendered in an html img tag as a real png or jpeg. The image data can be retrieved using javascript to be stored in back-end giving you an initial profile picture in your web or mobile apps when the user does not upload one. Several React props are available to configure the output: size, shape, resolution, colors, etc.
 * @version v1.0.2 - 2018-08-27
 * @link https://github.com/ajsoriar/react-string-avatar
 * @author Andres J. Soria R. <ajsoriar@gmail.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _avatarConstants = __webpack_require__(4);

var _avatarConstants2 = _interopRequireDefault(_avatarConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AvatarUtils = {

    getInitialsFromString: function getInitialsFromString(str) {

        console.log("2 - getInitialsFromString() str:", str);

        if (!str) {
            return '';
        }
        str = str.split(' ');
        var output = '';
        var i = 0;
        var len = str.length;

        for (i; i < len; i += 1) {
            if (str[i] !== '') {
                output += str[i][0];
            }
        }
        return output;
    },

    generateAvatarImage: function generateAvatarImage(str, props) {

        console.log("1 - generateAvatarImage() props:", props);

        if (!str) str = '';

        var WIDTH = 256;
        var HEIGHT = 256;
        var canvas = null;
        var ctx = null;
        var fontSize = 12;
        var fontScale = 100;
        var fontWeight = 300;
        var default_textcolor = "#fff";
        var font = "300 12px sans-serif";

        if (props.pictureResolution && props.pictureResolution > 0) {
            // Use by default the desired resolution to create the picture of the avatar
            WIDTH = props.pictureResolution;
            HEIGHT = props.pictureResolution;
        } else if (props.width) {
            //If resolution was not provided use width param
            WIDTH = props.width;
            HEIGHT = props.width;
        } else {
            //If none of them were provided use default width of 45
            WIDTH = _avatarConstants2.default.DEFAULT_WIDTH;
            HEIGHT = _avatarConstants2.default.DEFAULT_WIDTH;
        }

        canvas = document.createElement('canvas');
        canvas.id = 'ajsr-avatar-' + Date.now();
        canvas.width = WIDTH;
        canvas.height = HEIGHT;

        ctx = canvas.getContext('2d');
        ctx.fillStyle = props.bgColor;
        ctx.fillRect(0, 0, WIDTH, HEIGHT);

        fontSize = WIDTH / (2 / (fontScale / 100));
        font = fontWeight + " " + fontSize + "px sans-serif";
        ctx.font = font;

        if (props.textShadow === true) {
            ctx.shadowColor = 'black';
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.shadowBlur = 5;
        }

        ctx.textAlign = 'center';
        ctx.fillStyle = props.textColor ? props.textColor : default_textcolor;
        ctx.fillText(str, WIDTH / 2, HEIGHT - HEIGHT / 2 + fontSize / 3);

        return canvas.toDataURL('image/' + props.pictureFormat);
    },


    getStringImageStyles: function getStringImageStyles(props) {

        var resultObj = {};
        var _width;

        console.log("3 - getStringImageStyles, props: ", props);

        // 1 - width and height

        if (!props.width) {
            _width = _avatarConstants2.default.DEFAULT_WIDTH;
        } else {
            _width = props.width;
        }

        resultObj.width = _width + 'px';
        resultObj.height = _width + 'px';

        // 2 - round shape

        if (props.roundShape) {
            resultObj.borderRadius = _width + 'px';
        } else if (props.cornerRadius) {
            resultObj.borderRadius = props.cornerRadius + 'px';
        }

        // 3 - pixelated

        if (props.pixelated === true) {
            resultObj.imageRendering = 'pixelated';
            //resultObj.imageRendering = "-moz-crisp-edges";
        };

        return resultObj;
    },

    getStringWrapperStyles: function getStringWrapperStyles(props) {
        var resultObj = {};
        var _width;

        console.log("4 - getStringImageStyles, props: ", props);

        // 1 - width and height

        if (!props.width) {
            _width = _avatarConstants2.default.DEFAULT_WIDTH;
        } else {
            _width = props.width;
        }

        resultObj.width = _width + 'px';
        resultObj.height = _width + 'px';

        // 2 - round shape

        if (props.roundShape) {
            resultObj.borderRadius = _width + 'px';
        } else if (props.cornerRadius) {
            resultObj.borderRadius = props.cornerRadius + 'px';
        }

        // n - extra

        resultObj.display = 'inline-block';
        resultObj.boxSizing = 'unset';

        return resultObj;
    }
};

exports.default = AvatarUtils;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var AvatarConstants = {
    DEFAULT_WIDTH: 42
};

exports.default = AvatarConstants;

/***/ })
/******/ ]);