var previousElement = "O";
function drawElement(elName){
    
    let cell = document.getElementById(elName);

    if(previousElement === "O"){
        cell.innerText = "X";
        cell.style.color = "blue";
        previousElement = "X";
        printCurrentPlayer("O");
    }else if(previousElement === "X"){
        cell.innerText = "O";
        cell.style.color = "red";
        previousElement = "O";
        printCurrentPlayer("X");
    }

}

function printCurrentPlayer(cp){
    document.getElementById('cp').innerText = cp;
}

document.addEventListener("DOMContentLoaded", ()=>{
    printCurrentPlayer('X');
});