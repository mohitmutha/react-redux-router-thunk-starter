import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import demoapp from './reducers'
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './containers/Home';

let store = createStore(demoapp, applyMiddleware(thunk));
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route path="/" component={Home} />
        </Router>
      </Provider>
    );
  }
}

export default App;
