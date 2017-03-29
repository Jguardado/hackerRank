const inputDemo = [ '3', '.X.', '.X.', '...', '0 0 0 2' ];

const castleGrid = (input) => {
  const gridSize = input[0];
  const rows = [];
  const positions = input[input.length - 1].split(" ");
  const positionA = [positions[0], positions[1]];
  const positionB = [positions[2], positions[3]];

  for (var i = 1; i <= gridSize; i++) {
    rows.push(input[i].split(''))
  }

  // console.log("variables: ", gridSize, rows, positionA, positionB);

  const checkSteps = (start, stop, matrix) => {
    const routes = [];

    const checkNextStep = (currentPos) => {
      console.log("checking shit: ", currentPos[1] + 1);
      console.log("checking positions: ", matrix[currentPos[0], currentPos[1]])
      if(matrix[currentPos[0], currentPos[1] + 1]) {
        console.log("it worked");
      }
    };

    checkNextStep(start)
  }

  checkSteps(positionA, positionB, rows)

}

castleGrid(inputDemo)
