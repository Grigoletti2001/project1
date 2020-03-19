console.log("itza me mario");

// class game 
// class Game {


//     constructor (player1, player2, player3, player4,box1, box2, box3, box4, box5)  {

//         this.player1 = player1 ;
//         this.player2 = player2 ; 
//         this.player3 = player3 ; 
//         this.player4 = player4 ; 
//         this.box1 = box1; 
//         this.box2 = box2; 



//     }


// }

const application = {  
    //showing: 
      cubeCharacters: ["Bowser", "Toad", "Shell", "Boo"], 
    jumpSuccess: true, 
    gameCharacters: ["Mario", "Peach", "Walugi", "Diddy-Kong" ] 

    // f(){
        // use setInterval to log each element in the array after a certain amount of time, 
        // and cycle back to beginning
        // toad, bowser, ghost, shell, toad, bowser, ghost, shell....
    //}


    displayCubeCharacters: function (cubeCharacters) {

        cubeCharacters = setInterval(threeSecond, 3000);

    }

    threeSecond: function (){
        console.log(test)
    }
displayCubeCharacters(); 

}



 

//function blockspins





