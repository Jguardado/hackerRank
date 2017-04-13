const sequence = [1, 3, 2, 1];

function almostIncreasingSequence(sequence) {
  const sorted = sequence.sort((a, b) => a - b);
  let inOrder;

  console.log("sorted: ", sorted);

  const checkSeq = (array) => {
    inOrder = true;
    console.log("array at begining: ", array);
    array.forEach((num, index) => {
      console.log("num exists: ", num);
      if(num === array[index + 1]) {
        console.log("how many times");
        array.splice(index, 1);
        console.log("array: ", array);
        checkSeq(array);
        return
      }

      console.log("lets check: ", num+1, 'seq: ', array[index + 1]);
      if(num + 1 !== array[index + 1]) {
        inOrder = false;
        return
      }
    })
    return inOrder
  }
  checkSeq(sequence)
  console.log("inOrder: ", inOrder);
}

almostIncreasingSequence(sequence)
