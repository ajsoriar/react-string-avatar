import React from 'react';
import PropTypes from 'prop-types';

class StringAvatar extends React.Component {
  generateAvatar(text, w, h, bgColor, bgImage, props) {
    let WIDTH = 256,
      HEIGHT = 256,
      canvas,
      ctx,
      font_size;

    if (w !== undefined && w > 0) {
      if (h !== undefined && h > 0) {
        WIDTH = w;
        HEIGHT = h;
      }
    }

    canvas = document.createElement('canvas');
    canvas.id = `ngAvatar-${Date.now()}`;
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    ctx = canvas.getContext('2d');
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    font_size = WIDTH / (2 / (props.fontScale / 100));
    ctx.font = `${props.fontWeight} ${font_size}px sans-serif`;

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

    return canvas.toDataURL(`image/${props.pictureFormat}`);
  }

  getInitialsFromString(str) {
    if (!str) return '';
    str = str.split(' ');
    let output = '',
      i = 0,
      len = str.length;
    for (i; i < len; i += 1) if (str[i] !== '') output += str[i][0]; // .toUpperCase();
    return output;
  }
  _renderImage() {
    // let // _long = 45,
    // _picture_resolution = 256,
    // _wrapper = true,
    let _str = '',
      _bgColor = '#000',
      // _textColor = "#fff",
      _pixelated = false,
      _img_styling = { verticalAlign: 'top' },
      _roundShape = false,
      _defaultWrapperStyling =
        'border-radius:0; display:block; overflow:hidden;',
      // _extra_classes = "",
      // _extra_img_classes = "",
      // _extra_styles = "",
      _corner_radius = 0,
      // _picture_format = "png",
      _colors_palette = [
        '#bdc3c7',
        '#6f7b87',
        '#2c3e50',
        '#2f3193',
        '#662d91',
        '#922790',
        '#ec2176',
        '#ed1c24',
        '#f36622',
        '#f8941e',
        '#fab70f',
        '#fdde00',
        '#d1d219',
        '#8ec73f',
        '#00a650',
        '#00aa9c',
        '#00adef',
        '#0081cd',
        '#005bab'
      ],
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
        let i,
          lon = _str.length,
          charIndex = 0,
          colorIndex;
        for (i = 0; i < lon; i += 1) charIndex = _str.charCodeAt(i);
        colorIndex = charIndex % _colors_palette.length;
        _bgColor = _colors_palette[colorIndex];
      }
    }

    // --------------------------
    // Create the image here
    // --------------------------

    const imgData = this.generateAvatar(
      _str,
      this.props.pictureResolution,
      this.props.pictureResolution,
      _bgColor, // this.props.bgColor,
      null,
      this.props
    );

    // ------------------------------------------
    // Create HTML and styles wraping the image
    // ------------------------------------------

    _img_styling = {
      imageRendering: 'pixelated',
      imageRendering: '-moz-crisp-edges'
    };

    _pixelated = this.props.pixelated;
    if (_pixelated === true) {
      _img_styling.imageRendering = 'pixelated';
      // _img_styling.imageRendering = "-moz-crisp-edges";
    }

    _defaultWrapperStyling = {
      overflow: 'hidden',
      width: `${this.props.width}px`,
      height: `${this.props.width}px`,
      boxSizing: 'unset'
    };

    if (this.props.roundShape !== undefined) {
      _roundShape = this.props.roundShape;
      if (_roundShape) {
        _defaultWrapperStyling.borderRadius = `${this.props.width}px`;
        _img_styling.borderRadius = `${this.props.width}px`;
      }
    } else if (this.props.cornerRadius !== undefined) {
      _corner_radius = this.props.cornerRadius;
      _defaultWrapperStyling.borderRadius = `${_corner_radius}px`;
      _img_styling.borderRadius = `${_corner_radius}px`;
    }

    _defaultWrapperStyling = Object.assign(
      {},
      this.props.wrapperStyle,
      _defaultWrapperStyling
    );

    const _defaultImageStyling = Object.assign(
      {},
      this.props.imgStyle,
      _img_styling
    );

    const imgHtml = () => (
      <img
        src={imgData}
        style={_defaultImageStyling}
        width={this.props.width}
        height=""
        alt="react-string-avatar"
      />
    );

    if (this.props.wrapper) {
      return (
        <div className="avatar-wrapper " style={_defaultWrapperStyling}>
          {imgHtml()}
        </div>
      );
    }

    return imgHtml();
  } // _renderImage ends here.

  render() {
    return this._renderImage();
  }
}

StringAvatar.propTypes = {
  initials: PropTypes.string,
  // width: PropTypes.string,
  wrapper: PropTypes.bool,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  pictureResolution: PropTypes.number,
  width: PropTypes.number,
  pixelated: PropTypes.bool,
  roundShape: PropTypes.bool,
  defaultWrapperStyling: PropTypes.object,
  wrapperStyle: PropTypes.object,
  // class: PropTypes.string,
  // imgClass: PropTypes.string,

  string: PropTypes.string,
  cornerRadius: PropTypes.number,
  pictureFormat: PropTypes.string,
  colorsPalette: PropTypes.array,
  autoColor: PropTypes.bool,
  fontWeight: PropTypes.number,
  fontScale: PropTypes.number,
  textShadow: PropTypes.bool,
  bind: PropTypes.bool,
  // maxLength: PropTypes.string,
  upperCase: PropTypes.bool,
  imgStyle: PropTypes.object
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
  colorsPalette: [
    '#bdc3c7',
    '#6f7b87',
    '#2c3e50',
    '#2f3193',
    '#662d91',
    '#922790',
    '#ec2176',
    '#ed1c24',
    '#f36622',
    '#f8941e',
    '#fab70f',
    '#fdde00',
    '#d1d219',
    '#8ec73f',
    '#00a650',
    '#00aa9c',
    '#00adef',
    '#0081cd',
    '#005bab'
  ],
  autoColor: false,
  fontWeight: 100,
  fontScale: 100,
  textShadow: false,
  bind: false,
  // imgWidth: "100%",
  upperCase: false,
  imgStyle: {}
};

export default StringAvatar;
