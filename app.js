// Grains and chessBoard problem ==========================================================================

// Calculate the number of grains of wheat on a chessboard given that the number on each square doubles.
// There once was a wise servant who saved the life of a prince. The king promised to pay whatever the servant
// could dream up. Knowing that the king loved chess, the servant told the king he would like to have grains of wheat.
// One grain on the first square of a chess board. Two grains on the next. Four on the third, and so on.
// There are 64 squares on a chessboard.
// Write code that shows:
// how many grains were on each square, and
// the total number of grains

const grainsInEachSquare = num => {
  return 2 ** (num - 1);
};

console.log(grainsInEachSquare(10));

// the total  of grains
const chessBoardOfGrains = () => {
  let chessBoard = [];
  for (i = 1; i < 64; i++) {
    chessBoard.push(2 ** (i - 1));
  }
  const totalGrains = chessBoard.reduce((a, b) => a + b, 0);
  return totalGrains;
};
console.log(chessBoardOfGrains());
