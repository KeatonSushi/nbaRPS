let playerOneScore = 0;
let playerTwo = 0;

let originalText1 = document.getElementById("p1").innerHTML;
let originalText2 = document.getElementById("p2").innerHTML;

currentbtn.addEventListener("click", function currentPlayerGen(){
    let playerOneOptionsCurrent = ["Jayson Tatum - 95", "Kyrie Irving - 92", "Lamelo Ball - 85"];
    let randomIndex = Math.floor(Math.random() * playerOneOptionsCurrent.length);
    let randomPlayerOneCurrent = playerOneOptionsCurrent[randomIndex];
    let nbaOneEl = document.getElementById("nba-player1");
    nbaOneEl.textContent = randomPlayerOneCurrent;

    let playerTwoOptionsCurrent = ["Jayson Tatum - 95", "Kyrie Irving - 92", "Lamelo Ball - 85"];
    randomIndex = Math.floor(Math.random() * playerTwoOptionsCurrent.length);
    let randomPlayerTwoCurrent = playerTwoOptionsCurrent[randomIndex];
    nbaOneEl = document.getElementById("nba-player2");
    nbaOneEl.textContent = randomPlayerTwoCurrent;

    let playerOneScore = parseInt(randomPlayerOneCurrent.split(" - ")[1]);
    let playerTwoScore = parseInt(randomPlayerTwoCurrent.split(" - ")[1]);

    if(playerOneScore > playerTwoScore){
        let winnerEl = document.getElementById("for-winner");
        winnerEl.textContent = "Player One Scores!";
        document.getElementById("p2").innerHTML = originalText2;
    } else if (playerOneScore < playerTwoScore) {
        let winnerEl = document.getElementById("for-winner");
        winnerEl.textContent = "Player Two Scores!";
        document.getElementById("p1").innerHTML = originalText1;
    } else {
        let winnerEl = document.getElementById("for-winner");
        winnerEl.textContent = "Tie Game!";
    }
});




tensbtn.addEventListener("click", function tensPlayerGen(){
    let playerOneOptions10s = ["Lebron James - 99", "Kevin Durant - 95", "Stephen Curry - 93"];
    let randomIndex = Math.floor(Math.random() * playerOneOptions10s.length);
    let randomPlayerOne10s = playerOneOptions10s[randomIndex];
    let nbaOneEl = document.getElementById("nba-player1");
    nbaOneEl.textContent = randomPlayerOne10s;

    let playerTwoOptions10s = ["Lebron James - 99", "Kevin Durant - 95", "Stephen Curry - 93"];
    randomIndex = Math.floor(Math.random() * playerTwoOptions10s.length);
    let randomPlayerTwo10s = playerTwoOptions10s[randomIndex];
    let nbaTwoEl = document.getElementById("nba-player2");
    nbaTwoEl.textContent = randomPlayerTwo10s;

    let playerOneScore = parseInt(randomPlayerOne10s.split(" - ")[1]);
    let playerTwoScore = parseInt(randomPlayerTwo10s.split(" - ")[1]);

    if(playerOneScore > playerTwoScore){
        let winnerEl = document.getElementById("for-winner");
        winnerEl.textContent = "Player One Scores!";
        document.getElementById("p2").innerHTML = originalText2;
    } else if (playerOneScore < playerTwoScore) {
        let winnerEl = document.getElementById("for-winner");
        winnerEl.textContent = "Player Two Scores!";
        document.getElementById("p1").innerHTML = originalText1;
    } else {
        let winnerEl = document.getElementById("for-winner");
        winnerEl.textContent = "Tie Game!";
    }
});

ninetiesbtn.addEventListener("click", function tensPlayerGen(){
    let playerOneOptions90s = ["Michael Jordan - 99", "Shaquille O'Neal - 98", "Kobe Bryant - 95"];
    let randomIndex = Math.floor(Math.random() * playerOneOptions90s.length);
    let randomPlayerOne90s = playerOneOptions90s[randomIndex];
    let nbaOneEl = document.getElementById("nba-player1");
    nbaOneEl.textContent = randomPlayerOne90s;

    let playerTwoOptions90s = ["Michael Jordan - 99", "Shaquille O'Neal - 98", "Kobe Bryant - 95"];
    randomIndex = Math.floor(Math.random() * playerTwoOptions90s.length);
    let randomPlayerTwo90s = playerTwoOptions90s[randomIndex];
    let nbaTwoEl = document.getElementById("nba-player2");
    nbaTwoEl.textContent = randomPlayerTwo90s;

    let playerOneScore = parseInt(randomPlayerOne90s.split(" - ")[1]);
    let playerTwoScore = parseInt(randomPlayerTwo90s.split(" - ")[1]);

    if(playerOneScore > playerTwoScore){
        let winnerEl = document.getElementById("for-winner");
        winnerEl.textContent = "Player One Scores!";
        document.getElementById("p2").innerHTML = originalText2;
    } else if (playerOneScore < playerTwoScore) {
        let winnerEl = document.getElementById("for-winner");
        winnerEl.textContent = "Player Two Scores!";
        document.getElementById("p1").innerHTML = originalText1;
    } else {
        let winnerEl = document.getElementById("for-winner");
        winnerEl.textContent = "Tie Game!";
    }
});


