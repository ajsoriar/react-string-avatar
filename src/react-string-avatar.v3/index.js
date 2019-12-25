import React, { Component } from 'react';
import AvatarUtils from './../avatarUtils';

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
        
        console.log("1 - this.props.initials:", this.props.initials );

        // Calculate color

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

        const imgData = AvatarUtils.generateAvatarImage(
            initials,
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
        
        var stringImageStyles = {'width': 60+'px', 'height': 60+'px'}; // AvatarUtils.getStringImageStyles ( props );

        var stringWrapperStyles = stringImageStyles; // AvatarUtils.getStringWrapperStyles ( props );

        // const Example = ({ data }) => <img alt="LOL" src={`data:image/jpeg;base64,${data}`} />
        const Example = ({ data, style }) => <img alt="LOL" src={`${data}`} style={style} />;

        if (wrapper) {
            return (
                <div className="avatar-wrapper " style={stringImageStyles}>
                    <Example data={imgData} style={stringImageStyles}/>
                </div>
            );
        } else {
            return <Example data={imgData} style={stringImageStyles} />; // imgHtml();
        }

    } // renderImage ends here.

    componentDidMount () {

    }

    componentDidUpdate (props) {

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
        } = props;
        
        console.log("componentDidUpdate() this.props.initials:", initials );

        var resultString = '';

        // Create text to be shown

        if (initials !== undefined) {
            resultString = initials;
        }

        if (string !== undefined) {
            resultString = AvatarUtils.getInitialsFromString(string);
        }

        this.setState({
            str: resultString
        })
    }

    render (state, props) {
        return this.renderImage();
    }

}