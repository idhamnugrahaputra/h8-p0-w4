function checkAB(num) {
  var indexA = []
  var indexB = []

  for (var i = 0; i < num.length; i++) {
    if (num[i] == 'a') {
      indexA.push(i)
    }
    if (num[i] == 'b') {
      indexB.push(i)
    }
  }
  if (indexA.length == 0 || indexB.length == 0) {
    return false
  }
  var hasil ;
  for (var j = 0; j < indexA.length; j++) {
    for (var k = 0; k < indexB.length; k++) {
      var jarak = Math.abs(indexA[j]-indexB[k])
      if (jarak == 4) {
        hasil = jarak
      }
    }
  }
  if (hasil == 4) {
    return true
  }else {
    return false
  }
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
