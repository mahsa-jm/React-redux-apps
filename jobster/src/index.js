import React from "react";
import ReactDOM  from "react-dom";
import 'normalize.css';
import './index.css';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';



ReactDOM.render( 
    <Provider store={store}>
        <App tab='home' />
    </Provider>
       ,
        document.querySelector('#root'));