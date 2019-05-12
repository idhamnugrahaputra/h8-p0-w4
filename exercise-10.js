function changeMe(arr) {
  var year = 2019
  var num = 1
  for (var i = 0; i < arr.length; i++) {
    var obj = {
      firstName : arr[i][0],
      lastName : arr[i][1],
      gender : arr[i][2],
      age : arr[i][3]
    }
    if (obj.age != undefined) {
      obj.age = year - obj.age
    }else {
      obj.age = 'Invalid Birth Year'
    }
    console.log(num+'.'+' '+obj['firstName']+' '+obj['lastName']+':');
    console.log(obj);
    num++
  }
  if (arr.length == 0) {
    console.log('""');
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
