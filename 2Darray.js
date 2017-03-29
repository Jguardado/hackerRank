var test = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

function main(arr) {
  var placeHolder = {
    a: 0,
    b: 1,
    c: 2,
  };

  var longRow = function (array) {
    var cache = [];
    for (var i = 2; i < array.length; i++) {
      cache.push([array[i - 2], array[i - 1], array[i]]);
    }

    return cache;
  };

  var middleRow = function (array) {
    var cache = [];
    for (var i = 2; i < array.length; i++) {
      cache.push([array[i - 1]]);
    }

    return cache;
  };

  var top = [];
  var mid = [];
  var bottom = [];

  while (placeHolder.c <= 5) {
    top.push(longRow(arr[placeHolder.a++]));
    mid.push(middleRow(arr[placeHolder.b++]));
    bottom.push(longRow(arr[placeHolder.c++]));
  };

  var flatten = function (array) {
    var results = 0;
    var subRoutine = function (nested) {
      for (var i = 0; i < nested.length; i++) {
        if (Array.isArray(nested[i])) {
          flatten(nested[i]);
        } else {
          // console.log('flatten?: ', nested[i]);
          results += nested[i];
        }
      }
    };

    subRoutine(array);
    console.log('results after the fact', results);
    return results;
  };

  for (var i = 2; i < 4; i++) {

    console.log('test: ', top[i][0], 'i ', i);
  }

  var fuck = [];
  // fuck.push(flatten(top[0]), flatten(mid[0]), flatten(bottom[0]));
  console.log('the fuck', fuck);
};

main(test);
