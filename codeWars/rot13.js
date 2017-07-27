const rot13 = (message) => {
  const splitWord = message.split('');
  const letterArr = [
    'a', 'b', 'c',
    'd', 'e', 'f',
    'g', 'h', 'i',
    'j', 'k', 'l',
    'm', 'n', 'o',
    'p', 'q', 'r',
    's', 't', 'u',
    'v', 'w', 'x',
    'y', 'z'];
  let encrypted = [];
  const capitalLetterIndex = {};
  const alphaIndex = (currentIndex) => {
    const newIndex = currentIndex + 13;
    if (newIndex < 26) {
      return newIndex;
    }
    return newIndex - 26;
  };

  splitWord.forEach((letter, letterIndex) => {
    const regIt = /[a-zA-Z]/;
    if (regIt.exec(letter)) {
      letterArr.forEach((possibleMatch, i) => {
        if (letter === possibleMatch) {
          encrypted.push(letterArr[alphaIndex(i)]);
        } else if (letter.toLowerCase() === possibleMatch) {
          encrypted.push(letterArr[alphaIndex(i)]);
          capitalLetterIndex[letterIndex] = true;
        }
      });
    } else {
      encrypted.push(letter);
    }
  });

  if (Object.keys(capitalLetterIndex)) {
    encrypted = encrypted.map((letter, i) => {
      if (capitalLetterIndex[i]) {
        return letter.toUpperCase();
      }
      return letter;
    });
  }
  return encrypted.join('');
};

rot13('abcdefghijklmnopqrstuvwxyz ');
// Expected: nopqrstuvwxyzabcdefghijklm ,
