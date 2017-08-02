// NOTE: I should explore using .substring() and .trim() as well as play around with
// regex

function solution(input, markers) {
  const dividedinput = input.split('\n');
  const cleanComment = (currentComment) => {
    const nonComment = currentComment.split('');
    let sliceIndex;
    let commentWithSpace;
    nonComment.forEach((char, i) => {
      if (char === markers[0] || char === markers[1]) {
        sliceIndex = i;
      }
    });
    if (sliceIndex) {
      commentWithSpace = nonComment.slice(0, sliceIndex);
      while (commentWithSpace[commentWithSpace.length - 1] === ' ') {
        commentWithSpace.pop();
      }
      return commentWithSpace.join('');
    }
    return nonComment.join('');
  };
  return dividedinput.map((currentInput, i) => {
    if (i !== dividedinput.length - 1) {
      return `${cleanComment(currentInput)}\n`;
    }
    return cleanComment(currentInput);
  }).join('');
}

solution('apples, pears # and bananas', ['#', '!']);
// console.log('apples, pears # and bananas grapes bananas !apples'.length);
// solution('bananas !apples', ['#', '!']);
/*
example string:
apples, pears # and bananas
grapes
bananas !apples

example output:
apples, pears
grapes
bananas
*/
