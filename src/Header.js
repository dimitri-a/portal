import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FlexStuff from './FlexStuff'

export class Header extends Component {
  render() {
    return (
      <div className="App">
        { this.props.children }
      </div>
    );
  }
}
