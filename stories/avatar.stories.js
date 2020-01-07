import React from 'react';
import Avatar from '../src/react-string-avatar.v3';
// import { action } from '@storybook/addon-actions';

export default {
    title: 'Avatar'
};

// v1

export const myAvatar2 = () => <Avatar string="AS" />;

myAvatar2.story = {
    name: 'Simplest example'
};

// v2

export const myAvatar3 = () => (
    <div>
        <div>
            <img
                alt="Example"
                src="https://raw.githubusercontent.com/ajsoriar/react-string-avatar/master/demo/react-string-avatar-examples.png"
            />
        </div>
        {/* <Avatar string="AS"></Avatar> */}
        <Avatar initials="A" />
        <Avatar initials="AS" bgColor="#00FF00" />
        <Avatar initials="AJS" bgColor="cyan" textColor="blue" roundShape="true" />
        <Avatar initials="AJ" bgColor="red" textColor="yellow" pictureResolution={512} width={64} />
        <Avatar initials="AJ" bgColor="yellow" textColor="green" pictureResolution={1024} width={32} />
        <Avatar initials="AS" bgColor="lightgreen" textColor="red" pictureResolution={16} width={128} pixelated={false} />
        <Avatar initials="AS" bgColor="#99f499" textColor="red" pictureResolution={16} width={128} pixelated />
        <Avatar initials="AS" roundShape bgColor="#a8ff2c" textColor="black" pictureResolution={512} width={42} pixelated={false} class="adres-css" wrapperStyle={{ border: '4px solid red' }} wrapper />
        <Avatar initials="123" roundShape string="  andres     jose   soria " bgColor="orange" textColor="#FFF" pictureResolution={256} width={64} pixelated={false} class="adres-css" wrapperStyle={{ border: '4px solid red' }} />
        <Avatar roundShape bgColor="#36adf2" textColor="white" pictureResolution={256} width={56} pixelated={false} class="adres-css" wrapperStyle={{ border: '2px solid blue' }} />
        <Avatar initials="CM" cornerRadius={7} bgColor="#3875d7" />
        <Avatar initials="jpg" pictureFormat="jpeg" bgColor="red" textColor="yellow" width={64} cornerRadius={5} />
        <Avatar initials="png" pictureFormat="png" bgColor="purple" textColor="yellow" width={64} cornerRadius={5} />
    </div>
);

myAvatar3.story = {
    name: 'Several examples'
};

// v3

const letters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let i;
let j;
let k;
const lon = letters.length;

const group1 = [];
for (i = 0; i < lon; i++) {
    group1.push(<Avatar initials={letters[i]}  autoColor={true} className="avatar" fontWeight={100} fontScale={150} />);
}

const group2 = [];
for (i = 0; i < lon; i++) {
    j = Math.floor(Math.random() * lon);
    group2.push(<Avatar initials={letters[i]+letters[j]} autoColor={true} className="avatar" fontWeight={400} fontScale={100} />);
}

const group3 = [];
for (i = 0; i < lon; i++) {
    j = Math.floor(Math.random() * lon);
    k = Math.floor(Math.random() * lon);
    group3.push(<Avatar initials={ letters[i]+letters[j]+letters[k] } width={90} autoColor={true} className="avatar" fontWeight={700} fontScale={50} roundShape="true" />);
}

const group4 = [];
for (i = 0; i < lon; i++) {
    j = Math.floor(Math.random() * lon);
    k = Math.floor(Math.random() * lon);
    group4.push(<Avatar initials={letters[i]} width={90} autoColor={true} className="avatar" fontWeight={100} fontScale={125} cornerRadius="7" textShadow="true" />);
}

export const myAvatar1 = () => (
    <div>
        <div>
            <img
                alt="Example"
                src="https://raw.githubusercontent.com/ajsoriar/react-string-avatar/master/demo/react-string-avatar-autocolor-example.png"
            />
        </div>
        Simplest example:<br />
        <Avatar initials="A" /><br />
        All colors:<br />
        {group1}<br />
        Two characters:<br />
        {group2}<br />
        Round shape and three characters:<br />
        {group3}<br />
        Border radius:<br />
        {group4}<br />
    </div>
);

myAvatar1.story = {
    name: 'Autocolor'
};
