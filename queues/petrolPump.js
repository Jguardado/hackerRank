const HRinput  = [ '3', '1 5', '10 3', '3 4', '' ];

/*
  amount of gas / dustance to next pump
[ " firstnum ", " secondNum" ]

*/

const petrolPump = (input) => {
  // const parsedInput = input.split("\n")
  const parsedInput = input;
  const numOfPumps = parsedInput.shift();
  parsedInput.pop();
  const pumps = parsedInput.map((pump) => {
    return pump.split(" ");
  });

  const route = [pumps[0]];

  const enqueue = (tuple) => {
    route.unshift(tuple)
  }

  const dequeue = (tuple) => {
    route.forEach((pump, i) => {
      if (pump === tuple) {
        console.log("dequeue conditional passes: ", tuple);
        return route.splice(i, 1)
      }
    })
  }

  const preSortEval = (array) => {
    console.log("presort");
    return array.map((item, index) => {
      return [Number(item[0]), index]
    })
  }

  const extractMiles = (array) => {
    return array.map((locale) => locale[0])
  }

  const order = extractMiles(preSortEval(pumps)).sort((a, b) => a - b)

  // sort locales

  const groupedByIndex = preSortEval(pumps)

  console.log("route: ", order, 'group', test);

}

petrolPump(HRinput)
