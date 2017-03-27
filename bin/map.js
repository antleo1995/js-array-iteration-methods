#!/usr/bin/env node
'use strict'

const examples = require('../lib/examples')
const map = require('../lib/map.js')

const workingArray = examples.numbers.fibonacci

const result = map(workingArray, (e, i, a) => e * 2)

console.log('map result', result)
