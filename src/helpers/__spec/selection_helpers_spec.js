import 'babel-polyfill'

import assert from 'assert'

import { getSelectedOption, getSelectedOptions } from './../selection_helpers.js'

describe('getSelectedOption', () => {

	it('defaults to first option if no previous option is specified', () => {
		var selectedOption = getSelectedOption([ 'opt1', 'opt2' ], null)
		assert.equal(selectedOption, 'opt1')
	})

	it('defaults to first option if the previous option is not in the list of all options', () => {
		var selectedOption = getSelectedOption([ 'opt1', 'opt2' ], 'opt3')
		assert.equal(selectedOption, 'opt1')
	})

	it('otherwise, return previous option', () => {
		var selectedOption = getSelectedOption([ 'opt1', 'opt2' ], 'opt2')
		assert.equal(selectedOption, 'opt2')
	})

})

describe('getSelectedOptions', () => {

	it('defaults to empty array if no previous option is specified', () => {
		var selectedOptions = getSelectedOptions([ 'opt1', 'opt2' ], null)
		assert.deepEqual(selectedOptions, [])
	})

	it('takes out values that are not in the list of all options', () => {
		var selectedOptions = getSelectedOptions([ 'opt1', 'opt2' ], [ 'opt3', 'opt1' ])
		assert.deepEqual(selectedOptions, [ 'opt1' ])
	})

	it('otherwise, return previous options', () => {
		var selectedOptions = getSelectedOptions([ 'opt1', 'opt2' ], [ 'opt2' ])
		assert.deepEqual(selectedOptions, [ 'opt2' ])
	})

})
