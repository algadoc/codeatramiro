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
import CourseViewerComponent from './components/CourseViewerComponent.js'; //Course viewer component
import handleCoursesButton from './components/handleCoursesButton.js'; //Function that handles the transition between the main content-logo screen and the courses div
import FullheightIframe from './components/FullheightIframe.js' //Smart IFrame that adjust to content height
import Prism from "prismjs";



Prism.highlightAll();

function App() {
  return (
    <div id="appdiv">
    <div id="toolbardiv"> {/*Top toolvar, hosts return Code@Ramiro text #TODO# and courses button*/}
    <button id="coursesbutton" onClick={handleCoursesButton}>
      <p id="coursesbuttontext">Cursos</p>
      <p id="coursesbuttonarrow">&#8250;</p> {/*Arrow, animated to rotate when showing courses div*/}
    </button>
    <CodeAtRamiroText id="toolbartext" hashcolor="purple" codecolor="crimson" atcolor="#f1dd38 " ramirocolor="#73c990"  customfont="Hack"/>
    </div>
    <div id="main"> {/*Every div here is a separated part of the webite, can fade in and our at will*/}
      <div id="logodiv"> {/*Div that hosts the logo*/}
        <Image id="MainLogoImage" url={mainlogo} alt="Sui Generis Logo"/>
        <div id="logotextdiv">
          <CodeAtRamiroText id="MainLogoText" hashcolor="purple" codecolor="crimson" atcolor="#f1dd38 " ramirocolor="#73c990"  customfont="Hack"/>
          <Text id="SubLogoText" content="Grupo de programación Suí Géneris"/>
        </div>
      </div>
      <div id ="contentdiv" className="iframe-container">
        <FullheightIframe id ="contentiframe" className="iframe-child" src="/contents/LandingPage/index.html" title="Contenido inicial CodeAtRamiro" />
      </div>
      <div id="coursediv">{/*Div that hosts the links to courses*/}
      <CourseViewerComponent id="courseviewercomponent" currentlanguage="0" currentsection="Intro to Python" currentsubsection="Intro"/>
    </div>
      {/*Component that actually shows the contents*/}
      {/*The coder's nightmare*/}
    </div>
    </div>
  );
}
export default App;
