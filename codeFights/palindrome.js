function checkPalindrome(inputString) {
  var forward = inputString.split('');
  var backward = inputString.split('').reverse();
  var match = true;

  forward.forEach((letter, index) => {
    if(letter !== backward[index]) {
      return match = false
    }
  })

  return match
}


checkPalindrome("aabbaa")
