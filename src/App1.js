import React from 'react';
import './App.css';
import Button from './Button';
import Profile from './Profile';
import Map from './Map';
import Login from './Login';
import Signout from './Signout';

class App1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: <Profile />,
        };
    }
    render() {
        return (
            <div>
                <Button text="Profile" id="profile-button1" myClick={() => {this.setState({page: <Profile />})}}/>
                <Button text="Map" id="map-button1" myClick={() => {this.setState({page: <Map />})}}/>
                <Button text="Login" id="login-button1" myClick={() => {this.setState({page: <Login />})}}/>
                <Button text="Signup" id="signup-button1" myClick={() => {this.setState({page: <Signout />})}}/>
                {this.state.page}
            </div>
        );
    }
}

export default App1;
