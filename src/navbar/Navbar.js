import React, {Component} from 'react';
import './Navbar.css';
import TwitchStatus from './TwitchStatus';

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">BB</a>

          <div className="ml-auto">
            <TwitchStatus />
          </div>
        </nav>
        );
  }
}

export default Navbar;
