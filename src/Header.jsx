import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
          <h4>
              Explore internships completed by Brown students and alumni.
          </h4>
          <div>
            <a href="#favorites">&#9733; Favorites</a>
          </div>
      </header>
    );
  }
}

export default Header;