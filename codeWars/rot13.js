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
  const encrypted = [];
  const alphaIndex = (currentIndex) => {
    const newIndex = currentIndex + 13;
    if (newIndex <= 26) {
      return newIndex;
    }
    return newIndex - 26;
  };

  splitWord.forEach((letter) => {
    letterArr.forEach((possibleMatch, i) => {
      if (letter === possibleMatch) {
        encrypted.push(letterArr[alphaIndex(i)]);
      }
    });
  });
  console.log('encrypted: ', encrypted.join(''));
  return encrypted;
};

rot13('test');
