function changeMe(arr) {
  let date = new Date()
  let year = date.getFullYear()
  let num = 1
  for (let a of arr) {
    let obj = {
      firstName: a[0] !== undefined ? a[0] : 'invalid firstName',
      lastName: a[1] !== undefined ? a[1] : 'invalid lastName',
      gender: a[2] !== undefined ? a[2] : 'invalid gender',
      age : a[3] !== undefined ? year - a[3] : 'invalid Birt Year'
    }
    console.log(num +'.'+a[0]+' '+a[1] + ' :');
    console.log(obj);
    num++
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
