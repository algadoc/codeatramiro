import React from 'react';
import mainlogo from './mainlogo.png';
import CodeAtRamiroText from './components/CodeAtRamiroText.js';
import Image from './components/Image.js';
import Text from './components/Text.js';
import CourseDiv from './components/CourseDiv.js'
import animateElement from './components/animateElement.js'

var iscoursesactive = false;
var isanimationrunnint = false;
function handleCoursesButton(event){
  if(!isanimationrunnint){
    iscoursesactive = !iscoursesactive;
    isanimationrunnint = true;
    if (iscoursesactive){
      animateElement("logodiv","fadeoutdown","grid","none",1000);
      animateElement("contentdiv","fadeoutdown","flex","none",1000);
      animateElement("coursesbuttonarrow","rotatedown","block","block",2000)
      document.getElementById("coursesbuttonarrow").style.transform = "rotate(90deg)"
      setTimeout(() =>{
        animateElement("coursediv","fadeinup","flex","flex",2000);
        setTimeout(() => {isanimationrunnint = false;},2300);
      },1010);
    }
    else{
      animateElement("coursediv","fadeoutdown","flex","none",1000);
      animateElement("coursesbuttonarrow","rotateup","block","block",2000)
      document.getElementById("coursesbuttonarrow").style.transform = "rotate(0deg)"
      setTimeout(() => {
        animateElement("logodiv","fadeinup","grid","grid",2000);
        animateElement("contentdiv","fadeinup","flex","flex",2000)
        setTimeout(() => {isanimationrunnint = false;},2300);
      },1010);
    }

  }
}

function App() {
  return (
    <div>
    <div id="toolbardiv">
    <button id="coursesbutton" onClick={handleCoursesButton}>
      <p id="coursesbuttontext">Cursos</p>
      <p id="coursesbuttonarrow">&#8250;</p>
    </button>
    <CodeAtRamiroText id="toolbartext" hashcolor="purple" codecolor="crimson" atcolor="#f1dd38 " ramirocolor="#73c990"  customfont="Hack"/>
    </div>
    <div id="main">
      <div id="logodiv">
        <Image id="MainLogoImage" url={mainlogo} alt="Sui Generis Logo"/>
        <div id="logotextdiv">
          <CodeAtRamiroText id="MainLogoText" hashcolor="purple" codecolor="crimson" atcolor="#f1dd38 " ramirocolor="#73c990"  customfont="Hack"/>
          <Text id="SubLogoText" content="Grupo de programación Suí Géneris"/>
        </div>
      </div>
      <div id="contentdiv">
      This is content!!!!
      </div>
      <div id="coursediv">
      This is The courses!!!!!
      </div>
    </div>
    </div>
  );
}
export default App;
