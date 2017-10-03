import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">BB</a>
        </nav>
        );
  }
}

export default Navbar;
