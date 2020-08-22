import React from 'react';


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

export default Image;
