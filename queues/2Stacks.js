
const inputSplit = [];
inputSplit.push(input.split("\n"));
const newString = inputSplit.toString();
console.log('new string: ', newString);
const inputToArray = newString.split(',')
  console.log("input to array: ", inputToArray)
const parsedInput = [];
const queue = []

const enqueue = (value) => {
  queue.push(value)
}

const dequue = () => {
  queue.shift()
}

for( var i = 0; i < inputToArray.length; i++) {
  let temp = inputToArray[i].split(' ')
  console.log("this is temp: ", temp)
  if(temp.length > 1) {
    console.log("first conditional")
    enqueue(temp[1])
  }

  if(temp == '2') {
    console.log("second conditional")
    dequue()
  }

  if(temp == '3') {
    console.log("third conditional")
    console.log(queue[0])
  }
}
