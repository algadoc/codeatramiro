import React from 'react';
import mainlogo from './mainlogo.png';
import currentcourses from './currentcourses.json';
import CodeAtRamiroText from './components/CodeAtRamiroTest.js'
console.log("This is a different file!");
class PageLogo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      url:props.url,
      alt:props.alt
    };
  }
  render(){
    return(
      <div id="mainpagelogodiv">
        <img id="mainpagelogoimg" src={this.state.url} alt={this.state.alt} />
        <h1 id="mainpagelogotext"><span id="hashinLogo">#</span><span id="CodeinLogo">code</span><span id="arrobainLogo">@</span><span id="RamiroinLogo">Ramiro</span></h1>
      </div>
    );
  }
}

class Image extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: props.id,
      url:props.url,
      alt:props.alt
    };
  }
  render(){
    return(
      <img id={this.state.id} src={this.state.url} alt={this.state.alt}/>
    );
  }
}


function App() {
  return (
    <div>
      <CodeAtRamiroText hashcolor="black" codecolor="red" atcolor="blue" ramirocolor="#AA0000"  />
      <PageLogo url={mainlogo} alt="A picture of a fox" />
    </div>
  );
}
export default App;
