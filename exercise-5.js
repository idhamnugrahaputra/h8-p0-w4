function ubahHuruf(kata) {
  var output = ''
  for (var i = 0; i < kata.length; i++) {
    tmp = kata[i].charCodeAt()
    if (tmp == 122) {
      output += String.fromCharCode(97)
    }else if (tmp == 90) {
      output += String.fromCharCode(65)
    }else {
      output += String.fromCharCode(tmp + 1)
    }
  }
  return output
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
