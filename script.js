let btns = document.querySelectorAll('.box');
let resetBtn = document.querySelector('.reset-btn');
let msg = document.querySelector('.msginfo');

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

let turn0 = true;
let count = 0;

btns.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();
        if (count === 9 && !isWinner) {
            gameDraw();
        }
    });
});

const resetGame = () => {
    turn0 = true;
    count = 0;
    enableBoxes();
}
resetBtn.addEventListener("click", resetGame);

function gameDraw() {
    msg.innerHTML = "Game was a Draw";
    disableBoxes();
}
const disableBoxes = () => {
    for (let box of btns) {
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for (let box of btns) {
        box.disabled = false;
        box.innerText = "";
    }
    msg.innerText="Winner : None";
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = btns[pattern[0]].innerText;
        let pos2Val = btns[pattern[1]].innerText;
        let pos3Val = btns[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                return true;
            }
        }
    }
};

