function tukarBesarKecil(kalimat) {
  var output = ''
  for (var i = 0; i < kalimat.length; i++) {
    var numStr = kalimat.charCodeAt(i)
    if (numStr >= 65 && numStr <= 90) {
      newStr = String.fromCharCode(numStr + 32)
      output += newStr
    }else if (numStr >= 97 && numStr <= 122) {
      newStr = numStr - 32
      output += String.fromCharCode(newStr)
    }else {
      output += kalimat[i]
    }
  }
  return output;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
