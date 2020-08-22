import React from 'react';
import mainlogo from './mainlogo.png';
import currentcourses from './currentcourses.json';
import CodeAtRamiroText from './components/CodeAtRamiroText.js';
import Image from './components/Image.js';
import Text from './components/Text.js';

function App() {
  return (
    <div>
    <div id="toolbardiv">
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
    </div>
    </div>
  );
}
export default App;
