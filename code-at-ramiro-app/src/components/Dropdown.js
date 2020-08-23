import React from 'react';

class Dropdown extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: props.id,
      className: props.className,
      dropdownJSON: props.dropdownJSON
    };

  }
  render(){
    return(
    <div id={this.state.id} className={this.state.className}>
    </div>
    );
  }
}

export default Dropdown;
