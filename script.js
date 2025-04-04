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
