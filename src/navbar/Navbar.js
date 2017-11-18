import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import TwitchStatus from './TwitchStatus';

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">BB</Link>

          <div className="ml-auto">
            <TwitchStatus />
          </div>
        </nav>
        );
  }
}

export default Navbar;
