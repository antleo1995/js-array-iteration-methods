#!/usr/bin/env node
'use strict'

const examples = require('../lib/examples')
const reduce = require('../lib/reduce.js')

const workingArray = examples.numbers.whole
// returns the greatest value in the array
const result = reduce(workingArray, (p, c, i, a) => p > c ? p : c)

console.log('reduce result', result)
