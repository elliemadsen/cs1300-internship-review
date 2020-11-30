import React, { Component } from "react";
// import logo from './imgs/logo.png';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
          <p>
              Explore internships completed by Brown students and alumni.
          </p>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <div className="App-header-links">
          <div className="Link-history">
            <a href="#history">History</a>
          </div>
          <div className="Link-learn">
            <a href="#learn">Learn</a>
          </div>
        </div> */}
      </header>
    );
  }
}

export default Header;