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

    let cubeSideNames = ['Bowser', 'Toad', 'Shell', 'Boo'];
    let playerNames = ['Mario', 'Peach', 'Walugi', 'Diddy-Kong'];

    let players = [];
    for (let i = 0; i < playerNames.length; i++) {
        players.push({
            name: playerNames[i],
            score: 0,
            cubeSide: i
        });
    }

    // start cubes
    for (let i = 0; i < players.length; i++) {
        setInterval(function () {
            // increment the cub side for the player's cube
            players[i].cubeSide++;
            // set back to zero if it goes above the images length
            if (players[i].cubeSide >= cubeImages.length) {
                players[i].cubeSide = 0;
            }
            // replace cube image with the new cube side img
            document.getElementById('cube' + i).innerHTML = `<img src="${cubeImages[players[i].cubeSide]
                }" style="width: 300px; " />`;
        }, 1000); // one second in milliseconds
    }

    // add player character images
    for (let i = 0; i < players.length; i++) {
        //console.log(gameCharacters[i]);
        document.getElementById('players').innerHTML += `<img src="${gameImages[i]}" style="float:left; margin-right: 2%;width: 300px;" />`;
    }

    function stopCube(player) {
        log(player.name + ' stopped cube at ' +
            player.cubeSide + ' ' + cubeSideNames[player.cubeSide]);

        // Toad is cube side 1
        if (player.cubeSide == 1) {
            // if the player stopped at Toad they get a point
            // added to their score
            player.score += 1;

            // if the player gets 5 points they win!
            if (player.score == 5) {
                window.alert(player.name + ' Wins!');
            }
        } else {
            // subtract one from their score if they don't get Toad
            player.score -= 1;
        }
    }

    function updateScores() {
        for (let i = 0; i < players.length; i++) {
            let player = players[i];
            document.getElementById('player' + i + 'Score').innerHTML =
                player.name + "'s score: " + player.score;
        }
    }

    // score keeping. which characters are above mario.
    document.body.addEventListener("keydown", event => {

        if (event.key == 'a') {
            stopCube(players[0]);
        } else if (event.key == 'f') {
            stopCube(players[1]);
        } else if (event.key == 'j') {
            stopCube(players[2]);
        } else if (event.key == 'l') {
            stopCube(players[3]);
        }
        updateScores();
    });

})();


