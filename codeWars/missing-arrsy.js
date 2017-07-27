function getLengthOfMissingArray(arrayOfArrays) {
  let missingLength = 0;
  const inputCheck = arrayOfArrays;
  if (!Array.isArray(inputCheck)) {
    return missingLength;
  }
  const lengthTracker = [];
  let foundNull = false;
  arrayOfArrays.forEach((arr) => {
    if (arr === null) {
      return foundNull = true;
    }
    return lengthTracker.push(arr.length);
  });
  const sorted = lengthTracker.sort((a, b) => a - b);
  const max = sorted[sorted.length - 1];
  let min = sorted[0];
  const fullScale = [];
  while (fullScale.length < max) {
    fullScale.push(min);
    min += 1;
  }
  missingLength = fullScale.filter(i => sorted.indexOf(i) < 0);
  if (missingLength[0] === null || missingLength[0] === undefined || sorted[0] === 0 || foundNull === true) {
    missingLength = 0;
  } else {
    missingLength = missingLength[0];
  }
  return missingLength;
}


// getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]);
// Expected result  = 3
// getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]);
// Expected result  = 2
console.log(getLengthOfMissingArray([null]));
// Expected result = 0
// getLengthOfMissingArray([[0, 3, 0],
//   [4, 1, 3, 3, 1],
//   [4, 4, 1, 4, 3, 3],
//   [3, 2, 1, 0, 1, 3, 2],
//   [3, 2, 2, 1, 1, 4, 3, 3, 0],
//   [3, 4, 2, 0, 0, 4, 3, 0, 3, 2],
//   [1, 0, 3, 0, 2, 0, 3, 3]]);
// Expected result 4

// getLengthOfMissingArray([[2, 1, 3],
//   [3, 4],
//   [1, 3, 1, 3],
//   [3, 3, 3, 3, 4],
//   [1, 0, 1, 1, 2, 0, 0],
//   [4, 0, 2, 2, 1, 3, 4, 4, 3, 4, 3],
//   [2, 1, 0, 4, 4, 3],
//   [0, 2, 2, 2, 0, 1, 3, 3],
//   [1, 4, 4, 0, 0, 0, 1, 2, 1, 3]]);
// Expected result 9

// getLengthOfMissingArray([[0],
//   [],
//   [2, 1, 2],
//   [4, 3, 2, 3]]);
// Expected result 0

// getLengthOfMissingArray([[1, 2, 2], []]);
// expected result 0
// getLengthOfMissingArray([null, [1, 2, 2]]);
// expected result 0
getLengthOfMissingArray([[1, 2, 2], null]);
// expected result 0
