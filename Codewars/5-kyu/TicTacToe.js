// Date: 8/03/2023

function isSolved(board) {
    let ans = 0;
    if (board[0][0] === board[0][1] && board[0][1] === board[0][2] && board[0][1]!=0) {
        ans = board[0][0];
    } else if (board[1][0] === board[1][1] === board[1][2]&& board[1][1]!=0) {
        ans = board[1][1];
    } else if (board[2][0] === board[2][1] && board[2][1] === board[2][2]&& board[2][1]!=0) {
        ans = board[2][1];
    } else if (board[0][0] === board[1][0] && board[2][0] === board[1][0] && board[0][0]!=0) {
        ans = board[0][0];
    } else if (board[0][1] === board[1][1] && board[1][1] === board[2][1]&& board[1][1]!=0) {
        ans = board[1][1];
    } else if (board[0][2] === board[1][2] && board[1][2] === board[2][2]&& board[2][2]!=0) {
        ans = board[2][2];
    } else if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0]!=0) {
        ans = board[0][0];
    } else if (board[0][2] === board[1][1] && board[1][1] === board[2][0]&& board[1][1]!=0) {
        ans = board[1][1];
    } else {
        board.forEach((element) => {
            if (element.find((x)=> x === 0)===0) {
                ans =  -1;
            } 
        });
    }
return ans;
  }

console.log(isSolved([[2, 2, 2],
                      [2, 0, 1],
                      [1, 2, 1]]));


/*
Description:

If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? 
Our goal is to create a function that will check that for us!

Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", 
like so:

EXAMPLES:
[[0, 0, 1],
 [0, 1, 2],
 [2, 1, 0]]

ADDITIONAL:
We want our function to return:

-1 if the board is not yet finished AND no one has won yet (there are empty spots),
1 if "X" won,
2 if "O" won,
0 if it's a cat's game (i.e. a draw).
You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

*/
