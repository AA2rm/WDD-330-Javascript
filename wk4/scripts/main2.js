//TEAM ASSIGNMENT


/* #2 Attach a touchend listener to the board.When a cell is touched it should add either an
'X or an 'O', depending on whether it is player 1 or player 2's turn..
*/
    
    const divboard = document.querySelector('.divboard');                
    const resetButton = document.getElementById('reset_button');
    const divResult = document.getElementById('result_button');
    const player1 = 'X';
    const player2 = 'O';
    let player = player1;

    const opponent=[...divBoard.opponent];
    let counter =0;
    let winningMessage =" Congratualations! you won the game";
    const tieGameMessage = "Not bad, the game is tied!";
    let roundWon = false;

    function addPiece(e) {
        if (counter < 9) {
            const index = children.filter(el => el.localName.indexOf('div') > -1).indexOf(e.target);
            
            if(children[index].innerText== "") {
                e.target.innerText = player;

                counter++;
                if(verifyGame()) {
                    winningMessage = player + winningMessage;
                    counter =9;
                    divResult.innerHTML = winningMessage;
                }
                if(counter == 9 && !roundWon) {

             
                divResult.innerHTML = tieGameMessage
                }
                if(player == "X"){
                    player = player2
                } else {
                    player - player1;
                }
            }                        
        }
    }

    //divBoard.addEventLisener('click', addPiece);
    function resetBoardDiv(){
        children.forEach((child) => child.innerText = "");
       
        divResult.innerHTML = "";
        counter=0;    
    }


    function verifyGame() {
        const winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i <= 7; i++) {
          const winCondition = winningConditions[i];
          let a = children[winCondition[0]].innerText;
          let b = children[winCondition[1]].innerText;
          let c = children[winCondition[2]].innerText;
          if (a === '' || b === '' || c === '') {
            continue;
        }
            if (a === b && b === c) {
                roundWon = true;
                break
            }
        }
    return roundWon;
    }
    divBoard.addEventListener('click', addPiece);
    resetButton.addEventListener('click', resetBoardDiv);
    // OR
  function addPiece(e) {
      //console.log(e.target);
      e.target.innerHTML = player;
      if (player === player1) player = player2;
      else player = player;
      }

/*
 #3 Add a reset button.When touched the reset button should remove all of the marks from  the board.
*/
  
    function resetBoard() {
        const board2 = document.querySelector('.bBoard');
        for (let i = 0; i < board2.children.length; i++) {
            board2.children[i].innerText = '';
        }
        const children = Array.from(board2.children);
        const empty = children.filter(function (child) {
            return child.innerText == 'X' || child.innerText == 'O';
        });
        console.log(empty);
    }
    
    board.addEventListener('click', addPiece);
    board.addEventListener('click', addPiece);
    reset.addEventListener('click', resetBoard);


//#1 Build a 3X3 board in HTML and CSS.





//#2
//Add a touch event handlers
someElement.addEventListener('touchend', process_touchend, false);

//Release the touch to trigger a func
document.getElementById("game_board").ontouchend = myFunction;

function myFunction() {
  document.getElementById("game_board").innerHTML = "Hello World";
}
//Add the addEventListener method
document.getElementById("game_board").addEventListener("touchend", myFunction);

function myFunction() {
  document.getElementById("game_board").innerHTML = ""};