const lengthOfLongestSubstring = (str) => {
  let letters = {};
  let longestSub = '';
  let startIndex = 0;

  const stringCheck = (strToCheck) => {
    for (let index = 0; index < strToCheck.length; index++) {
      if (letters[strToCheck[index]] || index === strToCheck.length - 1) {
        const possibleLongest = strToCheck.substring(startIndex, index - 1);
        if (possibleLongest > longestSub) {
          longestSub = possibleLongest;
          startIndex = index;
        }

        if (index !== strToCheck.length - 1) {
          letters = {};
          letters[strToCheck[index]] = true;
        }

        if (index === strToCheck.length - 1) {
          return;
        }
      } else {
        letters[strToCheck[index]] = true;
      }
    }

    const newString = strToCheck.substring(1, strToCheck.length - 1);
    stringCheck(newString);
  };

  stringCheck(str);
  return longestSub;
};

// const testString = 'abcabcbb';
const testString2 = 'pwwkew'; // NOT WORKING For this solution

console.log(lengthOfLongestSubstring(testString2));

/*
General idea, iterate over string, adding each letter to storage object. Once an index is found that already exists
grab the substring of start index till end and store in a variable as longest substring.

In order to adjust for the potential that a substrng would be longer given the we do not
start iterating at index 0, we must shift off first index once our substring ends (or we reach a
duplicate character).

Concern:
Do we need to continue iterating through string to find additional substrings.
say `abacdesa`. I believe so.

we'll need to change longest substring vaeriable once a longer string i found.

I cant think of how to do this wothout recursion.
*/
