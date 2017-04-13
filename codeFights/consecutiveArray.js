const dummyInput = [4, 2, 7, 18];

function makeArrayConsecutive2(statues) {
  const sorted = statues.sort((a, b) => a - b);
  const stop = sorted[sorted.length - 1];
  const start = sorted[0];
  const addedInts = [];
  const statueObj = {};

  console.log("sorted: ", sorted);
  statues.forEach((statue) => {
    return statueObj[statue] = statue
  })

  for (var i = start; i <= stop; i++) {
    if(i !== statueObj[i]) {
      addedInts.push(i)
    }
  }
  console.log(addedInts.length);
  return addedInts.length
}

makeArrayConsecutive2(dummyInput)
