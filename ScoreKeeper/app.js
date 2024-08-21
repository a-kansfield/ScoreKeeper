const plOneBtn = document.querySelector("#first");
const plTwoBtn = document.querySelector("#center");
const resetBtn = document.querySelector("#last");
const score = document.querySelector("#score");
const plOneSpan = document.querySelector("#one");
const plTwoSpan = document.querySelector("#two");
const selection = document.querySelector("#playing-to");

let numOfGames = selection.value; 
let plOneScore = 0;
let plTwoScore = 0;

let matchFinished = false;


plOneBtn.addEventListener('click', function() {
    numOfGames = selection.value; 
    if (matchFinished === false) {
        plOneScore += 1;

        plOneSpan.innerText = plOneScore;
        chkWinner();
    }

})

plTwoBtn.addEventListener('click', function() {
    numOfGames = selection.value; 
    if (matchFinished === false) {
        plTwoScore += 1;
        
        plTwoSpan.innerText = plTwoScore;
        chkWinner();
    }

})

resetBtn.addEventListener('click', function() {
    numOfGames = selection.value; 
    plOneScore = 0;
    plTwoScore = 0;
    plOneSpan.innerText = plOneScore;
    plTwoSpan.innerText = plTwoScore;
    matchFinished = false;

    resetClasses();

    

})

function updateTxt(span, score){
    span.innerText = score;
}

function resetClasses() {
    plOneSpan.classList.remove("loser", "winner");
    plTwoSpan.classList.remove("loser", "winner");
}
function chkWinner() {
    let totalPoints = plOneScore + plTwoScore;
    let gamesLeft = numOfGames - totalPoints;

    if ((Math.min(plOneScore, plTwoScore) + gamesLeft < Math.max(plOneScore, plTwoScore)) || (totalPoints >=  numOfGames)) {

        matchFinished = true;

        if (plOneScore > plTwoScore) {

            resetClasses();

            plOneSpan.classList.add("winner");
            plTwoSpan.classList.add("loser");

        } else if (plOneScore < plTwoScore) {

            resetClasses();

            plTwoSpan.classList.add("winner");
            plOneSpan.classList.add("loser");

        }
    }
}