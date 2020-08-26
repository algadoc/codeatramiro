import React from 'react';
import coursesobject from './currentcourses';
import findInDicArray from './findInDicArray.js'
class CourseViewerComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentlanguage: props.currentlanguage,
      currentsection:props.currentsection,
      currentsubsection:props.currentsubsection,
    }
    console.log(this.state.currentdocurl);
    this.handleListItemClick = this.handleListItemClick.bind(this);
    this.setClassofList = this.setClassofList.bind(this);
    this.setClassofSection = this.setClassofSection.bind(this);

  }
  handleListItemClick(event) {
    event.persist();
    console.log(event.target);
    this.setState((state) =>{

      return {currentsubsection:event.target.id,
      currentsection:event.target.parentElement.parentElement.id
      }
    });
  }

  setClassofList(subsection){
    if (subsection.name === this.state.currentsubsection){
      return ("currentsubsection");
    }
    else{
      return ("noncurrentsubsection");
    }
  }
  setClassofSection(section){
    if (section.name === this.state.currentsection){
      return ("currentsection");
    }
    else{
      return ("noncurrentsection");
    }
  }

  render(){
    const languageitems = coursesobject[this.state.currentlanguage].sections.map((section) =>
    <div id={section.name} key={section.name}>
    <h3 className={this.setClassofSection(section)}>{section.name}</h3>
    <ul>
    {section.subsections.map((subsection) =>
      <li onClick={this.handleListItemClick} className={this.setClassofList(subsection)} id={subsection.name} key={subsection.name}>{subsection.name}</li>
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
      <div id="listnestdiv">
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
