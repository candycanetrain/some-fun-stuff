function myUniq(array) {
  // return array of unique elements
  let result = [];
  array.forEach( (el) => {
    if (result.includes(el) === false) {
      result.push(el)
    }
  })
  return result;
}

// console.log(myUniq([1, 2, 1, 3, 3]))

function twoSum(array) {
  // returns pairs of positions where elements sum to 0
  let result = [];
  let i = 0
  while (i < array.length) {
    let j = i + 1
    while (j < array.length) {
      console.log(`this is i: ${i}`)
      console.log(`this is j: ${j}`)
      if (array[i] + array[j] === 0) {
        result.push([i, j])
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
  })
  let i = 0;
  this.forEach( (subarray) => {
    let j = 0;
    subarray.forEach( (el) => {
      result[j][i] = this[i][j];
      j++;
    })
    i++;
  })
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
    console.log(el)
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
    accum = cb(accum, el)
  });
  return accum;
}

console.log([1,2,3].myInject((accum, el) => {
  return accum * el
}))

// iteration exercises
