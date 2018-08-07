import React, { Component } from "react";
import "./about.css";
import "../img/about_stars.png";
import "../img/about_twinkling.png";

class About extends Component {
  render() {
    return (
      <section id="ABOUT" className="NavTarget">
        <div className="twinkling">
          <div className="colorfulTitle">
            <h1>WEB FRONT-END</h1>
          </div>
          <div className="intro">
            자바스크립트 프론트엔드 개발자를 꿈꾸는 우고은입니다.<br />국민대학교
            경영정보학부를 졸업하였고, 학부생 시절 다양한 프로젝트 경험과 함께
            프로그래머로서의 기본 소양을 다졌습니다.<br />JSP,HTML,CSS를
            사용하여 학부 홈페이지를 구현하는 데에 즐거움을 느껴 웹프로그래밍을
            본격적으로 공부해 나가는 중입니다.<br />
          </div>
        </div>
      </section>
    );
  }
}

export default About;
