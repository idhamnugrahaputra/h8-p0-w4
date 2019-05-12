function cariMedian(arr) {
  var result ;
  var length = arr.length
  if (length % 2 != 0) {
    tmp = Math.floor(length/2)
    result = arr[tmp]
  }
  if (length % 2 == 0) {
    tmp = Math.floor(length/2)
    result = ((arr[tmp] + arr[tmp-1]) / 2)
  }
  return result
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
