function solution(string) {
  const newString = string.split('');
  const addSpaceAtIndex = [];
  newString.forEach((letter, i) => {
    if (letter === letter.toUpperCase()) {
      addSpaceAtIndex.push(i);
    }
  });

  while (addSpaceAtIndex.length > 0) {
    newString.splice(addSpaceAtIndex[addSpaceAtIndex.length - 1], 0, ' ');
    addSpaceAtIndex.pop();
  }
  return newString.join('');
}

solution('camelCasingKeepItCool'); // => should return 'camel Casing'
