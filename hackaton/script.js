let computerSymbol;
let playerSymbol;
let positionList = ["", "", "", "", "", "", "", "", ""];
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];

const symbol = (event) => {
    let headline = document.querySelector(".headline");
    headline.style.display = "none";
    let grid = document.querySelector(".display");
    grid.classList.remove("display");
        if (event.target === xbutton) {
            return playerSymbol = "X";
        } else {
            return playerSymbol = "O";
        }
}

const playerWins = () => {
    let result = false;
    for (let j = 0; j < winCombos.length; j++) {
        if (positionList[winCombos[j][0]] === playerSymbol && positionList[winCombos[j][1]] === playerSymbol && positionList[winCombos[j][2]] === playerSymbol) {
            let div = document.querySelector(".playerWins");
            div.classList.remove("display");
            document.getElementById('id'+winCombos[j][0]).classList.add("win");
            document.getElementById('id'+winCombos[j][1]).classList.add("win");
            document.getElementById('id'+winCombos[j][2]).classList.add("win");
            result = true;
        } else if (positionList[winCombos[j][0]] === computerSymbol && positionList[winCombos[j][1]] === computerSymbol && positionList[winCombos[j][2]] === computerSymbol) {
            let div = document.querySelector(".computerWins");
            div.classList.remove("display");
            document.getElementById('id'+winCombos[j][0]).classList.add("lose");
            document.getElementById('id'+winCombos[j][1]).classList.add("lose");
            document.getElementById('id'+winCombos[j][2]).classList.add("lose");
            result = true;
        }
    }
    if (!positionList.includes("") && result === false) {
        let div = document.querySelector(".tie");
        div.classList.remove("display");
        let tdArray = document.querySelectorAll("td");
        tdArray.forEach(td => td.classList.add("ties"));
    }
}

const displayBoard = () => {
    for (let i = 0; i < positionList.length; i++) {
        document.getElementById('id'+i).innerHTML = positionList[i];
    }
    playerWins();
}

const addToList = (event) => {
    if (playerSymbol === "X") {
        computerSymbol = "O";
    } else {
        computerSymbol = "X";
    }
    let playerPosition = parseInt(event.target.getAttribute('id').substring(2));
        if (event.target.innerHTML === "") {
            positionList[playerPosition] = playerSymbol;
        }
    let computerPosition;
        while (positionList.includes("") && positionList[computerPosition] !== "") {
            computerPosition = Math.floor(Math.random() * 9);
        }
        if (positionList.includes("")) {
            positionList[computerPosition] = computerSymbol;
        }
    displayBoard();
}

const createEventListeners = () => {
    for (let i = 0; i < 9; i++) {
        let cell = document.getElementById('id'+i);
        cell.addEventListener("click", addToList);
    }
}

const xbutton = document.querySelector(".x");
const obutton = document.querySelector(".o");
xbutton.addEventListener("click", symbol);
obutton.addEventListener("click", symbol);

createEventListeners();