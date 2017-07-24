const rot13 = (message) => {
  // your code here
  const splitWord = message.split('');
  const letterArr = [
    'a', 'b', 'c',
    'd', 'e', 'f',
    'g', 'h', 'i',
    'j', 'k', 'l',
    'm', 'n', 'o',
    'p', 'q', 'r',
    's', 't', 'u',
    'v', 'w', ' x',
    'y', 'z'];
  let encrypted = [];
  const capitalLetterIndex = {};
  const alphaIndex = (currentIndex) => {
    const newIndex = currentIndex + 13;
    if (newIndex <= 26) {
      return newIndex;
    }
    return newIndex - 26;
  };

  splitWord.forEach((letter, letterIndex) => {
    letterArr.forEach((possibleMatch, i) => {
      if (letter === possibleMatch) {
        encrypted.push(letterArr[alphaIndex(i)]);
      } else if (letter.toLowerCase() === possibleMatch) {
        capitalLetterIndex[letterIndex] = true;
      }
    });
  });

  if (Object.keys(capitalLetterIndex)) {
    encrypted = encrypted.map((letter, i) => {
      if (capitalLetterIndex[i]) {
        console.log('going trhough capp', i);
        return letter.toUpperCase();
      }
      return letter;
    });
  }
  console.log('capitalLetterIndex: ', capitalLetterIndex);
  console.log('encrypted: ', encrypted.join(''));
  return encrypted;
};

rot13('Test');
