//'use strict';

/*

    How to use this:

    <StringAvatar 
    name="Andres Soria"
    size={48}
    radius={5}
    />

*/

/*
<ng-avatar 
initials="{{ event.event_context.Username }}" 
upper-case="true" 
img-class="image-class" 
wrapper="false" 
max-length="1" 
width="40" 
corner-radius="3" 
class="left" 
auto-color="true" 
font-weight="500" 
font-scale="120"></ng-avatar>
*/

//import React from 'react';
//import React, { PropTypes, Component } from 'react'
import React from 'react';
import PropTypes from 'prop-types';

class StringAvatar extends React.Component {

    static displayName = 'StringAvatar';

/*
    initials: null,
    wrapper: true,
    bgColor: "#000",
    textColor: "#fff",
    pictureResolution: 50, //256,
    width: 60,
    pixelated: false,
    //imgStyling: "vertical-align:top;",
    roundShape: false,
    //wrapperStyling: "border-radius:0; display:block; overflow:hidden;",
    //extraClasses: "",
    //extraImgClasses: "",
    //extraStyles: "",
    cornerRadius: "0",
    pictureFormat: "png",
    colorsPalette: ["#bdc3c7", "#6f7b87", "#2c3e50", "#2f3193", "#662d91", "#922790", "#ec2176", "#ed1c24", "#f36622", "#f8941e", "#fab70f", "#fdde00", "#d1d219", "#8ec73f", "#00a650", "#00aa9c", "#00adef", "#0081cd", "#005bab"],
    autoColor: false,
    fontWeight: 100,
    fontScale: 100,
    textShadow: false,
    bind: false,
    //imgWidth: "100%",
    upperCase: false,
*/

    _renderImage() {
 
        var _long = 45,
            _picture_resolution = 256,
            _wrapper = true,
            _str = "", //scope.initials || "",
            _bgColor = "#000",
            _textColor = "#fff",
            _pixelated = false,
            _img_styling = { verticalAlign: 'top' },
            _roundShape = false,
            _wrapperStyling = "border-radius:0; display:block; overflow:hidden;",
            _extra_classes = "",
            _extra_img_classes = "",
            _extra_styles = "",
            _corner_radius = "0",
            _picture_format = "png",
            _colors_palette = ["#bdc3c7","#6f7b87","#2c3e50","#2f3193","#662d91","#922790","#ec2176","#ed1c24","#f36622","#f8941e","#fab70f","#fdde00","#d1d219","#8ec73f","#00a650","#00aa9c","#00adef","#0081cd","#005bab"],
            _autoColor = false,
            _font_weight = 100,
            _font_scale = 100,
            _text_shadow = false,
            _bind = false,
            _img_width = "100%",
            _upperCase = false;


        // -----------------------------
        // utility functions
        // -----------------------------

        function generateAvatar(text, w, h, bgColor, bgImage, props ) {

            var WIDTH = 256,
                HEIGHT = 256,
                canvas,
                ctx,
                font_size;

            console.log("w:", w);
            console.log("h:", h);
            console.log("text:", text);

            if (w != undefined && w > 0) {
                if (h != undefined && h > 0) {
                    WIDTH = w;
                    HEIGHT = h;
                }
            }

            canvas = document.createElement('canvas');
            canvas.id = "ngAvatar-" + Date.now();
            canvas.width = WIDTH;
            canvas.height = HEIGHT;

            ctx = canvas.getContext('2d');
            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, WIDTH, HEIGHT);

            font_size = WIDTH / (2 / (props.fontScale / 100));

            console.log("font_size:", font_size);

            ctx.font = props.fontWeight + " " + font_size + "px sans-serif";

            if (props.textShadow === true) {
                ctx.shadowColor = "black";
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                ctx.shadowBlur = 5;
            }

            ctx.textAlign = "center";
            ctx.fillStyle = props.textColor;
            //ctx.fillText(_text, WIDTH / 2, HEIGHT - (HEIGHT / 2) + (_default.font_size / 3) + 5 );
            ctx.fillText(text, WIDTH / 2, HEIGHT - (HEIGHT / 2) + (font_size / 3));

            return canvas.toDataURL("image/" + props.pictureFormat );
        }

        function getInitialsFromString(str) {

            console.log("str:", str );

            if (!str) return ""

            var output = "",
                i = 0,
                str = str.split(" "),
                len = str.length;

            for (i; i < len; i++) if (str[i] != "") output += str[i][0]; //.toUpperCase();

            return output;
        }

        // -----------------------------
        // checkValues
        // -----------------------------
        
        console.log("this.props:", this.props);

        // Create text to be shown
        
        if (this.props.initials != undefined) {
            _str = this.props.initials;
        }
 
        if (this.props.string != undefined) {
            _str = getInitialsFromString( this.props.string );
        }


        // Calculate color

