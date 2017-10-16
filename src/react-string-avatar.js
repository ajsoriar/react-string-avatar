import React, { PropTypes, Component } from 'react'

class Andres3 extends React.Component {

    _renderImage() {
        return (
            <div className="hello man">{ this.props.name } { this.props.age }</div>
        ); 
    }

    render() {

      let {name,age} = this.props;
      if(name === undefined || age === undefined){
        console.log('undefined props')
      } else {
        console.log('defined props')
      }
   
      const size = this.props.size;
      
        return (
            <div className="chin">{ this._renderImage() }</div>
        );
    }
  }

  Andres3.contextTypes = {
    router: React.PropTypes.object.isRequired
  };
  
  Andres3.defaultProps = {
      name: "Andrew123",
      age: 13
    //cityList: [],
    //provinceList: [],
  };
  
  Andres3.propTypes = {
    name: React.PropTypes.string.isRequired,
    age: React.PropTypes.number.isRequired,
    //cityList: React.PropTypes.array.isRequired,
    //provinceList: React.PropTypes.array.isRequired,
  }

  export default Andres3;





//'use strict';

/*
<ng-avatar 
initials="{{ event.event_context.Username }}" 
upper-case="true" 
img-class="image-class" 
wrapper="false" 
max-length="1" 
width="40" 
corner-radius="3" 
class="left" 
auto-color="true" 
font-weight="500" 
font-scale="120"></ng-avatar>
*/


//import React from 'react';

import React, { PropTypes, Component } from 'react'

const propTypes = {
    //name: PropTypes.string,
    
    initials: PropTypes.string,
    width: PropTypes.string,
    bgcolor: PropTypes.string,
    textColor: PropTypes.string,
    wrapper: PropTypes.string,
    pictureResolution: PropTypes.number,
    pixelated: PropTypes.string,
    roundShape: PropTypes.string,
    class: PropTypes.string,
    imgClass: PropTypes.string,
    style: PropTypes.string,
    string: PropTypes.string,
    cornerRadius: PropTypes.string,
    pictureFormat: PropTypes.string,
    colorsPalette: PropTypes.string,
    autoColor: PropTypes.string,
    fontWeight: PropTypes.string,
    fontScale: PropTypes.string,
    textShadow: PropTypes.string,
    bind: PropTypes.string,
    maxLength: PropTypes.string,
    upperCase: PropTypes.string,
};
  
const defaultProps = {
    //name: 'xxx',

    pictureResolution: 50, //256,
    wrapper: true,
    //str: "", //scope.initials || "",
    bgcolor: "#000",
    textcolor: "#fff",
    pixelated: false,
    imgStyling: "vertical-align:top;",
    roundShape: false,
    wrapper_styling: "border-radius:0; display:block; overflow:hidden;",
    extraClasses: "",
    extraImgClasses: "",
    extraStyles: "",
    cornerRadius: "0",
    pictureFormat: "png",
    colorsPalette: ["#bdc3c7","#6f7b87","#2c3e50","#2f3193","#662d91","#922790","#ec2176","#ed1c24","#f36622","#f8941e","#fab70f","#fdde00","#d1d219","#8ec73f","#00a650","#00aa9c","#00adef","#0081cd","#005bab"],
    autoColor: false,
    fontWeight: 100,
    fontScale: 100,
    textShadow: false,
    bind: false,
    imgWidth: "100%",
    upperCase: false,
};

export default class ReactStringAvatar extends React.Component {

    static displayName = 'ReactStringAvatar'

    _renderImage() {

        /*

        // thanks to: https://stackoverflow.com/questions/33957229/react-tutorial-typeerror-cannot-read-property-props-of-undefined

        I had the same error message "Cannot read property 'props' of undefined", but from a different cause: when this is called from within a function, javascript can not reach the variable because this is in an outer scope. (Note: I was in ES5)
        In this case, simply store this in another variable, prior to the function (in the scope of your component): var that = this;
        Then you will be able to call that.props from within the function.
        */

        var that = this;
    
        function generateAvatar(name, w, h, bgcolor, textcolor, bgImage) {
            
            var WIDTH = 256, 
                HEIGHT = 256, 
                canvas, 
                ctx, 
                font_size;

            console.log("w:", w );
            console.log("h:", h );
            console.log("name:", name );
    
            if (w != undefined && w > 0) {
                if (h != undefined && h > 0) {
                    WIDTH = w;
                    HEIGHT = h;
                }
            }
    
            canvas = document.createElement('canvas');
            canvas.id = "ngAvatar-" + Date.now();
            canvas.width = WIDTH;
            canvas.height = HEIGHT;
    
            ctx = canvas.getContext('2d');
            ctx.fillStyle = bgcolor;
            ctx.fillRect(0, 0, WIDTH, HEIGHT);

            var _default = {
                fontWeight: 100,
                fontScale: 100,
                //str: "J",
                pictureFormat: "png"
            };

            var str = getInitialsFromString( name ); //"Try This!");

            console.log("str:", str );

            font_size = WIDTH / ( 2 / ( _default.fontScale / 100 ) );     

            console.log("font_size:", font_size );

            ctx.font = _default.fontWeight +" "+ font_size +"px sans-serif";
    
            if ( _default.textShadow === true ) {
                ctx.shadowColor = "black";
                ctx.shadowOffsetX = 0; 
                ctx.shadowOffsetY = 0; 
                ctx.shadowBlur = 5;                        
            }
    
            ctx.textAlign = "center";
            ctx.fillStyle = "#fff"; //textcolor;
            //ctx.fillText(_str, WIDTH / 2, HEIGHT - (HEIGHT / 2) + (_default.font_size / 3) + 5 );
            ctx.fillText( str, WIDTH / 2, HEIGHT - (HEIGHT / 2) + ( font_size / 3) );
    
            return canvas.toDataURL( "image/"+_default.pictureFormat );
        }
    
        function getInitialsFromString( str ){
    
            var output = "", 
                i = 0, 
                str = str.split(" "),
                len = str.length;
            
            for ( i; i < len; i++ ) if ( str[i] != "" ) output += str[i][0]; //.toUpperCase();

            return output;
        }
    
        const size = 50;

        const imageStyle = {
            maxWidth: '100%',
            width: size,
            height: size
        };

        console.log("this.props:", this.props );
        //console.log("h:", h );

        var imgData = generateAvatar(
            this.props.str, 
            this.props.pictureResolution,
            this.props.pictureResolution,
            this.props.bgcolor,
            this.props.textcolor, 
            null
        );
        
            console.log("A");

        return ( <img src={imgData} style={ this.props.imgStyling } width={this.props.imgWidth } height="" /> )           
    } 

    render() {
        //const size = this.props.size;

        //let {name, size, radius} = this.props;
        //let char = name.trim()[0].toUpperCase();
        //let bgColor = "#f00";

        return (
            <div className="ajsr-avatar">{ this._renderImage() }</div>
        );
    }

}
