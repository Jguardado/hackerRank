const generateRandomTestData = (lengthOftestDataArr) => {
  const letters = ['a', 'g', 't', 'k', 'p'];
  const testData = [];

  // console.log('testing: ', Math.random());
  for (let i = 0; i < lengthOftestDataArr; i++) {
    const wordLength = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    const newWord = [];
    for (let k = 0; k <= wordLength; k++) {
      const letterIndex = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
      newWord.push(letters[letterIndex]);
    }
    testData.push(newWord.join(''));
  }
  return testData;
};

// console.log(generateRandomTestData(7));

const fakeFunc = (data) => {
  // function you've already defined
  console.log('data: ', data);
};

fakeFunc(generateRandomTestData(4));
fakeFunc(generateRandomTestData(3));
fakeFunc(generateRandomTestData(6));
fakeFunc(generateRandomTestData(9));
