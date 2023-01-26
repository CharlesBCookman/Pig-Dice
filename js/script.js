//Object Functions
function Player(playerName, totalScore){
    this.playerName = playerName;
    this.totalScore = totalScore;
}

//business logic
function currentTurn(turn){
    const p = document.createElement("p");
    const displayDiv = document.querySelector("#current-turn-values");
    let turnString = ""
    turn.forEach(element => {
    turnString = ("Rolled: " + element);
    });
    p.innerText = turnString;
    displayDiv.append(p);
    return turn
}

function roll(){
    return Math.floor(Math.random() * 6 + 1)
}

function endTurn(values, div){
    div.innerHTML = '';
}

function addToTotal(numbers){

    let playerSum = 0
    if (numbers.includes(1)){
    } else {
    numbers.forEach(number => {
        playerSum += number;
        });
    }
    checkAndSet(playerSum);
    console.log(playerSum);

}

//UI Logic

function addPlayer(number){
    console.log(".player" + number);
    let player = ".player" + number;
    let showPlayer = document.querySelectorAll(player);
    console.log(showPlayer);

    //Sets the index number for each player
    showPlayer.forEach(element => {
        element.removeAttribute("class", "hidden");
    });
}

function startPlayers(number, values) {
    for (let i = 1; i <= number; i++){
    let name = document.querySelector("#player" + number + "-name").value;
        values[i].append(Player(name, 0));
    } 
    console.log(values);
}

function checkWinner(number, element) {
    if (number >= 40) {
        element.innerText = "WINNER WINNER CHICKEN DINNER!!!!";
    } else {
        //nothing
    }
}

function checkAndSet(sum) {
    let p1Turn = document.querySelector("#p1turn");
    let p2Turn = document.querySelector("#p2turn");
    let p1Score = document.querySelector("#p1score");
    let p2Score = document.querySelector("#p2score");
    if (p2Turn.classList.value === 'hidden') {
        p1Score.innerText = (parseInt(p1Score.innerText) + sum).toString();
        p2Turn.removeAttribute("class", 'hidden');
        p1Turn.setAttribute("class", 'hidden');
        checkWinner(parseInt(p1Score.innerText), p1Score);
    } else if (p1Turn.classList.value === 'hidden'){
        p2Score.innerText = (parseInt(p2Score.innerText) + sum).toString();
        p2Turn.setAttribute("class", 'hidden');
        p1Turn.removeAttribute("class", 'hidden');
        checkWinner(parseInt(p2Score.innerText), p2Score);
    } else {
        console.log("if is broken");
    }
}

window.onload = function(){
    let turnValues = [];
    turnValues.push({ playerTurn: "Player1", Rolls: []});
    console.log(turnValues);
    let playerNumber = 0;
    //setting buttons to variables
    const addPlayerButton = document.querySelector("#add-player");
    const startButton = document.querySelector("#start")
    const rollButton = document.querySelector("#roll");
    const endTurnButton = document.querySelector("#end-turn");
    const resetButton = document.querySelector("#reset");
    
    const p = document.createElement("p");
    
    //setting divs to variables
    const displayDiv = document.querySelector("#current-turn-values");
    const startMenuDiv = document.querySelector("#start-menu")

    //setting game buttons to hidden on page load

    addPlayerButton.onclick = function(){
        playerNumber ++;
        console.log(playerNumber);
        addPlayer(playerNumber);
    }

    startButton.onclick = function(){
        console.log(playerNumber);
        document.querySelector("#game").removeAttribute("class", "hidden");
        startMenuDiv.setAttribute("class", "hidden");
        startPlayers(playerNumber, turnValues);
    }

    rollButton.onclick = function(){
    turnValues.push(roll());
    currentTurn(turnValues);
    }
    
    endTurnButton.onclick = function(){
        console.log(currentTurn(turnValues)) 
        addToTotal(currentTurn(turnValues))
        endTurn(turnValues, displayDiv);
        turnValues = [];
    }
    resetButton.onclick = function(){
        let p1Turn = document.querySelector("#p1turn");
        let p2Turn = document.querySelector("#p2turn");
        let p1Score = document.querySelector("#p1score");
        let p2Score = document.querySelector("#p2score");
        p1Score.innerText = '0'
        p2Score.innerText = '0'
        p2Turn.setAttribute("class", 'hidden');
        p1Turn.removeAttribute("class", 'hidden');
    }
}

