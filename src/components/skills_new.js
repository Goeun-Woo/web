import React, { Component } from "react";
import reactLogo from "../img/react.png";
import htmlLogo from "../img/html.png";
import cssLogo from "../img/css.png";
import javaLogo from "../img/java.png";
import mongoLogo from "../img/mongodb.png";
import "./skills.css";

const LogoList = [
  { img: `${reactLogo}`, logo: "React", text: "ipsum rorem" },
  { img: `${htmlLogo}`, logo: "HTML", text: "ipsum rorem" },
  { img: `${cssLogo}`, logo: "CSS", text: "ipsum rorem" },
  { img: `${javaLogo}`, logo: "JAVA", text: "ipsum rorem" },
  { img: `${mongoLogo}`, logo: "MongoDB", text: "ipsum rorem" }
];

const NewSkills = () => {
  return (
    <div id="SKILLS" className="NavTarget">
      <h1>SKILLS</h1>
      <div className="detail">
        {LogoList.map((LOGO, i) => {
          return (
            <div key={i} value={LOGO.toString()}>
              <a className="img">
                <div className="text_overlay">
                  <p>
                    <br />
                    {LOGO.logo}
                    <br />
                  </p>
                  <p>{LOGO.text}</p>
                </div>
                <img src={LOGO.img} alt="react" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewSkills;
