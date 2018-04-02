import React from 'react';

//this creates a scrollable area
//aka you can scroll and it doesn't move the entire page down
const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', border: '5px solid black', height: '500px'}}>
			{props.children}
		</div>
	);
};

export default Scroll;