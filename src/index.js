import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   

    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/*function downlodeBtn(){
  alert("CV Downloded")
}

submit.addEventListener("click", function(){
  let email = document.getElementById("email");
  let name = document.getElementById("name");
  let msg = document.getElementById("msg");

  if(email.value == "" || name.value == "" || msg.value == "" ){
      alert("Please Fill Details")
  }else{
      alert("Succesfully Connected")
  }

})*/
