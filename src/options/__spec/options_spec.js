import 'babel-polyfill'

import assert from 'assert'

import { setDefaultOptions } from './../index.js'

describe('setDefaultOptions', () => {

	it('sets default static option', () => {
		var options = setDefaultOptions({}, [ 'var1', 'var2' ])
		assert.equal(options.mapType, 'pindrop')
	})

	it('sets existing static option', () => {
		var options = setDefaultOptions({ mapType: 'heatmap' }, [ 'var1', 'var2' ])
		assert.equal(options.mapType, 'heatmap')
	})

	it('resets existing static option if not in the list of static options', () => {
		var options = setDefaultOptions({ mapType: 'heatmapzz' }, [ 'var1', 'var2' ])
		assert.equal(options.mapType, 'pindrop')
	})

	it('sets default variable option', () => {
		var options = setDefaultOptions({}, [ 'var1', 'var2' ])
		assert.equal(options.mainVariable, 'var1')
	})

	it('sets multiple default variable option', () => {
		var options = setDefaultOptions({}, [ 'var1', 'var2' ])
		assert.deepEqual(options.filterVariables, [])
	})

})
