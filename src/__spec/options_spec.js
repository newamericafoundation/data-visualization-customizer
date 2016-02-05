import 'babel-polyfill'

import assert from 'assert'

import { getSelectedOption, getSelectedOptions, updateOptions } from './../options.js'

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

describe('getOptions', () => {

	it('sets default static option', () => {
		var options = updateOptions({}, [ 'var1', 'var2' ])
		assert.equal(options.mapType, 'pindrop')
	})

	it('sets existing static option', () => {
		var options = updateOptions({ mapType: 'heatmap' }, [ 'var1', 'var2' ])
		assert.equal(options.mapType, 'heatmap')
	})

	it('resets existing static option if not in the list of static options', () => {
		var options = updateOptions({ mapType: 'heatmapzz' }, [ 'var1', 'var2' ])
		assert.equal(options.mapType, 'pindrop')
	})

	it('sets default variable option', () => {
		var options = updateOptions({}, [ 'var1', 'var2' ])
		assert.equal(options.mainVariable, 'var1')
	})

	it('sets multiple default variable option', () => {
		var options = updateOptions({}, [ 'var1', 'var2' ])
		assert.deepEqual(options.filterVariables, [])
	})

})