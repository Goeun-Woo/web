import React,{Component} from 'react';
import './skills.css';
import reactLogo from '../img/react.png';
import htmlLogo from '../img/html.png';
import cssLogo from '../img/css.png';
import javaLogo from '../img/java.png';
import mongoLogo from '../img/mongodb.png';

class Skills extends Component{
  render() {
    return(
    <div id="SKILLS" className="Skills">

      <h1>SKILLS</h1>
      <div class="detail">

        <a class="img">
          <div class="text_overlay">
          <p><br/>Title<br/></p>
          <p>Lorem ipsum</p>
          </div>
          <img src={reactLogo} alt="react" width="200" height="200" />
        </a>

        <a class="img">
          <div class="text_overlay">
          <p><br/>Title<br/></p>
          <p>Lorem ipsum</p>
          </div>
          <img src={htmlLogo} alt="html" width="200" height="200" />
        </a>

        <a class="img">
          <div class="text_overlay">
          <p><br/>Title<br/></p>
          <p>Lorem ipsum</p>
          </div>
          <img src={cssLogo} alt="css" width="200" height="200" />
        </a>

        <a class="img">
          <div class="text_overlay">
          <p><br/>Title<br/></p>
          <p>Lorem ipsum</p>
          </div>
          <img src={javaLogo} alt="java" width="200" height="200" />
        </a>

        <a class="img">
         <div class="text_overlay">
          <p><br/>Title<br/></p>
          <p>Lorem ipsum</p>
          </div>
          <img src={mongoLogo} alt="mongo" width="200" height="200" />
        </a>        
      
      </div>
    </div>
    );
  }

}

export default Skills;