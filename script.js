let boxes = document.querySelectorAll("#box");
let resetButton = document.querySelector("#reset");
let newGame = document.querySelector("#newBttn");
let mssg = document.querySelector("#mssg");

let turnX = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const showWinner = (pos) => {
    if(pos == "X"){
        mssg.innerText = "Congratulations!! Player-1 is the winner";
        mssg.classList.remove("hide");  
    } else {
        mssg.innerText = "Congratulations!! Player-2 is the winner";
        mssg.classList.remove("hide"); 
    }
}

const showTie = () => {
    mssg.innerText = "It's a tie!";
    mssg.classList.remove("hide");
}

const stopInput = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const startInput = () => {
    for(let box of boxes){
        box.disabled = false;
    }
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box clicked");
        if(turnX) {
            box.innerText = "X";
            turnX = false;
        } else {
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true; 
        winnerCheck();   
    })
})

const winnerCheck = () => {
    for (let pattern of winPatterns) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if( pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 == pos2 && pos2 == pos3){
                if(pos1 == "X"){
                    console.log("X is winner");
                    stopInput();
                    showWinner(pos1);
                }else{
                    console.log("O is winner");
                    stopInput();
                    showWinner(pos1);
                }
            }
        }
    }
    let isTie = Array.from(boxes).every(box => box.innerText !== "");
    if(isTie){
        showTie();
    }
}


resetButton.addEventListener("click" ,() => {
    startInput();
    turnX = true;
    mssg.classList.add("hide");
    for(box of boxes) {
        box.innerText = ""
    }
})

newGame.addEventListener("click" , () => {
    startInput();
    turnX = true;
    mssg.classList.add("hide");
    for(box of boxes) {
        box.innerText = ""
    }
})