
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
    let p1Turn = document.querySelector("#p1turn");
    let p2Turn = document.querySelector("#p2turn");
    let p1Score = document.querySelector("#p1score");
    let p2Score = document.querySelector("#p2score");
    let playerSum = 0
    const p1id = 1
    const p2id = 2
    numbers.forEach(number => {
        playerSum += number;
    });
    if (p2Turn.classList.value === 'hidden') {
        p1Score.innerText = playerSum.toString();
        p2Turn.removeAttribute("class", 'hidden');
        p1Turn.setAttribute("class", 'hidden');
    } else if (p1Turn.classList.value === 'hidden'){
        p2Score.innerText = playerSum.toString();
        p2Turn.setAttribute("class", 'hidden');
        p1Turn.removeAttribute("class", 'hidden');
    } else {
        console.log("if is broken");
    }
    console.log(playerSum)

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
        console.log(currentTurn(turnValues)) 
        addToTotal(currentTurn(turnValues))
        endTurn(turnValues, displayDiv);
        turnValues = [];
    }
}

