function countPositivesSumNegatives(input) {

  let res = []
  let pos = []
  let neg = []

  if (input == null || input.length == 0) {
    return res
  }

  for (let i = 0; i < input.length; i++) {


    if (input[i] > 0) {
      pos.push(input[i])

    } else if (input[i] < 0) {
      neg.push(input[i])
    }
  }

  var sum = neg.reduce(add, 0);

  function add(a, b) {
    return a + b;
  }
    if (pos.length > 0) {

    var count = pos.length
    res = [count, sum]
    return res
   }
