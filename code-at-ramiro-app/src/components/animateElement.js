function animateElement(elementid, animationclass, origindisplay, targetdisplay, duration) {
    document.getElementById(elementid).style.display = origindisplay;
    document.getElementById(elementid).classList.add(animationclass);
    setTimeout(() => {
        document.getElementById(elementid).classList.remove(animationclass);
        document.getElementById(elementid).style.display = targetdisplay;
    }, duration);
}

export default animateElement;