        if (this.props.bgColor != undefined) {
            _bgColor = this.props.bgColor;
        } else {

            if (this.props.autoColor != undefined) {

                _autoColor = this.props.autoColor;
                if ( _autoColor === true ) {
                    var i, lon = _str.length, charIndex=0,colorIndex;
                    for(i=0; i<lon;i++) charIndex = _str.charCodeAt(i);
                    colorIndex = charIndex % _colors_palette.length;
                    _bgColor = _colors_palette[ colorIndex ];
                }
            }                     
        }

        // --------------------------
        // Create the image here
        // --------------------------

        var imgData = generateAvatar(
            _str,
            this.props.pictureResolution,
            this.props.pictureResolution,
            _bgColor, //this.props.bgColor,
            null,
            this.props
        );


        // ------------------------------------------
        // Create HTML and styles wraping the image
        // ------------------------------------------

        var _img_styling = { imageRendering: 'pixelated', imageRendering: '-moz-crisp-edges' };

        var _pixelated = this.props.pixelated;
        if ( _pixelated === true ) { 
            _img_styling.imageRendering = "pixelated"; 
            //_img_styling.imageRendering = "-moz-crisp-edges";
        }

        var _wrapperStyling = { overflow: 'hidden', width: this.props.width, height: this.props.width }; //borderRadius: this.props.width +'px', 

        if (this.props.roundShape != undefined) {
            console.log("1");
            _roundShape = this.props.roundShape;
            if ( _roundShape ) {
                console.log("2");
                _wrapperStyling.borderRadius = this.props.width +"px";
            }
        } else {
            console.log("3");
            if ( this.props.cornerRadius != undefined ){
                console.log("4");
                _corner_radius = this.props.cornerRadius;
                _wrapperStyling.borderRadius = _corner_radius +"px";
            }
        }

        var imgHtml = <img src={imgData} style={ _img_styling} width={this.props.width} height="" />

        if ( this.props.wrapper ) {
            return <div className="avatar-wrapper " style={ _wrapperStyling } >{ imgHtml }</div>
        } else {
            return imgHtml
        }

    } //this.props.renderImage ends here.

    render() { 
        return this._renderImage();
    }

}



/*

var imgData = generateAvatar( _str, _pictureResolution, _pictureResolution, _bgColor, _textColor, null);
 
var html = '';
if (_wrapper) html += '<div class="avatar-wrapper '+ _extraClasses +'" style="'+ _wrapperStyling +' width:' + _long + 'px; height:' + _long + 'px; '+ _extraStyles +'">';
html += '<img src="' + imgData + '" class="avatar-picture '+ _extraImgClasses +'" style="'+ _imgStyling +'" width="'+ _imgWidth +'" height="" />';
if (_wrapper) html += '</div>';

var replacementElement = angular.element(html);
currentElement.replaceWith(replacementElement);
currentElement = replacementElement;
*/

/*
    const size = 50;
    const imageStyle = {
        maxWidth: '100%',
        width: size,
        height: size
    };
    return (
        <div className="hello"><img width={this.props.size}
            height={this.props.size}
            style={imageStyle}
            alt="andres"
        />-a-{ this.props.name }-a-</div>
    );
*/

StringAvatar.propTypes = {
    initials: PropTypes.string,
    //width: PropTypes.string,
    wrapper: PropTypes.bool,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    pictureResolution: PropTypes.number,
    width: PropTypes.number,
    pixelated: PropTypes.bool,
    roundShape: PropTypes.bool,
    wrapperStyling: PropTypes.object,
    //class: PropTypes.string, //*
    //imgClass: PropTypes.string, //*
    style: PropTypes.object,
    string: PropTypes.string, //*
    cornerRadius: PropTypes.string,
    pictureFormat: PropTypes.string,
    colorsPalette: PropTypes.array,
    autoColor: PropTypes.bool,
    fontWeight: PropTypes.number,
    fontScale: PropTypes.number,
    textShadow: PropTypes.bool,
    bind: PropTypes.bool,
    //maxLength: PropTypes.string, //*
    upperCase: PropTypes.bool,
};


StringAvatar.defaultProps = {
    initials: null,
    wrapper: true,
    bgColor: "#000",
    textColor: "#fff",
    pictureResolution: 50, //256,
    width: 60,
    pixelated: false,
    //imgStyling: "vertical-align:top;",
    roundShape: false,
    wrapperStyling: { 'borderRadius':0, 'display':'block', 'overflow':'hidden' },
    //extraClasses: "",
    //extraImgClasses: "",
    //extraStyles: "",
    style: {},
    string: null,
    cornerRadius: "0",
    pictureFormat: "png",
    colorsPalette: ["#bdc3c7", "#6f7b87", "#2c3e50", "#2f3193", "#662d91", "#922790", "#ec2176", "#ed1c24", "#f36622", "#f8941e", "#fab70f", "#fdde00", "#d1d219", "#8ec73f", "#00a650", "#00aa9c", "#00adef", "#0081cd", "#005bab"],
    autoColor: false,
    fontWeight: 100,
    fontScale: 100,
    textShadow: false,
    bind: false,
    //imgWidth: "100%",
    upperCase: false,
};

export default StringAvatar;