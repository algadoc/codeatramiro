import React from 'react';

class Toolbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: props.id,
      className: props.className,
    };
  }
  render(){

    return(
    <div id={this.state.id} className={this.state.className}>
    </div>  
    );
  }
}

export default Image;
