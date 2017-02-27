function myUniq(array) {
  // return array of unique elements
  let result = [];
  array.forEach( (el) => {
    if (result.includes(el) === false) {
      result.push(el);
    }
  });
  return result;
}

// console.log(myUniq([1, 2, 1, 3, 3]))

function twoSum(array) {
  // returns pairs of positions where elements sum to 0
  let result = [];
  let i = 0;
  while (i < array.length) {
    let j = i + 1;
    while (j < array.length) {
      console.log(`this is i: ${i}`);
      console.log(`this is j: ${j}`);
      if (array[i] + array[j] === 0) {
        result.push([i, j]);
      }
      j++;
    }
    i++;
  }
  return result;
}

// console.log(twoSum([-1, 0, 2, -2, 1]))

Array.prototype.myTranspose = function(){
  let result = [];
  this.forEach( (row) => {
    result.push(new Array(this.length));
  });
  let i = 0;
  this.forEach( (subarray) => {
    let j = 0;
    subarray.forEach( (el) => {
      result[j][i] = this[i][j];
      j++;
    });
    i++;
  });
  return result;
};

// console.log([
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8]
//   ].myTranspose())
//Enumerable exercises

Array.prototype.myEach = function(cb){
  for (let i = 0; i < this.length; i++){
    cb(this[i]);
  }
  return this;
};

// console.log([1,2,3].myEach((el) => {
//   el = el + 2;
//   return el
// }));


Array.prototype.myMap = function(cb){
  let result = [];
  this.myEach( (el) => {
    result.push(cb(el));
  });

  return result;
};

// console.log([1,2,3].myMap((el) => {
//   el = el + 2;
//   return el
// }));

Array.prototype.myInject = function(cb) {
  let accum = this[0];
  let subarray = this.slice(1);
  subarray.myEach( (el) => {
    accum = cb(accum, el);
  });
  return accum;
};

// console.log([1,2,3].myInject((accum, el) => {
//   return accum * el;
// }));

// iteration exercises

function bubbleSort(array) {
  let lastIndex = array.length - 1;
  let i = 0;
  while (i < lastIndex){
    let j = i + 1;
    while (j <= lastIndex){
      if (array[i] > array[j]) {
        let x = array[i];
        array[i] = array[j];
        array[j] = x;
      }
      i++;
      j++;
    }
  i = 0;
  lastIndex--;
  }
  return array;
}

// console.log(bubbleSort([3,4,1,7,8,2]));

function subStrings(string){
  let i = 0;
  let result = [];
  while (i < string.length){
    let j = i + 1;
    let sub = string[i];
    result.push(sub);
    while (j < string.length){
      sub += string[j];
      result.push(sub);
      j++;
    }
    i++;
  }
  return result;
}

// console.log(subStrings("cat"));

// recursion
function range(start, end) {
  // return an array of all numbers between
  if (end < start) { return []; }
  if (end === start) { return [end];}
  return [start].concat(range((start + 1), end));
}

// console.log(range(1,5));

function recursiveSum(array){
  if (array.length === 1) { return array[0]; }
  return array[0] + recursiveSum(array.slice(1));
}

// console.log(recursiveSum([1,2,3,4,5]));

function iterativeSum(array) {
  return array.myInject( (accum, el) => {
    return accum + el;
  });
}

function iterativeSum2(array){
  let sum = 0;
  let i = 0;
  while (i < array.length){
    sum += array[i];
    i++;
  }
  return sum;
}
// console.log(iterativeSum([1,2,3,4,5]));

function exponentiation1(base, exp){
  if (exp === 0) { return 1; }
  return base * exponentiation1(base, (exp - 1));
}

// console.log(exponentiation1(2, 3));

function exp2(base, exp){
  if (exp === 0) { return 1; }
  // if (exp === 1) { return base; }

  if (exp % 2 === 0) {
    return exp2(base, (exp / 2)) * exp2(base, (exp / 2));
  } else {
    return base * (exp2(base, (exp - 1) / 2)) * ((exp2(base, (exp - 1) / 2)));
  }
}

console.log(exp2(2,3));
