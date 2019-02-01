import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FlexStuff from './FlexStuff'
import { MasterLayout } from './MasterLayout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MasterLayout>
          <FlexStuff />
        </MasterLayout>
      </div>
    );
  }
}

export default App;