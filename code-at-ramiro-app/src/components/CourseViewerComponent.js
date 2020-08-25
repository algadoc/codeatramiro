import React from 'react';
import coursesobject from './currentcourses';


class CourseViewerComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentlanguage: props.currentlanguage,
      currentsection:props.currentsection,
      currentsubsection:props.currentsubsection
    }
    this.handleClick = this.handleClick.bind(this);
  }
    handleClick(event) {
      console.log("Im alive!");
      console.log(event.target);
    }
  render(){
    const languageitems = coursesobject[this.state.currentlanguage].sections.map((section) =>
    <div id={section.name} key={section.name}>
    <h3>{section.name}</h3>
    <ul>
    {section.subsections.map((subsection) =>
      <li id={subsection.name} key={subsection.name}>{subsection.name}</li>
    )}
    </ul>
    </div>
    );
    return(
      <div id="courseviewermaindiv">
      <div id="courseguidediv">
        <h2 id="languagetitle">
          {coursesobject[this.state.currentlanguage].language}
        </h2>
      <div id="listnestdiv" onClick={this.handleClick}>
        {languageitems}
      </div>
      </div>
      <div id="coursedisplaydiv">
      Here is where content will be displayed
      </div>
      </div>
    );
  }
}
  export default CourseViewerComponent;
