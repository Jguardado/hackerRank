var sampleArray = [3, 6, -2, -5, 7, 3]

function adjacentElementsProduct(inputArray) {
  var highestProduct = 0;

  inputArray.forEach((elem, i) => {
    if(i === 0) {
      return
    }

    const product = elem * inputArray[i - 1];

    if(product > highestProduct) {
      highestProduct = product
    }
  })

  return highestProduct
}


adjacentElementsProduct(sampleArray)
