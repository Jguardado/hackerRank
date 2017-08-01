function generateHashtag(str) {
  let parsedString = str.split(' ');
  parsedString =
    parsedString
      .filter(word => word[0])
      .map(word => word.replace(word[0], word[0].toUpperCase()))
      .join('');
  const hashtag = `#${parsedString}`;
  return hashtag.length > 140 || parsedString.length < 1 ? false : hashtag;
}

// NOTE: Tests:

// console.log(generateHashtag('Is it friday yet'));
// generateHashtag('gotta love squat day');
// console.log(generateHashtag(' '));
