import React, { Component } from 'react';
import { render } from 'react-dom';
import FeeComponent from './FeeComponent';
import Fine from './Fine';
import Payment from './payment';

import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <>
      <div>
        <FeeComponent />
        <br />
       
      </div>
      <div> 
       
      </div>
      <Payment/>
      </>
    );
  }
}

render(<App />, document.getElementById('root'));
