
import './header';
import React, { Component } from 'react';
import AvatarUtils from './avatarUtils';

export default class Avatar extends Component {

    renderImage() {

        let {
            initials,
            wrapper
        } = this.props;
        
        //console.table(this.props);

        const imgData = AvatarUtils.generateAvatarImage(
            this.props.string ? AvatarUtils.getInitialsFromString( this.props.string ).toLocaleUpperCase() : initials, // TODO: .toLocaleUpperCase() forceUpperCase = {true};
            this.props
        );

        const stringImageStyles = AvatarUtils.getStringImageStyles( this.props );

        const stringWrapperStyles = AvatarUtils.getStringWrapperStyles ( this.props );

        // const AvatarImage = ({ data }) => <img alt="Avatar image" src={`data:image/jpeg;base64,${data}`} />
        const AvatarImage = ({ data, style }) => <img alt="Avatar image" src={`${data}`} style={style} />;

        if (wrapper) {
            return (
                <div className="avatar-wrapper " style={stringWrapperStyles}>
                    <AvatarImage data={imgData} style={stringImageStyles}/>
                </div>
            );
        } else {
            return <AvatarImage data={imgData} style={stringImageStyles} />;
        }

    }

    render (state, props) {
        return this.renderImage();
    }

}