function fpb(angka1, angka2) {
  var tmp1 = []
  var tmp2 = []

  for (let i = 1; i <= angka1; i++) {
    for (let j = 1; j <= angka1;j++) {
      let faktor1 = i*j
      if (faktor1 == angka1) {
        tmp1.push(i)
      }
    }
  }

  for (let i = 1; i <= angka2; i++) {
    for (let j = 1; j <= angka2; j++) {
      let faktor2 = i*j
      if (faktor2 == angka2) {
        tmp2.push(i)
      }
    }
  }

  let output = []
  for (let a of tmp1) {// for of adlah melooping isi dri nilai suatu variable oatau let 
    for (let b of tmp2) {
      if (a === b) {
        output.push(a)
      }
    }
  }
  return Math.max(...output)
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
