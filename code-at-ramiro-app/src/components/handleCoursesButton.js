import animateElement from './animateElement.js'
var isanimationrunnint = false; //Variable for course button animation to not activate if it is already running, improves stability
var iscoursesactive = false; //Variable for course div to show

function handleCoursesButton(event){
  if(!isanimationrunnint){
    iscoursesactive = !iscoursesactive;
    isanimationrunnint = true;
    if (iscoursesactive){
      animateElement("logodiv","fadeoutdown","grid","none",1000);
      animateElement("contentdiv","fadeoutdown","flex","none",1000);
      animateElement("coursesbuttonarrow","rotatedown","block","block",2000)
      document.getElementById("coursesbuttonarrow").style.transform = "rotate(90deg)"
      setTimeout(() =>{
        animateElement("coursediv","fadeinup","flex","flex",2000);
        setTimeout(() => {isanimationrunnint = false;},2300);
      },1010);
    }
    else{
      animateElement("coursediv","fadeoutdown","flex","none",1000);
      animateElement("coursesbuttonarrow","rotateup","block","block",2000)
      document.getElementById("coursesbuttonarrow").style.transform = "rotate(0deg)"
      setTimeout(() => {
        animateElement("logodiv","fadeinup","grid","grid",2000);
        animateElement("contentdiv","fadeinup","flex","flex",2000)
        setTimeout(() => {isanimationrunnint = false;},2300);
      },1010);
    }

  }
}

export default handleCoursesButton;
