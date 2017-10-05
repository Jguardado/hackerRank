/*

You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order and each of their nodes contain a single digit.
Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const addTwoNumbers = function (l1, l2) {
  const firstList = [];
  const secondList = [];
  var flattenNodeList = function (list, storage) {
    if (list.val) {
      storage.push(list.val);
    }

    if (list.next) {
      flattenNodeList(list.next, storage);
    }
  };

  flattenNodeList(l1, firstList);
  flattenNodeList(l2, secondList);

  let sum = Number(firstList.reverse().join('')) + Number(secondList.reverse().join(''));
  sum = sum.toString().split('').reverse();
  sum = sum.map(digit => Number(digit));

  return sum;
};

addTwoNumbers(test1, test2);


var test1 = { val: 2, next: { val: 4, next: { val: 3, next: null } } };
var test2 = { val: 5, next: { val: 6, next: { val: 4, next: null } } };
// NOTE: I thought this wa sthe solution but I didnt understand the question correctly, base don the example given

const oldAddTwoNumbers = function (l1, l2) {
  const ListNode = function (val) {
    this.val = val;
    this.next = null;
  };

  const listGenerator = function (arr) {
    const node = new ListNode(arr.shift());
    var generate = function (existingList, arr) {
      if (arr.length) {
        const currentVal = arr.shift();
        if (existingList) {
          existingList.next = new ListNode(currentVal);
          generate(existingList.next, arr);
        }
      }
    };
    generate(node, arr);
    return node;
  };

  const firstList = listGenerator(l1);
  const secondList = listGenerator(l2);

  const summedList = new ListNode(firstList.val + secondList.val);
  var addRemainingValues = function (currentList, oldList1, oldList2) {
    if (oldList1.next && oldList2.next) {
      const sum = oldList1.next.val + oldList2.next.val;
      currentList.next = new ListNode(sum);
      addRemainingValues(currentList.next, oldList1.next, oldList2.next);
    }
  };

  addRemainingValues(summedList, firstList, secondList);

  const flattenedList = [];
  var flattenNodeList = function (list) {
    if (list.val) {
      flattenedList.push(list.val);
    }

    if (list.next) {
      flattenNodeList(list.next);
    }
  };

  flattenNodeList(summedList);
  return flattenedList;
};


// addTwoNumbers([2,3,4], [4,5,6])
