import React from 'react';

function Content(props) {
	return (
    <div className="App-content" id={props.id}>{props.text}</div>
  );
}

export default Content;
