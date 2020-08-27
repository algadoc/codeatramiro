import React from 'react';
import coursesobject from '../contents.currentcourses.json';
import findInDicArray from './findInDicArray.js'
class CourseViewerComponent extends React.Component {
  constructor(props){
    super(props);
    let newcurrentsubsection = props.currentsubsection; //Clicked subsection has id that corresponds to the name in the JSON
    let newcurrentsection = props.currentsection;
    let sectionindex = findInDicArray(newcurrentsection,"name",coursesobject[props.currentlanguage].sections); //Find the index of the section where the subsection resides
    let subsectionindex = findInDicArray(newcurrentsubsection,"name",coursesobject[props.currentlanguage].sections[sectionindex].subsections); //Find the index of the subsection inside it's section to retrieve the subsections URL
    let newurl = coursesobject[props.currentlanguage].sections[sectionindex].subsections[subsectionindex].fileurl;
    this.state = {
      currentlanguage: props.currentlanguage,
      currentsection:props.currentsection,
      currentsubsection:props.currentsubsection,
      currentdocurl:newurl
    }
    this.handleListItemClick = this.handleListItemClick.bind(this);
    this.setClassofList = this.setClassofList.bind(this);
    this.setClassofSection = this.setClassofSection.bind(this);

  }
  handleListItemClick(event) {
    event.persist();
    this.setState((state) =>{
      let newcurrentsubsection = event.target.id; //Clicked subsection has id that corresponds to the name in the JSON
      let newcurrentsection = event.target.parentElement.parentElement.id; //Clicked subsections granparent is the div that holds the ul, who's id corresponds to the section's name
      let sectionindex = findInDicArray(newcurrentsection,"name",coursesobject[state.currentlanguage].sections); //Find the index of the section where the subsection resides
      let subsectionindex = findInDicArray(newcurrentsubsection,"name",coursesobject[state.currentlanguage].sections[sectionindex].subsections); //Find the index of the subsection inside it's section to retrieve the subsections URL
      let newurl = coursesobject[state.currentlanguage].sections[sectionindex].subsections[subsectionindex].fileurl;
      return {
        currentsubsection:event.target.id,
        currentsection:event.target.parentElement.parentElement.id,
        currentdocurl:newurl
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
      {this.state.currentdocurl}
      </div>
      </div>
    );
  }
}
  export default CourseViewerComponent;
