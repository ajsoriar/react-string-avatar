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

// v3 multi

import Avatar3 from './../src/react-string-avatar.v3';

export const myAvatar3 = () => (
    <div>
        <div>
          <img src="https://raw.githubusercontent.com/ajsoriar/angular-avatar/master/demo/angular-avatar-examples.png"></img>
        </div>
        {/* <Avatar3 string="AS"></Avatar3> */}
        <Avatar3 initials="A" />
        <Avatar3 initials="AS" bgColor="#00FF00" />
        <Avatar3 initials="AJS" bgColor="cyan" textColor="blue" roundShape="true" ></Avatar3>
        <Avatar3 initials="AJ" bgColor="red" textColor="yellow" pictureResolution={512} width={64} />
        <Avatar3 initials="AJ" bgColor="yellow" textColor="green" pictureResolution={1024} width={32} />
        <Avatar3 initials="AS" bgColor="lightgreen" textColor="red" pictureResolution={16} width={128} pixelated={false} />
        <Avatar3 initials="AS" bgColor="#99f499" textColor="red" pictureResolution={16} width={128} pixelated />
        <Avatar3 initials="AS" roundShape bgColor="#a8ff2c" textColor="black" pictureResolution={512} width={42} pixelated={false} class="adres-css" wrapperStyle={{ border: '4px solid red' }} wrapper />
        <Avatar3 initials="123" roundShape string="  andres     jose   soria " bgColor="orange" textColor="#FFF" pictureResolution={256} width={64} pixelated={false} class="adres-css" wrapperStyle={{ border: '4px solid red' }} />
        <Avatar3 roundShape bgColor="#36adf2" textColor="white" pictureResolution={256} width={56} pixelated={false} class="adres-css" wrapperStyle={{ border: '2px solid blue' }} />
        <Avatar3 initials="CM" cornerRadius={7} bgColor="#3875d7" />
        <Avatar3 initials="jpg" pictureFormat="jpeg" bgColor="red" textColor="yellow" width={64} cornerRadius={5} />
        <Avatar3 initials="png" pictureFormat="png" bgColor="purple" textColor="yellow" width={64} cornerRadius={5} />
    </div>
);

myAvatar3.story = {
    name: 'Avatar v3 Multi'
};
