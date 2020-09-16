import axios from 'axios';
import React from 'react';
import findInDicArray from './findInDicArray.js';
import Prism from "prismjs";
import animateElement from './animateElement.js'
import './prism.css'

class CourseViewerComponent extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        currentlanguage: props.currentlanguage,
        currentsection: props.currentsection,
        currentsubsection: props.currentsubsection,
        iscoursesdivdisplay: true,
        coursesobject: "none",
      }
      this.handleListItemClick = this.handleListItemClick.bind(this);
      this.setClassofList = this.setClassofList.bind(this);
      this.setClassofSection = this.setClassofSection.bind(this);
      this.getDocURL = this.getDocURL.bind(this);
      this.handleCourseDisplay = this.handleCourseDisplay.bind(this);
      this.handleCourseSelectorItemClick = this.handleCourseSelectorItemClick.bind(this);
      this.handleBackDivButton = this.handleBackDivButton.bind(this);

    }
    componentDidMount() {
      Prism.highlightAll();
      axios.get('/contents/currentcourses.json')
        .then(res => {
          this.setState({
            coursesobject: res.data
          });
          let newurl = this.getDocURL(res.data, this.state.currentlanguage, this.state.currentsection, this.state.currentsubsection);
          this.setState({
            currentdocurl: newurl
          })
          axios.get(newurl)
            .then(res => {
              this.setState({
                currentdochtml: res.data
              })
            });
        });
    }

    getDocURL(coursesdata, language, section, subsection) {
      let sectionindex = findInDicArray(section, "name", coursesdata[language].sections); //Find the index of the section where the subsection resides
      let subsectionindex = findInDicArray(subsection, "name", coursesdata[language].sections[sectionindex].subsections); //Find the index of the subsection inside it's section to retrieve the subsections URL
      return ('/contents/' + coursesdata[language].sections[sectionindex].subsections[subsectionindex].fileurl);
    }


    handleListItemClick(event) {
      event.persist();
      this.setState((state) => {
        return {
          currentsubsection: event.target.id,
          currentsection: event.target.parentElement.parentElement.id
        }
      });
    }

    handleCourseSelectorItemClick(event) {
      event.persist();
      let clickedlanguage = event.target.parentElement.parentElement.parentElement.parentElement.id;
      this.setState((state) => {
        return {
          currentlanguage: findInDicArray(clickedlanguage,"language",this.state.coursesobject),
          currentsubsection: event.target.id,
          currentsection: event.target.parentElement.parentElement.id,
          iscoursesdivdisplay: false
        }
      });
      animateElement("coursenavigatordiv","fadeoutup","flex","none",990);
      animateElement("courseviewerandbuttondiv","fadeinup","flex","flex",990);

    }

    handleBackDivButton(event){
        this.setState((state) => {
          if (state.iscoursesdivdisplay === true){

          }
          else{
            animateElement("courseviewerandbuttondiv","fadeoutdown","flex","none",990);
            animateElement("coursenavigatordiv","fadeindown","flex","flex",990);
            return {
              iscoursesdivdisplay: true
            }
          }
        }
        
    );
  }
    handleCourseDisplay(bool) {
      if(bool){
        return "grid";
      }
      else{
        return "none";
      }
    }


    setClassofList(subsection) {
      if (subsection.name === this.state.currentsubsection) {
        return ("currentsubsection");
      } else {
        return ("noncurrentsubsection");
      }
    }
    setClassofSection(section) {
      if (section.name === this.state.currentsection) {
        return ("currentsection");
      } else {
        return ("noncurrentsection");
      }
    }

    render() {
      if (this.state.coursesobject === "none" | this.state.currentdochtml === "none") {
        return ( <div> </div>);
        }
        else {
          //Get new url for the iframe
          let newurl = this.getDocURL(this.state.coursesobject, this.state.currentlanguage, this.state.currentsection, this.state.currentsubsection);
          //Course List div
          const coursesdiv = this.state.coursesobject.map((languageobject) =>
          <div id = {languageobject.language} key = {languageobject.language} className="coursesdivlanguagediv">
            <div className="coursenavigatortitleandlogo">
              <h2>{languageobject.language}</h2>
              <img src={"contents/"+languageobject.languageico} alt={"ico of" + languageobject.language}></img>
            </div>
            <div>
            {languageobject.sections.map((section) =>
              <div id = {section.name} key = {section.name}>
                <h3> {section.name} </h3>
                <ul> {section.subsections.map((subsection) =>
                  <li onClick = {this.handleCourseSelectorItemClick} id = {subsection.name} key = {subsection.name} >
                    {subsection.name}
                  </li>
                )}
                </ul>
                </div>
              )}
            </div>
          </div>
        );
          //Language List of course viewer
          const languageitems = this.state.coursesobject[this.state.currentlanguage].sections.map((section) =>
            <div id = {section.name} key = {section.name} >
            <h3 className = {this.setClassofSection(section)}>
            {section.name}
            </h3>
            <ul>
              {section.subsections.map((subsection) =>
                <li onClick = {this.handleListItemClick} className = {this.setClassofList(subsection)} id = {subsection.name} key = {subsection.name} > {subsection.name}
                </li>
              )}
              </ul>
            </div>
          );

          return(
            <div id = "courseabsolutediv">
              <div id="coursescomponentdiv">
                <div id= "coursenavigatordiv">
                  {coursesdiv}
                </div>
              </div>
              <div id="courseviewerandbuttondiv" style={{display: "none"}}>
                <button id="returntocoursesbutton" onClick= {this.handleBackDivButton}>
                    <p id="returntocoursesbuttontext"> Volver a los cursos</p>
                </button>
                <div id = "courseviewermaindiv" >
                  <div id = "courseguidediv" >
                    <div id= "courseviewerguidetitleandimage">
                      <h2 id = "languagetitle" >
                        {this.state.coursesobject[this.state.currentlanguage].language}
                      </h2>
                      <img src={"contents/"+this.state.coursesobject[this.state.currentlanguage].languageico} alt={"ico of" + this.state.coursesobject[this.state.currentlanguage].language}></img>
                    </div>
                    <div id = "listnestdiv" >
                      {languageitems}
                    </div>
                  </div>
                  <div id = "coursedisplaydiv" >
                    <iframe id = "coursesiframe" src = {newurl} title = {this.state.currentsubsection} allow={"fullscreen"}/>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      }
      componentDidUpdate() {
        Prism.highlightAll();
      }
    }
    export default CourseViewerComponent;
