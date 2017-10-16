/*
    ./client/components/App.jsx
*/

import React from 'react';

//import moment from 'moment';

/*

export default class Time extends React.Component {
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

export default class Hello extends React.Component {
	render() {
	    return (
	        <div>Hello!</div>
	    );
	}
}
