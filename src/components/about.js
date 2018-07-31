import React, { Component } from "react";
import "./about.css";
import "../img/about_stars.png";
import "../img/about_twinkling.png";

class About extends Component {
  render() {
    return (
      <div id="ABOUT" className="NavTarget">
        <div className="twinkling">
          <div className="colorfulTitle">
            <h1>WEB FRONT-END</h1>
          </div>
          <div className="Intro">
            <p>
              JAVA 웹개발자 경력이 있어, 웹서비스의 전반적인 흐름에 대한
              이해도가 높습니다.<br />
              JSP, DB 등 백엔드에 대한 이해가 있으며, 최근엔 Ionic, Angular,
              Vue.js, ES6 등 최신 프론트엔드 기술에 관심을 두고 있습니다.<br />{" "}
            </p>
            <p>
              프론트엔드 개발자는 HTML, CSS, JavaScript를 사용하여 웹, 앱의
              구조와 시각적인 부분의 개발을 담당합니다.<br />
              <br />
              크로스브라우징, 접근성, SEO 등 성능 최적화된 어플리케이션을
              제공합니다.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
