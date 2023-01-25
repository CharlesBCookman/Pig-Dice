
function currentTurn(array){
    const p = document.createElement("p");
    const displayDiv = document.querySelector("#current-turn-values");
    array.forEach(element => {
        p.append("Rolled: " + element);

    });
}

function roll(){
    return Math.floor(Math.random() * 6 + 1)
}

window.onload = function(){
    let turnValues = [];
    const rollButton = document.querySelector("#roll");
    const endTurnButton = document.querySelector("#end-turn");
    const resetButton = document.querySelector("#reset");
    rollButton.onclick = function() {
        currentTurn(turnValues.push.roll());
    }
};