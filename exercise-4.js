var obj = {}
function cariModus(arr) {
  //cara 1
  // let res = arr.filter((val) => arr.indexOf(val) != arr.lastIndexOf(val))
  // if(res.length == arr.length || res.length == 0) {
  //   return -1
  // }
  // return res[0]


 //cara 2
  let tmp = []
  for(let val of arr) {
    if(arr.indexOf(val) != arr.lastIndexOf(val)) {
      tmp.push(val)
      console.log(val);
    }
  }

  // if(tmp.length == arr.length || tmp.length == 0) {
  //   return -1
  // } else {
  //   return tmp[0]
  // }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
// console.log(cariModus([5, 10, 10, 6, 5])); // 5
// console.log(cariModus([10, 3, 1, 2, 5])); // -1
// console.log(cariModus([1, 2, 3, 3, 4])); // 3
// console.log(cariModus([7, 7, 7, 7, 7])); // -1
