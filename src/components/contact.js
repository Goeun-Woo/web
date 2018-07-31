import React, { Component } from "react";
import "./contact.css";
import Form from "./form";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state.name);
  };

  render() {
    console.log(this.state);
    const { name, email, message } = this.state;
    const { handleChange } = this;
    return (
      <div id="CONTACT" className="NavTarget">
        <h1>CONTACT</h1>
        <div className="memo">
          <p>Get in Touch with Me !</p>
          <p>feel free to drop me a line.</p>
          <form
            id="gform"
            method="POST"
            action=" https://script.google.com/macros/s/AKfycby1s1EtxdLdu8f8n2aSLcviU4MzI3YQE4OUyAqfC57_jzByN6aB/exec"
          >
            <input
              className="name"
              name="name"
              onChange={handleChange}
              placeholder="Name"
            />
            <br />
            <input
              className="email"
              name="email"
              onChange={handleChange}
              placeholder="E-mail * "
            />
            <br />
            <textarea
              id="message"
              name="comment"
              onChange={handleChange}
              placeholder="Message * "
            />
            <br />
            <button className="create-button">SEND A MESSAGE</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
