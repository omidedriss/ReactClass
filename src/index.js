import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';
import APITest from './API/FirstAPI';


const root = ReactDOM.createRoot(document.getElementById('root'));

// function Hello(props){
//   return <div>Hello {props.name}</div>
// }
// const Hello2= ({name}) => <div>Hello {name}</div>
// const click=(name)=>{
// alert("hi");
// }
// var omid;
// class Hello extends Component{
//   render(){
//      return <div>Hello {this.props.name}</div>
//   }
// }
// var bahar;
// var milad;
// var zahra;
// var morvarid;

root.render(
 <React.StrictMode>

   <APITest/>
      
    
   

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
