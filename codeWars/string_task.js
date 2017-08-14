// NOTE: Should always remeber with injecting items into a string
// you can use .replace()

/*
function stringTask(string) {
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
    y: true,
  };

  if (vowels[string.toLowerCase()]) {
    return null;
  }

  return string
    .split('')
    .filter(char => !vowels[char.toLowerCase()])
    .map(char => ['.', char])
    .reduce((acc, item) => acc.concat(item))
    .map(char => char.toLowerCase())
    .join('');
}

stringTask('a');
*/

const stringTask = (string) => {
  return string
    .toLowerCase()
    .replace(/(a|e|i|o|u|y)/gi, '')
    // I would still like to learn more about this one
    .replace(/./g, '.$&');
  console.log('test: ', test);
};

stringTask('Codewars');
