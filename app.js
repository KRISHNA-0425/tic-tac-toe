let boxes = document.querySelectorAll(".box");
let resBtn = document.querySelector("#res-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnX = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],

    [1,4,7],

    [2,5,8],
    [2,4,6],

    [3,4,5],
    
    [6,7,8],
    
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnX){
            box.innerText = "X";
            turnX = false;
        }
        else{
            box.innerText = "O";
            turnX = true
        }
        box.disabled = true;

        checkWinner();
    });
});

const resetGame = () =>{
    turnX = true;
    enableBox();
    msgContainer.classList.add("hide");
}

const disabledBox = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBox = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, our winner is ${winner} !!!`;
    msgContainer.classList.remove("hide");
    disabledBox();
}

const checkWinner = () => {
    for(let patterns of winPatterns){

        let pos1Value = boxes[patterns[0]].innerText; 
        let pos2Value = boxes[patterns[1]].innerText; 
        let pos3Value = boxes[patterns[2]].innerText; 

        if(pos1Value != "" && pos2Value != "" && pos3Value != ""){
            if(pos1Value === pos2Value && pos2Value === pos3Value ){
                console.log("winner",pos1Value);
                showWinner(pos1Value);
            }
        }
    }
}

newGameBtn.addEventListener("click",resetGame);
resBtn.addEventListener("click",resetGame);