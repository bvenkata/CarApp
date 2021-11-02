import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Start from './components/Start';
import Header from './components/Header';
// import 'semantic-ui-css/semantic.min.css'
import Footer from './components/Footer';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

ReactDOM.render(
  <React.Fragment>
    <Router>
      <Header />
      <Start />
      <Footer />
    </Router>
  </React.Fragment>,
  document.getElementById('root')
);
