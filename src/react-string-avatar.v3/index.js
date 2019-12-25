import React, { Component } from 'react';

export default class Avatar extends Component {
    constructor() {
        super();
        this.state = {
            str: '',
            bgColor: '#000',
            // textColor: "#fff",
            pixelated: false,
            imgStyling: { verticalAlign: 'top' },
            roundShape: false,
            defaultWrapperStyling:
                'border-radius:0; display:block; overflow:hidden;',
            // extraclasses: "",
            // extraimgclasses: "",
            // extrastyles: "",
            cornerradius: 0,
            // pictureformat: "png",
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
            autoColor: false
        };
    }

    getInitialsFromString(str) {

        console.log( "str:", str );

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
    }

    generateAvatar(text, w, h, bgColor, props) {
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
        ctx.fillStyle = this.state.bgColor;
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        fontsize = WIDTH / (2 / (props.fontScale / 100));
        ctx.font = `${props.fontWeight} ${fontsize}px sans-serif`;

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
    }

    renderImage() {

        let {
            initials,
            wrapper,
            bgColor,
            textColor,
            pictureResolution,
            width,
            pixelated,
            roundShape,
            //defaultWrapperStyling,
            wrapperStyle,
            string,
            cornerRadius,
            pictureFormat,
            colorsPalette,
            autoColor,
            fontWeight,
            fontScale,
            textShadow,
            bind,
            upperCase,
            imgStyle
        } = this.props;

        // create text to be shown

        if (initials !== undefined) {
            this.state.str = initials;
        }

        if (string !== undefined) {
            this.state.str = this.getInitialsFromString(string);
        }

        // calculate color

        if (bgColor !== undefined) {
            this.state.bgColor = bgColor;
        } else if (this.state.autoColor !== undefined) {

            if (autoColor === true) {
                let i;
                const lon = this.state.str.length;
                let charIndex = 0;
                let colorIndex;
                for (i = 0; i < lon; i += 1){
                    charIndex = this.state.str.charCodeAt(i);
                }
                colorIndex = charIndex % this.state.colorsPalette.length;
                this.state.bgColor = this.state.colorsPalette[colorIndex];
            }
        }

        // --------------------------
        // Create the image here
        // --------------------------

        const imgData = this.generateAvatar(
            this.state.str,
            pictureResolution,
            pictureResolution,
            this.state.bgColor,
            this.props
        );

        // ------------------------------------------
        // Create HTML and styles wraping the image
        // ------------------------------------------

        var imgStyling = {
            imageRendering: 'pixelated',
            imageRendering: '-moz-crisp-edges'
        };

        if (pixelated === true) {
            imgStyling.imageRendering = 'pixelated';
            // imgStyling.imageRendering = "-moz-crisp-edges";
        };

        var defaultWrapperStyling = {
            overflow: 'hidden',
            width: `${width}px`,
            height: `${width}px`,
            boxSizing: 'unset'
        };

        if (roundShape !== undefined) {
            if (roundShape) {
                defaultWrapperStyling.borderRadius = `${width}px`;
                imgStyling.borderRadius = `${width}px`;
            }
        } else if (cornerRadius !== undefined) {
            var cornerradius = cornerRadius;
            defaultWrapperStyling.borderRadius = `${cornerradius}px`;
            imgStyling.borderRadius = `${cornerradius}px`;
        }

        // defaultWrapperStyling = {
        
        // wrapperStyle,
        // defaultWrapperStyling
        // };
        
        var stringStyle = {'width': 60+'px', 'height': 60+'px'};

        // const Example = ({ data }) => <img alt="LOL" src={`data:image/jpeg;base64,${data}`} />
        const Example = ({ data, style }) => <img alt="LOL" src={`${data}`} style={style} />;

        if (wrapper) {
            return (
                <div className="avatar-wrapper " style={stringStyle}>
                    <Example data={imgData} style={stringStyle}/>
                </div>
            );
        } else {
            return <Example data={imgData} style={stringStyle} />; // imgHtml();
        }

    } // renderImage ends here.

    componentDidMount () {

    }

    componentDidUpdate () {

    }

    render () {
        return this.renderImage();
    }

}