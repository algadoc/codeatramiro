import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import animateElement from './components/animateElement.js'

ReactDOM.render( 
  <React.StrictMode >
    <App / >
    </React.StrictMode>,
    document.getElementById('root')
);
animateElement("logodiv", "fadeinup", "grid", "grid", 2000);
animateElement("contentdiv", "fadeinup", "flex", "flex", 2000);
document.getElementById("contentiframe").style.display = "none";

function handleResize() {
    document.getElementById("contentiframe").height = document.getElementById("contentiframe").contentWindow.document.body.scrollHeight;
}

function contentIframeLoad(){
  document.getElementById("contentiframe").style.display = "flex";
  handleResize();
}

document.getElementById("contentiframe").onload = contentIframeLoad;

window.addEventListener('resize', handleResize);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();