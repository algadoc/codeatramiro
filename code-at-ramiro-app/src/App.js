import React from 'react';
import mainlogo from './mainlogo.png';
import currentcourses from './currentcourses.json';
import CodeAtRamiroText from './components/CodeAtRamiroText.js'
import Image from './components/Image.js'


function App() {
  return (
    <div>
      <CodeAtRamiroText hashcolor="black" codecolor="red" atcolor="blue" ramirocolor="#AA0000"  customfont="Hack"/>
    </div>
  );
}
export default App;
