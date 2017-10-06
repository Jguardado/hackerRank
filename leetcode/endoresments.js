const Foo = function (a) {
  this.a = a;
  this.bar = function () {
    return this.a;
  };

  this.baz = function () {
    return this.a;
  };
};

Foo.prototype = {
  biz() {
    return this.a;
  },
};

const f = new Foo(7);
console.log(f.bar());// error
console.log(f.baz()); // 7
console.log(f.biz()); // error


// Given
const endorsements = [
  { skill: 'css', user: 'Bill' },
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'html', user: 'Sue' },
];

// Result
// const results = [
//   { skill: 'javascript', user: ['Chad', 'Bill', 'Sue'], count: 3 },
//   { skill: 'css', user: ['Sue', 'Bill'], count: 2 },
//   { skill: 'html', user: ['Sue'], count: 1 },
// ];

// NOTE: example of storageObj
// const storage = {
//   css: {
//     users: ['bill', 'sue'],
//   },
//   html: {
//     user: ['sue'],
//   },
// };

function formatEndorsements(endorsements) {
  const storageObj = {};
  const result = [];
  endorsements.forEach((userObj) => {
    if (storageObj[userObj.skill]) {
      storageObj[userObj.skill].user.push(userObj.user);
    } else {
      storageObj[userObj.skill] = {
        user: [userObj.user],
      };
    }
  });

  for (const key in storageObj) {
    const obj = {};
    obj.skill = key;
    obj.user = storageObj[key].user;
    obj.count = storageObj[key].user.length;

    result.push(obj);
  }

  return result.sort((a, b) => a.count - b.count);
}


formatEndorsements(endorsements);
