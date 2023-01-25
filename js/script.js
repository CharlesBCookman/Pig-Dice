
function currentTurn(turn){
    const p = document.createElement("p");
    const displayDiv = document.querySelector("#current-turn-values");
    let turnString = ""
    console.log(turn);
    turn.forEach(element => {
    turnString = ("Rolled: " + element);
    });
    p.innerText = turnString;
    displayDiv.append(p);
}

function roll(){
    return Math.floor(Math.random() * 6 + 1)
}

function endTurn(values, div){
    // values.forEach()
    div.innerHTML = '';
}

window.onload = function(){
    let turnValues = [];
    let p1Score = 0;
    let p2Score = 0;
    const rollButton = document.querySelector("#roll");
    const endTurnButton = document.querySelector("#end-turn");
    const resetButton = document.querySelector("#reset");
    const p = document.createElement("p");
    const displayDiv = document.querySelector("#current-turn-values");

    rollButton.onclick = function(){
    turnValues.push(roll());
    currentTurn(turnValues);
    }

    endTurnButton.onclick = function(){
        endTurn(turnValues, displayDiv, p1Score, p2Score);
        turnValues = [];
    }
}

