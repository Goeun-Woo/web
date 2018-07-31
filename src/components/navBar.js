import React, { Component } from "react";
import "./navBar.css";

class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <a href="#HOME" className="active">
            HOME
          </a>
          <a href="#ABOUT">ABOUT</a>
          <a href="#SKILLS">SKILLS</a>
          <a href="#CONTACT">CONTACT</a>
          <a href="#BLOG">BLOG</a>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
