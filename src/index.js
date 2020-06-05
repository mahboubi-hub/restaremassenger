import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Login from './companents/onboard/login.js';
// import Login from './companents/onboard/login.js';
// import Signup from './companents/onboard/signup.js';
// import Messenger from './companents/massenger/messenger.js';
import * as serviceWorker from './serviceWorker';
// import Login from './companents/onboard/login.';

// function Header(props){
//   console.log("propsss:", props )
//   return(
    
//       <div>
//         <h1> my name is {props.name}</h1>
//         <p> this is a p function</p>
//       </div> 
//    )
// }
// class Footer extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1 className='red'> reeed this is a h1 class</h1>
//         <p> this is a p class</p>
//       </div>
//     )
//   }
// }
// function Parentc(){
//   return(
//       <div>
//         <Header name="reza" />
//         <Footer />

      
//       </div> 
//    )
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(<App title='login' /> ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
