console.log("itza me mario");



const application = {  
    //showing: 
    cubeCharacters: ["Bowser", "Toad", "Shell", "Boo"], 
    jumpSuccess: true, 
    gameCharacters: ["Mario", "Peach", "Walugi", "Diddy-Kong" ] ,
    currentImage: 0,



displayNextImage: function () {
        x = (x === images.length - 1) ? 0 : x + 1;
document.getElementById("img").src = images[x];
          },

displayPreviousImage: function () {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("img").src = images[x];
},

startTimer: function () {
    setInterval(displayNextImage, 3000);
},

// var images = application.cubeCharacters;
// images[0] = "assets/characters/image1.png";
// images[1] = "assets/characters/image2.png";
// images[2] = "assets/characters/image3.png";
// images[3] = "assets/characters/image4.png";


}

