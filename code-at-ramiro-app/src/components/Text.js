import React from 'react';

class Text extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: props.id,
      className: props.className,
      content: props.content
    }
  }
  render(){
    return(
      <p id={this.state.id} className={this.state.className}>{this.state.content}
      </p>
    );
  }
}
  export default Text;
