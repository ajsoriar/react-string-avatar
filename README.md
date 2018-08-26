# react-string-avatar [![Build Status](https://travis-ci.org/ajsoriar/angular-avatar.svg?branch=master)](https://travis-ci.org/ajsoriar/react-string-avatar)

[![npm version](https://badge.fury.io/js/react-string-avatar.svg)](https://badge.fury.io/js/react-string-avatar)
[![NuGet version](https://badge.fury.io/nu/react-string-avatar.svg)](https://badge.fury.io/nu/react-string-avatar)

React String Avatar is an ES6 module/component for React that generates a letter's avatar like Microsoft or Google do in their web apps. First letter of each word in a string or a group of initials will be used to generate the avatar. The image of the avatar will be rendered in an html img tag as a real png or jpeg. The image data can be retrieved using javascript to be stored in back-end giving you an initial profile picture in your web or mobile apps when the user does not upload one. Several React props are available to configure the output: size, shape, resolution, colors, etc.

![react-string-avatar auto-color feature examples](./demo/react-string-avatar-autocolor-example.png?raw=true "react-string-avatar auto-color feature examples")

## Quick start

```javascript
npm install react-string-avatar --save
```

### 1 Download and Install react-string-avatar

- Yarn: **yarn add react-string-avatar**
- NPM: **npm install react-string-avatar**
- NuGet: **PM> Install-Package react-string-avatar**
- github: **https://github.com/ajsoriar/react-string-avatar**

### 2 Import Custom Element

```javascript
import Avatar from 'react-string-avatar';
```

### 3 Start using it'!'

```javascript
<Avatar initials="A"></Avatar>
```
You will get this:
![react-string-avatar basic usage example](./demo/react-string-avatar-basic-example.png?raw=true "react-string-avatar basic usage example")

#### 3.1 Auto-color feature:

```javascript
<Avatar string="Foo Bar" autoColor={true} />
```

#### 3.2 More usage examples ready to copy and paste: :+1:

```javascript
<Avatar initials="A" />
<Avatar initials="AS" bgColor="#00FF00" />
<Avatar initials="AJ" bgColor="red" textColor="yellow" pictureResolution={512} width={64} />
<Avatar initials="AJ" bgColor="yellow" textColor="green" pictureResolution={1024} width={32} />
<Avatar initials="AS" bgColor="lightgreen" textColor="red" pictureResolution={16} width={128} pixelated={false} />
<Avatar initials="AS" bgColor="#99f499" textColor="red" pictureResolution={16} width={128} pixelated />
<Avatar initials="AS" roundShape bgColor="#a8ff2c" textColor="black" pictureResolution={512} width={42} pixelated={false} class="adres-css" wrapperStyle={{ border: '4px solid red' }} wrapper />
<Avatar initials="AS" roundShape string="  andres     jose   soria " bgColor="orange" textColor="#FFF" pictureResolution={256} width={64} pixelated={false} class="adres-css" wrapperStyle={{ border: '4px solid red' }} />
<Avatar roundShape bgColor="#36adf2" textColor="white" pictureResolution={256} width={56} pixelated={false} class="adres-css" wrapperStyle={{ border: '2px solid blue' }} />
<Avatar initials="CM" cornerRadius={7} bgColor="#3875d7" />
<Avatar initials="jpg" pictureFormat="jpeg" bgColor="red" textColor="yellow" width={64} cornerRadius={5} />
<Avatar initials="png" pictureFormat="png" bgColor="purple" textColor="yellow" width={64} cornerRadius={5} />
```
You will get this:

![More reacr-string-avatar basic usage examples](./demo/react-string-avatar-examples.png?raw=true "More reacr-string-avatar basic usage examples")

Run the live example in plunker: http://plnkr.co/edit/TfCxUn?p=preview

### 4 License

MIT

Copyright (c) 2018

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

**Free Software, Yeah!**
