//three second delay before popup
const delay = 3000; 

//track if he user has already started the animation
//dont show the popup if they have
let   userHasNotStartedAnimationYet = true;
let   animationIsUnderway = false;
/*
show the pop-up after waiting for a few seconds
    setTimeout( function(){}, delayInMilliseconds );
*/


setTimeout(function(){
    if(userHasNotStartedAnimationYet === true){
        let popUp = document.getElementById("pop-up");
        popUp.style.opacity = "1";
    }
}, delay);


/*
allow user to close and hide the pop-up after they have seen it
*/
let closePopUp = document.getElementById("btn-close");

closePopUp.addEventListener('click', function(){
    let popUp = document.getElementById("pop-up");
    popUp.style.opacity = "0";
});

/*
-------------------------------------
spining bike start and stop
-------------------------------------
*/
const mainPictureInHTML = document.getElementById("main-image");
const startAnimation    = document.getElementById("btn-start");
const stopAnimation     = document.getElementById("btn-stop");

//need an animation handler 
let bikeAnimationHandler;
//flag to track if user has chosen to start or stop
let keepSpining = false;
//the first image # in the group
let currentImageNumber = 1;
//the last image # in the group
const maxImageNumber = 34;

//start button is clicked
startAnimation.addEventListener("click", function(){
    if( !animationIsUnderway){
        animationIsUnderway = true;
        mainPictureInHTML.src = `images/bike-${currentImageNumber}.jpg`;
        bikeAnimationHandler = requestAnimationFrame(spinImage);
        userHasNotStartedAnimationYet = false;
        keepSpining = true;
        console.log("Start");
    }
});

//stop button is clicked
stopAnimation.addEventListener("click", function(){
    keepSpining = false;
    console.log("Stop");
});

/*
run this with each frame of animation
*/

function spinImage(){
    if(keepSpining === true){
        currentImageNumber++;
        if(currentImageNumber === maxImageNumber){
            currentImageNumber = 1;
        }
        setTimeout(function(){
            mainPictureInHTML.src = `images/bike-${currentImageNumber}.jpg`;
            bikeAnimationHandler = requestAnimationFrame(spinImage);
        }, 100);
    }
}
