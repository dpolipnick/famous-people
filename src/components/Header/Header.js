import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Famous People App
          </h1>
          <p>By famous person: Dicky P</p>
        </header>
    );
  }
}

export default Header;