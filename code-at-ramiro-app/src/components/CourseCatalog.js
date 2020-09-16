import axios from 'axios';
import React from 'react';
import findInDicArray from './findInDicArray.js';


class CourseCatalog extends React.Component {

  constructor(props) {
    clickedsubsection = "Intro";
    clickedsection = "Intro to Python";
    clickedlanguage = "Python";
    super(props);
    this.state = {
      currentlanguage: "none",
      currentsection: "none",
      currentsubsection: "none",
      coursesobject: "none",
    }
    this.handleListItemClick = this.handleListItemClick.bind(this);
  }
    
  componentDidMount() {
    axios.get('/contents/currentcourses.json').then(res => {
      this.setState({
        coursesobject: res.data
      });
    });
  }



  handleListItemClick(event) {
    event.persist();
    this.setState((state) => {
      clickedsubsection = event.target.id;
      clickedsection = event.target.parentElement.parentElement.id;
      clickedlanguage = event.target.parentElement.parentElement.parentElement.parentElement.id;
      console.log(clickedsubsection);
      return {
        currentsubsection: clickedsubsection,
        currentsection: clickedsection,
        currentlanguage: clickedlanguage
      }
    });
  }

  render() {
    if (this.state.coursesobject === "none"){
      return ( <div> </div>);
    }
    else {
      const coursesdiv = this.state.coursesobject.map((languageobject) =>
        <div id = {languageobject.language} key = {languageobject.language}className="coursesdivlanguagediv">
          <h2>{languageobject.language}</h2>
          <div>
          {languageobject.sections.map((section) =>
            <div id = {section.name} key = {section.name}>
              <h3> {section.name} </h3>
              <ul> {section.subsections.map((subsection) =>
                <li onClick = {this.handleListItemClick} id = {subsection.name} key = {subsection.name} >
                  {subsection.name}
                </li>
              )}
              </ul>
              </div>
            )}
          </div>
        </div>
      );
      return (<div id="coursescomponentdiv">{coursesdiv}</div>);
    }
  }
}

export default CourseCatalog;
