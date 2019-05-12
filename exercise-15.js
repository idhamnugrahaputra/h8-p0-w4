function highestScore (students) {
  var output = {}

  for (var x in students) {
    var Class = students[x].class
    if (output[Class] == undefined) {
      output[Class] = {name : students[x].name, score : students[x].score}
    }else {
      output[Class] = output[Class],{name : students[x].name, score : students[x].score}
    }
  }

  for (var x in output) {
    if (output.Class== 'foxes') {
      if (output[x].score > output[x+1].score) {
        output.Class = output[x]
      }else {
        output.Class = output[x+1]
      }
    }else if (output.Class == 'wolves') {
      if (output[x].score > output[x+1].score) {
        output.Class = output[x]
      }else {
        output.Class = output[x+1]
      }
    }else if (output.Class == 'tigers') {
      if (output[x].score > output[x+1].score) {
        output.Class = output[x]
      }else {
        output.Class = output[x+1]
      }
    }
  }
  return output
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


// console.log(highestScore([
//   {
//     name: 'Alexander',
//     score: 100,
//     class: 'foxes'
//   },
//   {
//     name: 'Alisa',
//     score: 76,
//     class: 'wolves'
//   },
//   {
//     name: 'Vladimir',
//     score: 92,
//     class: 'foxes'
//   },
//   {
//     name: 'Albert',
//     score: 71,
//     class: 'wolves'
//   },
//   {
//     name: 'Viktor',
//     score: 80,
//     class: 'tigers'
//   }
// ]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


// console.log(highestScore([])); //{}
