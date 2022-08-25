import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand">
              <img
                src={"E-dokologo.svg"}
                width={100}
                height={100}
                alt="Large Pizza"
              />
            </a>
          </div>
        </nav>
      </div>
    );
  }
}
