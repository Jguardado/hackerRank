const sequence = [1, 3, 2, 1];

function almostIncreasingSequence(sequence) {
  // const sorted = sequence.sort((a, b) => a - b);
  // let inOrder;
  //
  // console.log("sorted: ", sorted);
  //
  // const checkSeq = (array) => {
  //   inOrder = true;
  //   console.log("array at begining: ", array);
  //   array.forEach((num, index) => {
  //     console.log("current number: ", num);
  //     if(num === array[index + 1]) {
  //       console.log("how many times");
  //       array.splice(index, 1);
  //       console.log("array: ", array);
  //       checkSeq(array);
  //       return
  //     }
  //
  //     if(num === array.length - 1) {
  //       return
  //     }
  //
  //     console.log("lets check: ", num + 1, 'seq: ', array[index + 1]);
  //     if(num + 1 !== array[index + 1]) {
  //       inOrder = false;
  //       return
  //     }
  //   })
  //   return inOrder
  // }
  // checkSeq(sequence)
  // console.log("inOrder: ", inOrder);

  // iterate through array, covert array to obj... while checking for duplicates.
      // if duplicate found, splice array and
  // iterate through array (again)
}

almostIncreasingSequence(sequence)
