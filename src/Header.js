import React, { Component } from 'react';
export class Header extends Component {
  render() {
    return (
      <div className="App">
        { this.props.children }
      </div>
    );
  }
}
