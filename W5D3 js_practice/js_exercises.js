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

function myTranspose(array) {
  let result = [];
  array.forEach( (row) => {
    result.push(new Array(array.length))
  })
  let i = 0;
  array.forEach( (subarray) => {
    let j = 0;
    subarray.forEach( (el) => {
      result[j][i] = array[i][j]
      j++;
    })
    i++;
  })
  return result
}
// console.log(myTranspose([
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8]
//   ]
// ))
