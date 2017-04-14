/*

Given a string of digits, return all of the possible letter combinations that the number
could represent. The mapping of digits to letters is the same as you would find on a
telephone's buttons, as in the example below:

The resulting array should be sorted lexicographically.

Example

For buttons = "42", the output should be
pressingButtons(buttons) = ["ga", "gb", "gc", "ha", "hb", "hc", "ia", "ib", "ic"].

Input/Output

[time limit] 4000ms (js)
[input] string buttons

A string composed of digits ranging from '2' to '9'.

Guaranteed constraints:

0 ≤ buttons.length ≤ 7.

[output] array.string

*/

function pressingButtons(buttons) {
  console.log("input: ", buttons);
  const digits = buttons.split('')

  const alpha = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz"
  };

  console.log("input alpha: ", alpha[digits[0]]);

}


pressingButtons('42')
