function shoppingTime(memberId, money) {
  if (memberId == '' || arguments.length == 0) {
    return ('Mohon maaf, toko X hanya berlaku untuk member saja')
  }else if (money < 50000) {
    return ('Mohon maaf, uang tidak cukup')
  }else if (memberId == '' && money == '') {
    return ('Mohon maaf, toko X hanya berlaku untuk member saja')
  }
  var key = ['memberId', 'money', 'listPurchased','changeMoney']
  var obj = {'Sepatu Stacattu' : 1500000,
            'Baju Zoro' : 500000,
            'Baju H&N' : 250000,
            'Sweater Uniklooh' : 175000,
            'Casing Handphone' : 50000
            }
  var output ={}
  for (var i = 0; i < key.length; i++) {
    output[key[0]] = memberId
    output[key[1]] = money
    output[key[2]] = []
    output[key[3]] = 0
  }
  output[key[3]] = money
  for (var a in obj) {
    if (output[key[3]] >= obj[a]) {
      output[key[3]] = output[key[3]] - obj[a]
      output[key[2]].push(a)
    }
  }
  return output
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  // { memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
// console.log(shoppingTime('82Ku8Ma742', 170000));
// { memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
// console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
// console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
// console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
