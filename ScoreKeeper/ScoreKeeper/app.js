const resetBtn = document.querySelector("#last");
const score = document.querySelector("#score");
const selection = document.querySelector("#playing-to");
const overtime = document.querySelector("#overtime");

let numOfGames = 0; 
let matchFinished = false;


const p1 = {
    score: 0,
    button: document.querySelector("#first"),
    display: document.querySelector("#one")
}

const p2 = {
    score: 0,
    button: document.querySelector("#center"),
    display: document.querySelector("#two")
}




// Updates score based on which button was pressed
function updateScores(player, opponent) {

    if (matchFinished === false) {
        player.score += 1;

        player.display.innerText = player.score;
        chkWinner(player, opponent);
    }
}

// Resets coloration on score text
function resetClasses() {
    p1.display.classList.remove("loser", "winner");
    p2.display.classList.remove("loser", "winner");
}

// Adds visual effect to denote a button is no longer clickable
function disableButtons() {
    p1.button.classList.add("disabled");
    p2.button.classList.add("disabled");
}

// Checks to identify if a winner has been identified
function chkWinner(player, opponent) {
    let totalPoints = player.score + opponent.score;
    let gamesLeft = numOfGames - totalPoints;

    if ((Math.min(player.score, opponent.score) + gamesLeft < Math.max(player.score, opponent.score)) || (totalPoints >=  numOfGames)) {
        overtime.style.display = "none";
        matchFinished = true;

        if (player.score > opponent.score) {

            resetClasses();
            disableButtons();
            
            player.display.classList.add("winner");
            opponent.display.classList.add("loser");

        // If a tie is reached, go into overtime.
        } else if (player.score === opponent.score){
            numOfGames += 1;
            overtime.style.display = "block";
            matchFinished = false;
        }

    }
}


//EVENT LISTENERS
selection.addEventListener('change', function() {
    numOfGames = parseInt(selection.value); 
});

p1.button.addEventListener('click', function() {

    if (matchFinished === false) {
        updateScores(p1, p2);
    }

});

p2.button.addEventListener('click', function() {

    if (matchFinished === false) {
        updateScores(p2, p1);
    }

});

resetBtn.addEventListener('click', function() {

    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.innerText = p.score;
        p.button.classList.remove("disabled");
    }
    matchFinished = false;
    resetClasses();

    

});


