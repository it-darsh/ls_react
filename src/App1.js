import React from 'react';
import './App.css';
import Button from './Button';
import Content from './Content';

class App1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Начальное состояние(setState)',
        };
    }
    componentDidMount() {
        document.querySelector('#profile-button1').addEventListener('click', () => {
            this.setState({text: 'Нажата первая кнопка(setState)'});
        });
        document.querySelector('#map-button1').addEventListener('click', () => {
            this.setState({text: 'Нажата вторая кнопка(setState)'});
        });
        document.querySelector('#login-button1').addEventListener('click', () => {
            this.setState({text: 'Нажата третья кнопка(setState)'});
        });
        document.querySelector('#signup-button1').addEventListener('click', () => {
            this.setState({text: 'Нажата четвертая кнопка(setState)'});
        });
    }

    render() {
        return (
            <div>
                <Button text="Profile" id="profile-button1"/>
                <Button text="Map" id="map-button1"/>
                <Button text="Login" id="login-button1"/>
                <Button text="Signup" id="signup-button1"/>
                <Content id="content1" text={this.state.text}/>
            </div>
        );
    }
}

export default App1;
