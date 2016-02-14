import 'babel-polyfill'

import assert from 'assert'

import shiftElementInArray from './../shift_element_in_array.js'

describe('shiftElementInArray', () => {

  it('shifts to the left - 2-member array', () => {
    assert.deepEqual(shiftElementInArray([ 1, 2 ], 0, +1), [ 2, 1 ])
  })

  it('shifts to the left', () => {
    assert.deepEqual(shiftElementInArray([ 1, 2, 3, 4 ], 1, -1), [ 1, 3, 2, 4 ])
  })

  it('shifts to the right', () => {
    assert.deepEqual(shiftElementInArray([ 1, 2, 3, 4 ], 1, +1), [ 2, 1, 3, 4 ])
  })

  it('returns clone of the array if the first element is shifted to the left', () => {
    assert.deepEqual(shiftElementInArray([ 1, 2, 3, 4 ], 0, -1), [ 1, 2, 3, 4 ])
  })

  it('returns clone of the array if the last element is shifted to the right', () => {
    assert.deepEqual(shiftElementInArray([ 1, 2, 3, 4 ], 3, +1), [ 1, 2, 3, 4 ])
  })

})
