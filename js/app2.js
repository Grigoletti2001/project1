// anonymous function calls itself
(function () {
    // shortcut for console.log
    const log = console.log;
    log("itza me mario");

    let cubeImages = [];
    for (let i = 0; i < 4; i++) {
        cubeImages.push(`assets/characters/image${i + 1}.png`);
    }
    let gameImages = [];
    for (let i = 0; i < 4; i++) {
        gameImages.push(`assets/characters/player${i + 1}.png`);
    }

    let characters = ["Bowser", "Toad", "Shell", "Boo"];
    let players = ["Mario", "Peach", "Walugi", "Diddy-Kong"];

    const numOfCubes = 4;
    let jumpSuccess = true;
    let score = [0, 0, 0, 0];
    const curImgIdx = [0, 1, 2, 3];

    // random image indexes
    // for (let i = 0; i < numOfCubes; i++) {
    // 	curImgIdx.push(Math.round(Math.random() * cubeImages.length));
    // }

    for (let i = 0; i < numOfCubes; i++) {
        setInterval(function () {
            document.getElementById('cube' + i).innerHTML = `<img src="${cubeImages[curImgIdx[i]]
                }" style="width: 300px; " />`;
            // increment the curImgIdx for this cube
            curImgIdx[i]++;
            // set back to zero if it goes above the images length
            if (curImgIdx[i] >= cubeImages.length) {
                curImgIdx[i] = 0;
            }
        }, 1000);
    }

    for (let i = 0; i < players.length; i++) {
        //console.log(gameCharacters[i]);
        document.getElementById('players').innerHTML += `<img src="${gameImages[i]}" style="float:left; margin-right: 2%;width: 300px;" />`;
    }

    // score keeping. which characters are above mario.
    document.body.addEventListener("keydown", event => {
        console.log(event);
        if (event.key == 'a') {
            // currentImage.index1 0,1,2,3
            if (currentImage.index1 == 1) {
                // Toad is over Mario
                score[0] += 1;

                if (score[0] == 5) {
                    // Mario Wins
                    window.alert("Mario Wins");
                }
            } else if (currentImage.index1 !== 1) {
                score[0] += 0;
            }
            // Toad is not equal to Mario (in terms ofbox rotation. )
        }
        if (event.key == 'l') {
            if (currentImage.index2 == 1) {
                // Toad is over Peach
                score[1] += 1;

                if (score[1] == 5) {
                    // Princess Peach Wins
                    window.alert("Princess Wins");
                }
            } else if (currentImage.index2 !== 1) {
                // Toad is not over Peacch
                score[1] += 0;
            }
        }
    });

})();
