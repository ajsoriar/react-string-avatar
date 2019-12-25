import React from "react";

export default {
  title: "Avatar"
};

// v1

import Avatar1 from './../src/react-string-avatar.v1';

export const myAvatar1 = () => (
  <Avatar1 string="AS"></Avatar1>
);

myAvatar1.story = {
    name: 'Avatar v1'
};

// v2

import Avatar2 from './../src/react-string-avatar.v2';

export const myAvatar2 = () => (
  <Avatar2 string="AS"></Avatar2>
);

myAvatar2.story = {
    name: 'Avatar v2'
};

// v2 multi

import Avatar3 from './../src/react-string-avatar.v3';

export const myAvatar3 = () => (
    <div>
        <Avatar3 string="AS"></Avatar3>
        <Avatar2 initials="A" />
        <Avatar2 initials="AS" bgColor="#00FF00" />
        <Avatar2 initials="AJ" bgColor="red" textColor="yellow" pictureResolution={512} width={64} />
        <Avatar2 initials="AJ" bgColor="yellow" textColor="green" pictureResolution={1024} width={32} />
        <Avatar2 initials="AS" bgColor="lightgreen" textColor="red" pictureResolution={16} width={128} pixelated={false} />
        <Avatar2 initials="AS" bgColor="#99f499" textColor="red" pictureResolution={16} width={128} pixelated />
        <Avatar2 initials="AS" roundShape bgColor="#a8ff2c" textColor="black" pictureResolution={512} width={42} pixelated={false} class="adres-css" wrapperStyle={{ border: '4px solid red' }} wrapper />
        <Avatar2 initials="AS" roundShape string="  andres     jose   soria " bgColor="orange" textColor="#FFF" pictureResolution={256} width={64} pixelated={false} class="adres-css" wrapperStyle={{ border: '4px solid red' }} />
        <Avatar2 roundShape bgColor="#36adf2" textColor="white" pictureResolution={256} width={56} pixelated={false} class="adres-css" wrapperStyle={{ border: '2px solid blue' }} />
        <Avatar2 initials="CM" cornerRadius={7} bgColor="#3875d7" />
        <Avatar2 initials="jpg" pictureFormat="jpeg" bgColor="red" textColor="yellow" width={64} cornerRadius={5} />
        <Avatar2 initials="png" pictureFormat="png" bgColor="purple" textColor="yellow" width={64} cornerRadius={5} />
    </div>
);

myAvatar3.story = {
    name: 'Avatar v3 Multi'
};
