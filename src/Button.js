import React from 'react';

//---функциональный компонент в декларативном стиле
// function Button(props) {
//   return (
//     <button className="App-button" id={props.id}>{props.text}</button>
//   );
// }

//---функциональный компонент в сокращенном стрелочном стиле
const Button = props => <button className="App-button" id={props.id}>{props.text}</button>

//---функциональный компонент в стрелочном стиле
// const Button = props => {
//     return (
//         <button className="App-button" id={props.id}>{props.text}</button>
//     );
// }

//---классовый компонент    !!! не работает... позже разберусь
// class Button extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {myData: 'myDataValue'}
//     }
//     render(props) {
//         return (
//             <button className="App-button" id={props.id}>{props.text}</button>
//         )
//     }
// }

export default Button;
