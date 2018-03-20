import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app'; 
import './index.css';


const reactContainer = document.querySelector('#root');

ReactDom.render(
    <App />,
    reactContainer
)
