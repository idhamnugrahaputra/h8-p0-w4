function digitPerkalianMinimum(angka) {
  let tmp = []
  if(angka % 2 == 0) {
    for (var i = 1; i <= angka; i++) {
      for (var j = 1; j <= angka; j++) {
        let faktor = i * j
        if (faktor === angka) {
          let o = i + j
          if (o < (angka/2)) {
            tmp.push([i,j])
          }
        }
      }
    }
  } else {
    for (var i = -angka; i<=angka; i++) {
      for (var j = -angka; j <= angka; j++) {
        let faktor = i * j
        if (faktor === angka) {
          let o = i + j
          if (o < (angka/2)) {
            tmp.push([i,j])
          }
        }
      }
    }
  }
  console.log(tmp.length);
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
