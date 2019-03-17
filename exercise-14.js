function naikAngkot(arrPenumpang) {
  let output = []
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  for(let a of arrPenumpang){
    // console.log(a)
    let obj = {
      "penumpang": a[0],
      "naikDari": a[1],
      "tujuan": a[2],
      "bayar": 0
    }
    let bayar = rute.indexOf(obj.tujuan) - rute.indexOf(obj.naikDari)
    obj.bayar = bayar * 2000

    // console.log(obj);
    output.push(obj)
  }

  return output
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

// console.log(naikAngkot([])); //[]
