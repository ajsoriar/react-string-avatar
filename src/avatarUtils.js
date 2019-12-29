import React, { Component } from 'react';
import Constants from './avatarConstants'

const AvatarUtils = {

    getInitialsFromString: (str) => {

        console.log( "2 - getInitialsFromString() str:", str );

        if (!str) {
            return '';
        }
        str = str.split(' ');
        let output = '';
        let i = 0;
        const len = str.length;

        for (i; i < len; i += 1) {
            if (str[i] !== '') {
                output += str[i][0];
            }
        }
        return output;
    },

    generateAvatarImage(text, w, h, bgColor, props) {

        console.log( "1 - generateAvatarImage() props:", props ); // text:", text );

        console.log(w);
        console.log(h);

        let WIDTH = 256;
        let HEIGHT = 256;
        let canvas = null;
        let ctx = null;
        let fontsize = null;
        let fontScale = 2;
        let fontWeight = '100'; // '100px';


        let default_bgcolor = "#000";
        let default_textcolor = "#fff";

        // if (w !== undefined && w > 0) {
        //     if (h !== undefined && h > 0) {
        //         WIDTH = w;
        //         HEIGHT = h;
        //     }
        // } 

        if ( (w !== undefined && w > 0) && (h !== undefined && h > 0) ) {
            console.log( "1 - a");
            WIDTH = w;
            HEIGHT = h;
        } else {
            
            if ( props.width ) {
                console.log( "1 - b");
                WIDTH = props.width;
                HEIGHT = props.width;                
            } else {
                console.log( "1 - c");
                WIDTH = Constants.DEFAULT_WIDTH;
                HEIGHT = Constants.DEFAULT_WIDTH;
            }

        }

        canvas = document.createElement('canvas');
        canvas.id = `ajsr-avatar-${Date.now()}`;
        canvas.width = WIDTH;
        canvas.height = HEIGHT;

        ctx = canvas.getContext('2d');
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, WIDTH, HEIGHT);

        console.log(WIDTH);
        console.log(HEIGHT);
        console.log(fontScale);

        fontsize = 12; //WIDTH / (2 / (fontScale / 100));
        console.log(fontsize);
        console.log(fontWeight);
        // ctx.font = "30px Arial";
        var font = `${fontWeight}px ${fontsize}px sans-serif`;
        console.log(font);
        ctx.font = font;

        if (props.textShadow === true) {
            ctx.shadowColor = 'black';
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.shadowBlur = 5;
        }

        ctx.textAlign = 'center';
        ctx.fillStyle = props.textColor ? props.textColor : default_textcolor;
        // ctx.fillText(text, WIDTH / 2, HEIGHT - (HEIGHT / 2) + (default.fontsize / 3) + 5 );
        ctx.fillText(text, WIDTH / 2, HEIGHT - HEIGHT / 2 + fontsize / 3);

        return canvas.toDataURL(`image/${props.pictureFormat}`);
    },

    getStringImageStyles: ( props ) => {

        var resultObj = {};
        var _width;

        console.log("3 - getStringImageStyles, props: ", props );

        // 1 - width and height

        if ( !props.width ) {
            _width = 45;
        } else {
            _width = props.width;
        }

        resultObj.width = _width+'px';
        resultObj.height = _width+'px';

        // 2 - round shape

        if ( props.roundShape ) {
            resultObj.borderRadius = _width+'px';
        } else if ( props.cornerRadius ) {
            resultObj.borderRadius = props.cornerRadius+'px';
        }

        // 3 - pixelated

        if ( props.pixelated === true ) {
            resultObj.imageRendering = 'pixelated';
            //resultObj.imageRendering = "-moz-crisp-edges";
        };
        
        return resultObj;
    },

    getStringWrapperStyles: ( props ) => {
        var resultObj = {};
        var _width;

        console.log("4 - getStringImageStyles, props: ", props );

        // 1 - width and height

        if ( !props.width ) {
            _width = Constants.DEFAULT_WIDTH;
        } else {
            _width = props.width;
        }

        resultObj.width = _width+'px';
        resultObj.height = _width+'px';

        // 2 - round shape

        if ( props.roundShape ) {
            resultObj.borderRadius = _width+'px';
        } else if ( props.cornerRadius ) {
            resultObj.borderRadius = props.cornerRadius+'px';
        }

        // n - extra

        resultObj.display = 'inline-block';
        resultObj.boxSizing = 'unset';
        
        return resultObj;
    }
};

export default AvatarUtils;