
import './header';
import React, { Component } from 'react';
import AvatarUtils from './avatarUtils';

export default class Avatar extends Component {
    renderImage() {
        const { initials, wrapper, string } = this.props;

        // console.table(this.props);

        const imgData = AvatarUtils.generateAvatarImage(
            string
                ? AvatarUtils.getInitialsFromString(string).toLocaleUpperCase()
                : initials, // TODO: .toLocaleUpperCase() forceUpperCase = {true};
            this.props
        );

        const stringImageStyles = AvatarUtils.getStringImageStyles(this.props);

        const stringWrapperStyles = AvatarUtils.getStringWrapperStyles(
            this.props
        );

        // const AvatarImage = ({ data }) => <img alt="Avatar image" src={`data:image/jpeg;base64,${data}`} />
        const AvatarImage = ({ data, style }) => (
            <img alt="Avatar" src={`${data}`} style={style} />
        );

        if (wrapper) {
            return (
                <div className="avatar-wrapper " style={stringWrapperStyles}>
                    <AvatarImage data={imgData} style={stringImageStyles} />
                </div>
            );
        }

        return <AvatarImage data={imgData} style={stringImageStyles} />;
    }

    render() {
        return this.renderImage();
    }
}
