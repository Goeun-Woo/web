import React, { Component } from "react";
import "./home.css";
import bg from "../bg.jpg";

class Home extends Component {
  render() {
    return (
      <div>
        <div id="HOME" className="NavTarget">
          <div className="bg">
            <p>
              HELLO-<br />
              THIS IS GONNI-<br />
              <br />
              THE DREAM CATCHER.
            </p>
            <p>
              WOO GO EUN<br />
              <br />
              FRONT-END DEVELOPER.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
