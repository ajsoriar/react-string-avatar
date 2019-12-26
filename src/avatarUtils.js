import React, { Component } from 'react';

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

        console.log( "3 - generateAvatarImage() text:", text );

        let WIDTH = 256;
        let HEIGHT = 256;
        let canvas = null;
        let ctx = null;
        let fontsize = null;

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

        // - 1 -
        //fontsize = WIDTH / (2 / (props.fontScale / 100));
        //ctx.font = `${props.fontWeight} ${fontsize}px sans-serif`;

        // var fontScale = 1;
        // fontsize = WIDTH / (2 / (fontScale / 100));
        // var fontWeight = '100px';
        // ctx.font = `${fontWeight} ${fontsize}px sans-serif`;

        if (props.textShadow === true) {
            ctx.shadowColor = 'black';
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.shadowBlur = 5;
        }

        ctx.textAlign = 'center';
        ctx.fillStyle = props.textColor;
        // ctx.fillText(text, WIDTH / 2, HEIGHT - (HEIGHT / 2) + (default.fontsize / 3) + 5 );
        ctx.fillText(text, WIDTH / 2, HEIGHT - HEIGHT / 2 + fontsize / 3);

        return canvas.toDataURL(`image/${props.pictureFormat}`);
    },

    getStringImageStyles: ( props ) => {

        var resultObj = {};
        var _width;

        console.log("[getStringImageStyles] props: ", props );

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
        
        return resultObj;
    },

    getStringWrapperStyles: ( props ) => {
        var resultObj = {};
        var _width;

        console.log("[getStringImageStyles] props: ", props );

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

        // n - extra

        resultObj.display = 'inline-block';
        
        return resultObj;
    }
};

export default AvatarUtils;