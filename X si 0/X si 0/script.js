const HUMAN_PLAYER = 'X';
const COMPUTER_PLAYER = 'O';
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const cells = document.querySelectorAll('[data-cell]');
const restartButton = document.getElementById('restartButton');
const status = document.getElementById('status');
let currentPlayer = HUMAN_PLAYER;

startGame();

restartButton.addEventListener('click', startGame);

function startGame() {
    cells.forEach(cell => {
        cell.innerText = '';
        cell.removeEventListener('click', handleClick);
        cell.addEventListener('click', handleClick, { once: true });
    });
    currentPlayer = HUMAN_PLAYER;
    setStatus(`${currentPlayer}'s turn`);
}


function handleClick(e) {
    const cell = e.target;
    if (cell.innerText === '') {
        placeMark(cell, currentPlayer);
        if (checkWin(currentPlayer)) {
            endGame(`${currentPlayer} wins!`);
        } else if (isDraw()) {
            endGame("It's a draw!");
        } else {
            currentPlayer = currentPlayer === HUMAN_PLAYER ? COMPUTER_PLAYER : HUMAN_PLAYER;
            if (currentPlayer === COMPUTER_PLAYER) {
                computerMove();
            } else {
                setStatus(`${currentPlayer}'s turn`);
            }
        }
    }
}

function computerMove() {
    const emptyCells = [...cells].filter(cell => cell.innerText === '');
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const cell = emptyCells[randomIndex];
    placeMark(cell, currentPlayer);
    if (checkWin(currentPlayer)) {
        endGame(`${currentPlayer} wins!`);
    } else if (isDraw()) {
        endGame("It's a draw!");
    } else {
        currentPlayer = currentPlayer === HUMAN_PLAYER ? COMPUTER_PLAYER : HUMAN_PLAYER;
        setStatus(`${currentPlayer}'s turn`);
    }
}

function endGame(message) {
    setStatus(message);
    cells.forEach(cell => {
        cell.removeEventListener('click', handleClick);
    });
}

function setStatus(message) {
    status.innerText = message;
}

function isDraw() {
    return [...cells].every(cell => cell.innerText !== '');
}

function placeMark(cell, player) {
    cell.innerText = player;
}

function checkWin(player) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cells[index].innerText === player;
        });
    });
}




















