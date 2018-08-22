'use strict'

const assert = require('assert')
const isIterableWith = require('is-iterable-with')
const map = require('.')

describe('map()', function () {
  it('should pass iterated values through a callback', function () {
    assert(isIterableWith(map([1, 2, 3], (x, i) => x + i), 1, 3, 5))
  })
})
