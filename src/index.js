import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Details from './components/Details';


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

