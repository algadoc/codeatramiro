import axios from 'axios';
import React from 'react';
import findInDicArray from './findInDicArray.js';

class CourseViewerComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      currentlanguage: props.currentlanguage,
      currentsection:props.currentsection,
      currentsubsection:props.currentsubsection,
      coursesobject:"none",
      currentdocurl:"none",
      currentdochtml:"none"
    }
    console.log("Just finished contructing state!");
    this.handleListItemClick = this.handleListItemClick.bind(this);
    this.setClassofList = this.setClassofList.bind(this);
    this.setClassofSection = this.setClassofSection.bind(this);
    this.getDocURL = this.getDocURL.bind(this);


  }
  componentDidMount(){
    axios.get('/contents/currentcourses.json')
      .then(res => {
        console.log("current courses loaded!");
        this.setState({
          coursesobject: res.data
        });
        console.log("current courses called set state!");
        console.log(res.data);
        let newurl = this.getDocURL(res.data,this.state.currentlanguage,this.state.currentsection,this.state.currentsubsection);
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

  getDocURL(coursesdata,language,section,subsection){
    let sectionindex = findInDicArray(section,"name",coursesdata[language].sections); //Find the index of the section where the subsection resides
    let subsectionindex = findInDicArray(subsection,"name",coursesdata[language].sections[sectionindex].subsections); //Find the index of the subsection inside it's section to retrieve the subsections URL
    return ('/contents/' + coursesdata[language].sections[sectionindex].subsections[subsectionindex].fileurl);
  }


  handleListItemClick(event) {
    event.persist();
    this.setState((state) =>{
      return {
        currentsubsection:event.target.id,
        currentsection:event.target.parentElement.parentElement.id
      }
    });
    let newurl = this.getDocURL(this.state.coursesobject,this.state.currentlanguage,event.target.parentElement.parentElement.id,event.target.id);
    this.setState({
        currentdocurl: newurl
      })
    axios.get(newurl)
    .then(res => {
      this.setState({
        currentdochtml: res.data
      })
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
    if (this.state.coursesobject === "none" | this.state.currentdochtml === "none"){
      return (<div></div>);
    }
    else{
      console.log(this.state);
      const languageitems = this.state.coursesobject[this.state.currentlanguage].sections.map((section) =>
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
          {this.state.coursesobject[this.state.currentlanguage].language}
        </h2>
        <div id="listnestdiv">
          {languageitems}
        </div>
        </div>
        <div id="coursedisplaydiv" dangerouslySetInnerHTML={{__html: this.state.currentdochtml}}>
          </div>
      </div>
    );
  }

  }
}
  export default CourseViewerComponent;
