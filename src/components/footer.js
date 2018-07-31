import React, { Component } from "react";
import GitLogo from "../img/Github.png";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <div id="FOOTER">
        <div className="Copyrights">
          COPYRIGHT © 2018 WOO GO EUN ALL RIGHTS RESERVED.
        </div>
        <div className="ImageLinks">
          <a href="https://github.com/Goeun-Woo/myfirstweb">
            <img src={GitLogo} alt="github" width="50" height="50" />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
