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

  const route = [];

  // LOL not working yet because the values are string smh
  pumps.forEach((pump, indexPos) => {
    console.log("BC: ", pump[0], pump[1]);
    if(pump[0] > pump[1]) {
      console.log("FC: ", pump[0], pump[1]);
      route.push([pump, indexPos])
    }

    if(pump[0] == pump[1]) {
      console.log("SC: ", pump[0], pump[1]);
      route.push([pump, indexPos])
    }

    // route.push([pump, indexPos])
  })
  console.log("routes: ", route);


}

petrolPump(HRinput)
