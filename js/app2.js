class Game {
    constructor(players, cubeImages, gameImages, cubeSideNames, playerNames) {
        this.players = [];
        this.cubeImages = [];
        this.gameImages = [];
        this.cubeSideNames = ['Bowser', 'Toad', 'Shell', 'Boo'];
        this.playerNames = ['Mario', 'Peach', 'Walugi', 'Diddy-Kong'];
    }

    renderCubeImages(length = 4) {
        for (let i = 0; i < length; i++) {
            this.cubeImages.push(`assets/characters/image${i + 1}.png`);
        }
    }

    renderGameImages(length = 4) {
        for (let i = 0; i < length; i++) {
            this.gameImages.push(`assets/characters/player${i + 1}.png`);
        }
    }

    updateScores() {
        for (let i = 0; i < players.length; i++) {
            let player = players[i];
            document.getElementById('player' + i + 'Score').innerHTML =
                player.name + "'s score: " + player.score;
        }
    }

    stopCube(player) {
        console.log(player.name + ' stopped cube at ' +
            player.cubeSide + ' ' + this.cubeSideNames[player.cubeSide]);

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

    generatePlayers() {
        for (let i = 0; i < this.playerNames.length; i++) {
            this.players.push({
                name: this.playerNames[i],
                score: 0,
                cubeSide: i
            });
        }
    }

    startCubes() {
        let players = this.players;

        for (let i = 0; i < players.length; i++) {
            setInterval(() => {
                // increment the cub side for the player's cube
                players[i].cubeSide++;
                // set back to zero if it goes above the images length
                if (players[i].cubeSide >= this.cubeImages.length) {
                    players[i].cubeSide = 0;
                }
                // replace cube image with the new cube side img
                document.getElementById('cube' + i).innerHTML = `<img src="${this.cubeImages[players[i].cubeSide]
                    }" style="width: 300px; " />`;
            }, 1000); // one second in milliseconds
        }

    }

    addPlayers() {
        for (let i = 0; i < this.players.length; i++) {
            //console.log(gameCharacters[i]);
            document.getElementById('players').innerHTML += `<img src="${this.gameImages[i]}" style="float:left; margin-right: 2%;width: 300px;" />`;
        }
    }

    ready() {
        let players = this.players;

        this.renderCubeImages();
        this.renderGameImages();

        // generate players
        this.generatePlayers();

        // start cubes
        this.startCubes();

        // add player character images
        this.addPlayers();

        // score keeping. which characters are above mario.
        document.body.addEventListener("keydown", event => {
            if (event.key == 'a') {
                this.stopCube(players[0]);
            } else if (event.key == 'f') {
                this.stopCube(players[1]);
            } else if (event.key == 'j') {
                this.stopCube(players[2]);
            } else if (event.key == 'l') {
                this.stopCube(players[3]);
            }

            this.updateScores();
        });
    }
}

const game = new Game();
game.ready();