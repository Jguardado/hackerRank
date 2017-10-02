/*
Given an array of integers, return indices of the two numbers such that
they add up to a specific target. You may assume that each input would have
exactly one solution, and you may not use the same element twice.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const origin = nums.slice();
  const sorted = nums.sort((a, b) => b - a);
  let addSum1;
  let addSum2;

  while (sorted.length >= 1) {
    for (let i = 0; i < sorted.length; i++) {
      if (sorted[0] > target) {
        sorted.shift();
      }

      if (sorted[0] + sorted[i] === target) {
        addSum1 = sorted[0];
        addSum2 = sorted[i];
      }
    }

    if (!addSum1 && !addSum2) {
      sorted.shift();
    } else {
      break;
    }
  }

  // Only sorted this because it appears that the result wanted to be in a specifc order,
  // not outlined in the instructions
  return [origin.indexOf(addSum1), origin.indexOf(addSum2)].sort((a, b) => b - a);
};

console.log('these are the results: ', twoSum([2, 5, 6, 4, 11, 15], 9));
/*
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/
