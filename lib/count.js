'use strict'

const count = function (array, callback) {
  let result = 0
  // array.forEach((e, i, a) => { if (callback(e, i, a)) { result++ } })
  // the long way ^
  return array.filter(callback).length
  return result
}
module.exports = count
