//Code written by Alfonso Lagares de Toledo, MIT Licensed
//Function that animates the logo and conent div with the courses div transition

import animateElement from './animateElement.js'
var isanimationrunning = false; //Variable for course button animation to not activate if it is already running, improves stability
var iscoursesactive = false; //Variable for course div to show

function handleCoursesButton(event) {
    if (!isanimationrunning) { //Executes if the animation is not running, improves stability
        iscoursesactive = !iscoursesactive; //Negates the state of the page, as the button is a pushbutton
        isanimationrunning = true; //Makes sure no two animations are running at once
        if (iscoursesactive) { //If the courses div should show
            animateElement("logodiv", "fadeoutdown", "grid", "none", 980); //Fades out the logodiv. For fadeout, setting the animation time a little bellow true animation time helps with flashing.
            animateElement("contentdiv", "fadeoutdown", "flex", "none", 980); //Fades out the content
            animateElement("coursesbuttonarrow", "rotatedown", "block", "block", 2000); //Rotates the button arrow
            document.getElementById("coursesbuttonarrow").style.transform = "rotate(90deg)"; //Keeps the arrow from rotating back
            setTimeout(() => { //After the other animations are done, start the next one
                animateElement("coursediv", "fadeinup", "flex", "flex", 2000); //Fade in the courses div
                animateElement("courseabsolutediv", "fadeinup", "flex", "flex", 2000); //Fade in the courses div
                setTimeout(() => {
                    isanimationrunning = false;
                }, 2300); //Return the isanimationrunning to false, for a new change
                //####IMPORTANT: Changing the animation timing values here can result in stability issues.
                //Check index.css and make sure the values here correspond to the ones in the animation classes.
                //Always test animations before new build on different devices to avoid botched releases.
                //(A little extra time after each transition helps with assyncrony)
            }, 1000);
        } else { //If the courses div should be removed
            animateElement("coursediv", "fadeoutdown", "flex", "none", 980); //Fades out the courses div
            animateElement("coursesbuttonarrow", "rotateup", "block", "block", 2000); //Rotates the arrow back
            document.getElementById("coursesbuttonarrow").style.transform = "rotate(0deg)"; //Keeps the arrow frmo rotating back
            setTimeout(() => {
                animateElement("logodiv", "fadeinup", "grid", "grid", 2000); //Fades in the logodiv
                animateElement("contentdiv", "fadeinup", "flex", "flex", 2000) //Fades in the contentdiv
                setTimeout(() => { isanimationrunning = false; }, 2300); //Returns the isanimationrunning to false, for a new change
                //####IMPORTANT: Same warning as before
            }, 1010);
        }

    }
}

export default handleCoursesButton;