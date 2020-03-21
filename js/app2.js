console.log("itza me mario");

const application = {
    //showing: 
    cubeCharacters: ["Bowser", "Toad", "Shell", "Boo"],
    jumpSuccess: true,
    gameCharacters: ["Mario", "Peach", "Walugi", "Diddy-Kong"],
    cubeImages: ["assets/characters/image1.png", "assets/characters/image2.png", "assets/characters/image3.png", "assets/characters/image4.png"],
    gameImages: ["assets/characters/player1.png", "assets/characters/player2.png", "assets/characters/player3.png", "assets/characters/player4.png"],
    currentImage: { index: 0 },
    cubeTime: function () {
        setInterval(function () {
            console.log(application.cubeCharacters[application.currentImage.index]);
            document.getElementById('divCubeCharacter').innerHTML = `<img src="${application.cubeImages[application.currentImage.index]
                }" style="width: 300px; " />`;
            application.currentImage.index++;
            if (application.currentImage.index === application.cubeCharacters.length)
                application.currentImage.index = 0;
        }, 1000);
    },
    displayGameCharacter: function () {
        for (let i = 0; i < application.gameCharacters.length; i++) {
            console.log(application.gameCharacters[i]);
            document.getElementById('divGameCharacters').innerHTML += `<img src="${application.gameImages[i]}" style="float:left; margin-right: 2%;width: 300px;" />`;
        }
    }
}
// Display the cube character
application.cubeTime( );

// Display the game character
application.displayGameCharacter();
