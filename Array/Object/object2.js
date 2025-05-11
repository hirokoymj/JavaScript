// Q1
const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};

const obj2 = {
  d: 1,
  e: 2,
  f: 3,
};

const obj3 = {
  d: 1,
  e: 2,
  f: 4,
};

diff(obj1, obj2); // RETURNS true
diff(obj1, obj3); // RETURNS false

// Answer
const diff = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  var result = "";

  const result = keys.reduce((acc, currentValue) => {
    keys.map((value) => {
      if (obj1[currentValue] === obj2[value]) {
        acc = true;
      } else {
        acc = false;
      }
    });
    return acc;
  }, acc);
  return result;
};
