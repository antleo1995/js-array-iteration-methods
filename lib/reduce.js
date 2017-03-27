'use strict'

const reduce = function (originalArray, callback, initialValue) {
  // make a shallow copy(points to the same objects in memory) of the entire originalArray
  const workingArray = originalArray.slice()
  // save initialValueas previous value
  let previous = initialValue
  // if initialValue not passed as an argument
  if (arguments.length < 3) {
    // first element of the array becomes initial value
    previous = workingArray.shift()
  }
  //for every element
  workingArray.forEach(function (element, index, workingArray) {
    //call the callback, setting previous to its return value
    previous = callback(previous, element, index, originalArray)
  })

  return previous
}

module.exports = reduce
