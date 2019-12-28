import React, { Component } from 'react';
import AvatarUtils from './../avatarUtils';

export default class Avatar extends Component {
    constructor() {
        super();

        /*
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
            cornerRadius: 0,
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
        */
       
    }

    renderImage() {

        let {
            initials,
            wrapper,
            bgColor,
            pictureResolution,
        } = this.props;
        
        console.table(this.props);

        // --------------------------
        // Create the image here
        // --------------------------

        const imgData = AvatarUtils.generateAvatarImage(
            initials,
            pictureResolution,
            pictureResolution,
            bgColor,
            this.props
        );

        // ------------------------------------------
        // Create HTML and styles wraping the image
        // ------------------------------------------

        var stringImageStyles = AvatarUtils.getStringImageStyles( this.props );

        var stringWrapperStyles = AvatarUtils.getStringWrapperStyles ( this.props );

        // const Example = ({ data }) => <img alt="Avatar image" src={`data:image/jpeg;base64,${data}`} />
        const Example = ({ data, style }) => <img alt="Avatar image" src={`${data}`} style={style} />;

        if (wrapper) {
            return (
                <div className="avatar-wrapper " style={stringWrapperStyles}>
                    <Example data={imgData} style={stringImageStyles}/>
                </div>
            );
        } else {
            return <Example data={imgData} style={stringImageStyles} />; // imgHtml();
        }

    } // renderImage ends here.

    render (state, props) {
        return this.renderImage();
    }

}