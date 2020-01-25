import React from 'react';
import './App.css';
// import Button from './Button';
// import Content from './Content';
import Clock from './Clock';
import App1 from './App1';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Clock />
				{/*
				<Button text="Profile" id="profile-button"/>
				<Button text="Map" id="map-button"/>
				<Button text="Login" id="login-button"/>
				<Button text="Signup" id="signup-button"/>
				<Content text="некий произвольный пока текст" id="content"/>
			*/}
				<App1 />
			</header>
		</div>
	);
}

export default App;
