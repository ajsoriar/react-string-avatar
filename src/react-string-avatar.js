import React, { Component} from 'react';

class StringAvatar extends Component {
    
    generateAvatar (text, w, h, bgColor, bgImage, props) {
        let WIDTH = 256;
        let HEIGHT = 256;
        let canvas;
        let ctx;
        let fontsize;

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
        // Ctx.fillText(text, WIDTH / 2, HEIGHT - (HEIGHT / 2) + (default.fontsize / 3) + 5 );
        ctx.fillText(text, WIDTH / 2, HEIGHT - HEIGHT / 2 + fontsize / 3);

        return canvas.toDataURL(`image/${props.pictureFormat}`);
    };

    getInitialsFromString(str) {
        if (!str) {return '';}
        str = str.split(' ');
        let output = '';
            let i = 0;
            let len = str.length;
        for (i; i < len; i += 1) {if (str[i] !== '') output += str[i][0];} // .toUpperCase();
        return output;
    }

    renderImage() {
        // Let // long = 45,
        // pictureresolution = 256,
        // wrapper = true,
        let str = '';
            let bgColor = '#000';
            // textColor = "#fff",
            let pixelated = false;
            let imgstyling = {
                verticalAlign: 'top'
            };
            let roundShape = false;
            let defaultWrapperStyling =
            'border-radius:0; display:block; overflow:hidden;';
            // extraclasses = "",
            // extraimgclasses = "",
            // extrastyles = "",
            let cornerradius = 0;
            // pictureformat = "png",
            let colorspalette = [
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
            ];
            let autoColor = false;

        // Create text to be shown

        if (this.props.initials != undefined) {
            str = this.props.initials;
        }

        if (this.props.string != undefined) {
            str = this.getInitialsFromString(this.props.string);
        }

        // Calculate color

        if (this.props.bgColor != undefined) {
            bgColor = this.props.bgColor;
        } else if (this.props.autoColor != undefined) {
            autoColor = this.props.autoColor;
            if (autoColor === true) {
                let i;
                    let lon = str.length;
                    let charIndex = 0;
                    let colorIndex;
                for (i = 0; i < lon; i += 1) {charIndex = str.charCodeAt(i);}
                colorIndex = charIndex % colorspalette.length;
                bgColor = colorspalette[colorIndex];
            }
        }

        // --------------------------
        // Create the image here
        // --------------------------

        const imgData = this.generateAvatar(
            str,
            this.props.pictureResolution,
            this.props.pictureResolution,
            bgColor, // This.props.bgColor,
            null,
            this.props
        );

        // ------------------------------------------
        // Create HTML and styles wraping the image
        // ------------------------------------------

        imgstyling = {
            imageRendering: 'pixelated',
            imageRendering: '-moz-crisp-edges'
        };

        pixelated = this.props.pixelated;
        if (pixelated === true) {
            imgstyling.imageRendering = 'pixelated';
            // imgstyling.imageRendering = "-moz-crisp-edges";
        }

        defaultWrapperStyling = {
            overflow: 'hidden',
            width: `${this.props.width}px`,
            height: `${this.props.width}px`,
            boxSizing: 'unset'
        };

        if (this.props.roundShape !== undefined) {
            roundShape = this.props.roundShape;
            if (roundShape) {
                defaultWrapperStyling.borderRadius = `${this.props.width}px`;
                imgstyling.borderRadius = `${this.props.width}px`;
            }
        } else if (this.props.cornerRadius !== undefined) {
            cornerradius = this.props.cornerRadius;
            defaultWrapperStyling.borderRadius = `${cornerradius}px`;
            imgstyling.borderRadius = `${cornerradius}px`;
        }

        defaultWrapperStyling = {
            this.props.wrapperStyle,
            defaultWrapperStyling
        };

        const defaultImageStyling = {
            this.props.imgStyle,
            imgstyling
        };

        const imgHtml = () => (
            <img
                src={imgData}
                style={defaultImageStyling}
                width={this.props.width}
                height=""
                alt="react-string-avatar"
            />
        );

        if (this.props.wrapper) {
            return (
                <div className="avatar-wrapper " style={defaultWrapperStyling}>
                    {' '}
                    {imgHtml()}{' '}
                </div>
            );
        }

        return imgHtml();
    }

    componentDidMount () {

    }

    componentDidUpdate () {

    }

    render = () => this.renderImage();
}

export default StringAvatar;
