const bbox = document.getElementById("board");
const sbox = document.querySelectorAll(".box");
const statusText = document.getElementById("status");
const resetBtn = document.getElementById("reset");

let Playern = "X";
let boardState = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const winCombs = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]
];

sbox.forEach(box => {
    box.addEventListener("click", () => {
        if (!gameActive || box.textContent !== "") return;
    
        let index = box.getAttribute("data-index");
        boardState[index] = Playern;
        box.textContent = Playern; // fixed this line
        box.disabled = true;
    
        if (checkWinner()) {
            statusText.textContent = `Player ${Playern} Wins! `;
            gameActive = false;
            return;
        }
    
        if (!boardState.includes("")) {
            statusText.textContent = "It's a Draw! ";
            gameActive = false;
            return;
        }
    
        Playern = Playern === "X" ? "O" : "X";
        statusText.textContent = `Player ${Playern}'s Turn`;
    });
});