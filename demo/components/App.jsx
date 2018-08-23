/*
    ./client/components/App.jsx
*/
import React from 'react';


export default class App extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>

        
      </div>);
  }
}


/*

import moment from 'moment';

export default class App extends React.Component {
	render() {
	    return (
	        <div>
	            { 
	            this.props.data.map((post,key) => 
	                <div key={key} className="post-detail">
	                    <h1>{post.title}</h1>
	                    <p>{moment(post.date).format()}</p>
	                    <p dangerouslySetInnerHTML={{__html: post.content}}></p>
	                    <hr />
	                </div>
	            )}
	        </div>
	    );
	}
}
*/