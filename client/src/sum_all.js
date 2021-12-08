/**
 * Returns the sum of all the arguments passed
 * @param {...number} numbersToSum
 **/
function sumAll(...numbersToSum) {
  return numbersToSum.reduce((numberOne, numberTwo) => {
    return numberOne + numberTwo
  }, 0)
}

/**
 * Adds the first argument to all the following arguments
 * after which the sum of all but the first argument are returned
 * @param {number}    numberToAdd
 * @param {...number} numbersToSum
 **/
function addFirstArgumentToRestThenSumTheRest(numberToAdd, ...numbers) {
  // teller moet bij 0 beginnen
  for (var i = 1; i < numbers.length; i++) {
    numbers[i] = numbers[i] + numberToAdd
  }
  return sumAll(...numbers)
}

export { sumAll, addFirstArgumentToRestThenSumTheRest }
