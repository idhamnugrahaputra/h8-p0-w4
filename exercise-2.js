function fpb(angka1, angka2) {
  var factorAngka1 = []
  var factorAngka2 = []
  var result = []
  for (var i = 1; i <= angka1; i++) {
    if (angka1 % i == 0) {
      factorAngka1.push(i)
    }
  }
  for (var j = 1; j <= angka2; j++) {
    if (angka2 % j == 0) {
      factorAngka2.push(j)
    }
  }
  for (var k = 0; k < factorAngka1.length; k++) {
    for (var m = 0; m < factorAngka2.length; m++) {
      if (factorAngka1[k] == factorAngka2[m]) {
        result.push(factorAngka1[k])
      }
    }
  }
  return Math.max(...result)
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
