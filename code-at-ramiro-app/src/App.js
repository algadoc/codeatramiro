/*
Code written by Alfonso Lagares de Toledo, MIT Licensed
Main code file for the Code@Ramiro website
So you are the new maintenance guy....
May God have mercy on your soul
*/

import React from 'react'; //Import react
import mainlogo from './mainlogo.png'; //Main Page logo file
import CodeAtRamiroText from './components/CodeAtRamiroText.js'; //Code at Ramiro component: fancy colored text
import Image from './components/Image.js'; //Basic Image Component
import Text from './components/Text.js'; //Basic Text Component
import CourseViewerComponent from './components/CourseViewerComponent.js' //Course viewer component
import animateElement from './components/animateElement.js' //Animate Element function, vanilla JS
import handleCoursesButton from './components/handleCoursesButton.js'


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
      <CourseViewerComponent id="courseviewercomponent" currentlanguage="0" currentsection="Intro to Python" currentsubsection="Intro"/>
    </div>
    </div>
  );
}
export default App;
