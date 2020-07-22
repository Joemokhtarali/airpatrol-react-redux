import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import Game from './Containers/Game'
import GameOver from './Components/GameOver'

const store = createStore(reducer, applyMiddleware(thunk))


ReactDOM.render(
    <Provider store={store}>
        <Router>
        
                <Route exact path="/"><App /> </Route>
                <Route exact path="/game"><Game /> </Route>
                <Route exact path="/GameOver"><GameOver /> </Route>           
        </Router>
    </Provider>

    , document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
