/*
Given an integer, convert it to a roman numeral.

Input is guaranteed to be within the range from 1 to 3999.

1- 10
I, II, III, IV, V, VI, VII, VIII, IX, X

10 - 100
X, XX, XXX, XL, L, LX, LXX, LXXX, XC, C

100 - 1000
C, CC, CCC, CD, D, DC, DCC, DCCC, CM, M

*/

/**
 * @param {number} num
 * @return {string}
 
 **************** IN PROGRESS **************
 */
const intToRoman = (num, romanNum) => {
  if (romanNum === undefined) {
    romanNum = [];
  }

  const handleGreaterThan1000 = (num) => {
    // since the number can not be greater than 3999 we donet need to adjust for 1000's
    const times = Number(num);
    console.log('times: ', times);
    for (let i = 1; i <= times; i++) {
      romanNum.push('M');
    }
  };

  const convertNum = num => num.toString().split('');

  if (num / 1000 >= 1) {
    const temp = convertNum(num);
    handleGreaterThan1000(temp[0]);
    temp.shift();
    num = Number(temp.join(''));
    intToRoman(num, romanNum);
  } else if ((num / 100) >= 1) {
    console.log('divisable by 100: ', convertNum(num));
  } else if (num / 10 >= 1) {
    console.log('divisable by 10', convertNum(num));
  }

  console.log('romanNum: ', romanNum);
};

intToRoman(3022);
