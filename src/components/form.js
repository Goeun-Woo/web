import React, { Component } from "react";

const Form = ({ name, email, message, onChange }) => {
  return (
    <div className="form">
      <input name="name" onChange={onChange} />
      <input name="email" onChange={onChange} />
      <input name="message" onChange={onChange} />

      <div className="create-button">추가</div>
    </div>
  );
};

export default Form;
