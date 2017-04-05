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
  //
  // const route = [pumps[0]];
  //
  // const enqueue = (tuple) => {
  //   route.unshift(tuple)
  // }
  //
  // const dequeue = (tuple) => {
  //   route.forEach((pump, i) => {
  //     if (pump === tuple) {
  //       console.log("dequeue conditional passes: ", tuple);
  //       return route.splice(i, 1)
  //     }
  //   })
  // }

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

  const correctlySorted = [];

  // const lovelyDoubleLoop = (array, array2) => {
  //     array.forEach((milage) => {
  //       array2.forEach((pump) => {
  //         console.log("this is pump: ", pump);
  //         if(milage == pump[0]) {
  //           correctlySorted.unshift(pump)
  //         }
  //       })
  //     })
  // }

  lovelyDoubleLoop(order, pumps)
  console.log("route: ", order, 'group', groupedByIndex);
  console.log("correctlySorted: ", correctlySorted);

}

// petrolPump(HRinput)

const gasStationRoutes = () => {

  const gasCheck = (gasInTank, newGas, distanceToGo) => {
    const gasDifference = gas - distanceToGo;
    return gasInTank + gasDifference;
  }

  // gasTank object shows capacity/amount of gas at each index
  const gasTank = {
    0: 0
  }

  const startIndex = 0;
  const startIndexHistory = [];

  const routeCheck = () => {

  }
}


/*
new apporach

create a tracking varible (gasTank) that will estimate the total amount of gas in tank
this can be done by first adding amount of index[0] at each pump, and then subtracting amount of index[1]
this should keep a running balance of remaining gas at each pump.
  if gasTank is a positive number we should return true

  if it is a negative number
    take the startIndex and add it to the startIndexHistory and set startIndex to null.

create tracking variable (startIndex) the shows which index of the circle (input array) the current queue began on

create collection of startIndexes: if we have used start index and have not been able to effectively complete
and entire circle, the we should at that index to this collection. (have it removed from startIndex variable)

*** THIS NEEDS To RUN BEFORE approval of move to the next pump (pre-estimation)


########### Problem we need to iterate in a circular pattern (i.e. if we start and index 1
we need to go through array until all indexes checked or ending at index 0) ################

---------possible solution. once start variable is set, iterate through input unshifting each index,
then enqueing (pushing) that index to the back of the array until you have reached start point -------------

create a func (routeCheck) that takes in an array of pumps:
  iterate through array
    to find first pump available:
      check index[0] (amount of gas at pump) against index[1] (distance to next pump)
      clearly if the current pump doesnt give you enough gas to get to the next one you cant start.

      check if index is not in startIndexHistory
        set start index

    once you have identified a pump that can take you to the subsequent pump (i.e. index[0] > index[1])

    *you should start adding to the queue each pump.

    run gas check
      push pump into queue


after itration recursively call function until queue's length is equal to three
*/
