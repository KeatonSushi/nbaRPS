let playerOneScore = 0;
let playerTwo = 0;

let originalText1 = document.getElementById("p1").innerHTML;
let originalText2 = document.getElementById("p2").innerHTML;

twentybtn.addEventListener("click", function Two20PlayerGen(){
    let playerOneOptions2020 = ["Steph Curry - 96", "Giannis Antetokounmpo - 97", "Nikola Jokic - 96", "Luka Doncic - 96", "Jayson Tatum - 95", "Devin Booker - 91", "Ja Morant - 93"];
    
    let randomIndex = Math.floor(Math.random() * playerOneOptions2020.length);
    let randomPlayerOne2020 = playerOneOptions2020[randomIndex];
    let nbaOneEl = document.getElementById("nba-player1");
    nbaOneEl.textContent = randomPlayerOne2020;

    let playerTwoOptions2020 = ["Steph Curry - 96", "Giannis Antetokounmpo - 97", "Nikola Jokic - 96", "Luka Doncic - 96", "Jayson Tatum - 95", "Devin Booker - 91", "Ja Morant - 93", "Lebron James - 98", "Kevin Durant - 96", "Steph Curry - 96", "Kawhi Leonard - 92", "James Harden - 90", "Russell Westbrook - 91", "Kobe Bryant - 99", "Shaquille O'neal - 98", "Tim Duncan - 95", "Kevin Garnett - 97", "Allen Iverson - 96", "Dwayne Wade - 97"];
    randomIndex = Math.floor(Math.random() * playerTwoOptions2020.length);
    let randomPlayerTwo2020= playerTwoOptions2020[randomIndex];
    nbaOneEl = document.getElementById("cpu");
    nbaOneEl.textContent = randomPlayerTwo2020;

    let playerOneScore = parseInt(randomPlayerOne2020.split(" - ")[1]);
    let playerTwoScore = parseInt(randomPlayerTwo2020.split(" - ")[1]);

    if(playerOneScore > playerTwoScore){
        let winnerEl = document.getElementById("for-winner");
        winnerEl.textContent = "Player Scores!";
        document.getElementById("p2").innerHTML = originalText2;
    } else if (playerOneScore < playerTwoScore) {
        let winnerEl = document.getElementById("for-winner");
        winnerEl.textContent = "CPU Scores!";
        document.getElementById("p1").innerHTML = originalText1;
    } else {
        let winnerEl = document.getElementById("for-winner");
        winnerEl.textContent = "Tie Game!";
    }
});




tensbtn.addEventListener("click", function tensPlayerGen(){
    let playerOneOptions10s = ["Lebron James - 98", "Kevin Durant - 96", "Steph Curry - 96", "Kawhi Leonard - 92", "James Harden - 90", "Russell Westbrook - 91"];
    let randomIndex = Math.floor(Math.random() * playerOneOptions10s.length);
    let randomPlayerOne10s = playerOneOptions10s[randomIndex];
    let nbaOneEl = document.getElementById("nba-player1");
    nbaOneEl.textContent = randomPlayerOne10s;

    let playerTwoOptions10s = ["Steph Curry - 96", "Giannis Antetokounmpo - 97", "Nikola Jokic - 96", "Luka Doncic - 96", "Jayson Tatum - 95", "Devin Booker - 91", "Ja Morant - 93", "Lebron James - 98", "Kevin Durant - 96", "Steph Curry - 96", "Kawhi Leonard - 92", "James Harden - 90", "Russell Westbrook - 91", "Kobe Bryant - 99", "Shaquille O'neal - 98", "Tim Duncan - 95", "Kevin Garnett - 97", "Allen Iverson - 96", "Dwayne Wade - 97"];
    randomIndex = Math.floor(Math.random() * playerTwoOptions10s.length);
    let randomPlayerTwo10s = playerTwoOptions10s[randomIndex];
    let nbaTwoEl = document.getElementById("cpu");
    nbaTwoEl.textContent = randomPlayerTwo10s;

    let playerOneScore = parseInt(randomPlayerOne10s.split(" - ")[1]);
    let playerTwoScore = parseInt(randomPlayerTwo10s.split(" - ")[1]);

    if(playerOneScore > playerTwoScore){
        let winnerEl = document.getElementById("for-winner");
        winnerEl.textContent = "Player Scores!";
        document.getElementById("p2").innerHTML = originalText2;
    } else if (playerOneScore < playerTwoScore) {
        let winnerEl = document.getElementById("for-winner");
        winnerEl.textContent = "CPU Scores!";
        document.getElementById("p1").innerHTML = originalText1;
    } else {
        let winnerEl = document.getElementById("for-winner");
        winnerEl.textContent = "Tie Game!";
    }
});

thousandbtn.addEventListener("click", function two00sPlayerGen(){
    let playerOneOptions00s = ["Kobe Bryant - 99", "Shaquille O'neal - 98", "Tim Duncan - 95", "Kevin Garnett - 97", "Allen Iverson - 96", "Dwayne Wade - 97"];
    let randomIndex = Math.floor(Math.random() * playerOneOptions00s.length);
    let randomPlayerOne00s = playerOneOptions00s[randomIndex];
    let nbaOneEl = document.getElementById("nba-player1");
    nbaOneEl.textContent = randomPlayerOne00s;

    let playerTwoOptions00s = ["Steph Curry - 96", "Giannis Antetokounmpo - 97", "Nikola Jokic - 96", "Luka Doncic - 96", "Jayson Tatum - 95", "Devin Booker - 91", "Ja Morant - 93", "Lebron James - 98", "Kevin Durant - 96", "Steph Curry - 96", "Kawhi Leonard - 92", "James Harden - 90", "Russell Westbrook - 91", "Kobe Bryant - 99", "Shaquille O'neal - 98", "Tim Duncan - 95", "Kevin Garnett - 97", "Allen Iverson - 96", "Dwayne Wade - 97"];
    randomIndex = Math.floor(Math.random() * playerTwoOptions00s.length);
    let randomPlayerTwo00s = playerTwoOptions00s[randomIndex];
    let nbaTwoEl = document.getElementById("cpu");
    nbaTwoEl.textContent = randomPlayerTwo00s;

    let playerOneScore = parseInt(randomPlayerOne00s.split(" - ")[1]);
    let playerTwoScore = parseInt(randomPlayerTwo00s.split(" - ")[1]);

    if(playerOneScore > playerTwoScore){
        let winnerEl = document.getElementById("for-winner");
        winnerEl.textContent = "Player Scores!";
        document.getElementById("p2").innerHTML = originalText2;
    } else if (playerOneScore < playerTwoScore) {
        let winnerEl = document.getElementById("for-winner");
        winnerEl.textContent = "CPU Scores!";
        document.getElementById("p1").innerHTML = originalText1;
    } else {
        let winnerEl = document.getElementById("for-winner");
        winnerEl.textContent = "Tie Game!";
    }
});


