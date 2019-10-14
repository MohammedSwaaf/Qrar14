import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Recording from './Component/Recording';
import Qrars from './Component/Qrars';
import Recorded from './Component/Recorded'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <h1>hi</h1> */}
          {/* <CustomNav /> */ }
          <Route exact path='/' component={ Recording } />
          <Route  path='/qrars' component={ Qrars } />
          <Route path='/recorded' component={ Recorded } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
