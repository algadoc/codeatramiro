import React from 'react';

class CodeAtRamiroText extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: props.id,
      hashcolor: props.hashcolor,
      codecolor: props.codecolor,
      atcolor: props.atcolor,
      ramirocolor: props.ramirocolor,
      customfont: props.customfont
    }
  }
  render(){
    return(
      <h1 style={{fontFamily: this.state.customfont}}>
      <span style={{color: this.state.hashcolor}}>
      #
      </span>
      <span style={{color: this.state.codecolor}}>
      Code
      </span>
      <span style={{color: this.state.atcolor}}>
      @
      </span>
      <span style={{color: this.state.ramirocolor}}>
      Ramiro
      </span>
      </h1>
    );
  }
}
  export default CodeAtRamiroText
