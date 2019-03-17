function cariMedian(arr) {
    if (arr.length % 2 !== 0) {
      let mid = Math.floor(arr.length / 2);
      return arr[mid]
    }

    if (arr.length % 2 === 0) {
      let a = arr.length / 2
      let kiri = arr[a-1]
      let kanan = arr[a]
      let output = (kiri + kanan) / 2
      return output
    }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
