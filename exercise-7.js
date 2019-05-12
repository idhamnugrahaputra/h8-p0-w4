function urutkanAbjad(str) {
  var newArr=[]
  for (var i = 0; i < str.length; i++) {
    newArr.push(str[i])
  }

  for (var j = 0; j < newArr.length-1 ; j++) {
    if (newArr[j] > newArr[j+1]) {
      var tmp = newArr[j+1]
      newArr[j+1]=newArr[j]
      newArr[j]=tmp
      j = -1
    }
  }
  return newArr.join('')
}

// TEST CASES)
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
