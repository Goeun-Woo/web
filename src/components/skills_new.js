import React from "react";
import "./skills.css";

const edu_list = [
  {
    title: "국민대학교 경영정보학부 정보시스템 전공",
    detail: "2012.03 ~ 2018.02 (졸업) "
  },
  { title: "의정부 여자 고등학교", detail: "2009.03 ~ 2012.02 (졸업) " }
];

const skill_list = [
  {
    title: "React.js",
    detail: "자바스크립트 라이브러리를 직접 사용해보며 이해도를 높였습니다."
  },
  {
    title: "HTML5",
    detail: "시맨틱한 웹 구성, 웹표준, 웹 접근성에 대한 이해"
  },
  {
    title: "CSS3",
    detail: "CSS를 사용한 마크업 스타일링을 진행하였습니다."
  },
  {
    title: "jQuery",
    detail: "제이쿼리를 사용하여 보다 쉽게 웹에 동적인 효과를 구현하였습니다."
  }
];

const NewSkills = () => {
  return (
    <section id="SKILLS" className="NavTarget">
      <h1>SKILLS</h1>
      <h2 />
      <div className="education">
        <h2>Education</h2>
        <br />
        {edu_list.map((list, i) => {
          return (
            <div key={i} value={list.toString()}>
              <p>{list.title}</p>
              <p>{list.detail}</p>
              <br />
            </div>
          );
        })}
      </div>

      <div className="skill">
        <h2>This page is made of ...</h2>
        <br />
        {skill_list.map((skill, j) => {
          return (
            <div key={j} value={skill.toString()}>
              <p>{skill.title}</p>
              <p>{skill.detail}</p>
              <br />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default NewSkills;
