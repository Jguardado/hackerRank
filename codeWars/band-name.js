// add The and capitalize
// if Frist and last letter same then repeat rest of string.

function bandNameGenerator(str) {
  // Happy coding
  let name = str.split('');
  name[0] = name[0].toUpperCase();

  if (str[0] === str[str.length - 1]) {
    name.forEach((letter, i) => {
      if (i > 0) {
        name.push(letter);
      }
    });
    name = name.join('');
    return name;
  }
  name = name.join('');
  return `The ${name}`;
}

// bandNameGenerator('knife');
// 'The Knife'
bandNameGenerator('tart');
// 'Tartart'
