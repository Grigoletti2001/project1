console.log("itza me mario");

const application = {
    //showing: 
    cubeCharacters:  ["Bowser", "Toad", "Shell", "Boo"],
    cubeCharacters2: ["Bowser", "Toad", "Shell", "Boo"],
    cubeCharacters3: ["Bowser", "Toad", "Shell", "Boo"],
    cubeCharacters4: ["Bowser", "Toad", "Shell", "Boo"],
    jumpSuccess: true,
    gameCharacters: ["Mario", "Peach", "Walugi", "Diddy-Kong"],
    cubeImages: ["assets/characters/image1.png", "assets/characters/image2.png", "assets/characters/image3.png", "assets/characters/image4.png"],
    gameImages: ["assets/characters/player1.png", "assets/characters/player2.png", "assets/characters/player3.png", "assets/characters/player4.png"],
    currentImage: { index1:0, index2:1, index3:2, index4:3, },

    cubeTime: function () {
        setInterval(function () {
            //console.log(application.cubeCharacters[application.currentImage.index1]);
            document.getElementById('divCubeCharacter').innerHTML = `<img src="${application.cubeImages[application.currentImage.index1]
                }" style="width: 300px; " />`;
            application.currentImage.index1++;
            if (application.currentImage.index1 === application.cubeCharacters.length)
                application.currentImage.index1 = 0;
        }, 1000);
    },

    cubeTime2: function () {
        setInterval(function () {
            //console.log(application.cubeCharacters2[application.currentImage.index2]);
            document.getElementById('divCubeCharacter2').innerHTML = `<img src="${application.cubeImages[application.currentImage.index2]
                }" style="width: 300px; " />`;
            application.currentImage.index2++;
            if (application.currentImage.index2 === application.cubeCharacters2.length)
                application.currentImage.index2 = 0;
        }, 1000);
    },


    cubeTime3: function () {
        setInterval(function () {
            //console.log(application.cubeCharacters3[application.currentImage.index3]);
            document.getElementById('divCubeCharacter3').innerHTML = `<img src="${application.cubeImages[application.currentImage.index3]
                }" style="width: 300px; " />`;
            application.currentImage.index3++;
            if (application.currentImage.index3 === application.cubeCharacters3.length)
                application.currentImage.index3 = 0;
        }, 1000);
    },

    cubeTime4: function () {
        setInterval(function () {
            //console.log(application.cubeCharacters3[application.currentImage.index4]);
            document.getElementById('divCubeCharacter4').innerHTML = `<img src="${application.cubeImages[application.currentImage.index4]
                }" style="width: 300px; " />`;
            application.currentImage.index4++;
            if (application.currentImage.index4 === application.cubeCharacters3.length)
                application.currentImage.index4 = 0;
        }, 1000);
    },




    displayGameCharacter: function () {
        for (let i = 0; i < application.gameCharacters.length; i++) {
            //console.log(application.gameCharacters[i]);
            document.getElementById('divGameCharacters').innerHTML += `<img src="${application.gameImages[i]}" style="float:left; margin-right: 2%;width: 300px;" />`;
        }
    }
}

document.body.addEventListener("keydown",event => {
  console.log(event);
  if (event.code==="KeyA") {

  }
    if (event.code === "KeyL") {

    }


});

// Display the cube character
application.cubeTime( );
application.cubeTime2();
application.cubeTime3();
application.cubeTime4();




// Display the game character
application.displayGameCharacter();
