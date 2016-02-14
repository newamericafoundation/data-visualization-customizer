import React from 'react'
import { PropTypes } from 'react'
import { MenuItem, Checkbox } from 'material-ui'

import shiftElementInArray from './../../helpers/shift_element_in_array.js'

function StatelessCheckbox(props) {

	var { options, selectedOptions } = props

	function isOptionSelected(option) {
		var index = selectedOptions.indexOf(option)
		return (index > -1)
	}

	function handleChange(option) {
		var nextSelectedOptions
		var index = selectedOptions.indexOf(option)
		if (index > -1) {
			nextSelectedOptions = [ ...selectedOptions.slice(0, index), ...selectedOptions.slice(index + 1) ]
		} else {
			nextSelectedOptions = [ ...selectedOptions, option ]
		}
		console.log(nextSelectedOptions)
		props.sendUpdateToParent(nextSelectedOptions)
	}

	function handleReorder(option, i, delta) {

		var nextSelectedOptions = shiftElementInArray(selectedOptions, i, delta)
		console.log(selectedOptions, i, delta)
		console.log(nextSelectedOptions)
		props.sendUpdateToParent(nextSelectedOptions)
	}

	var list = options.map((option, i) => {
		return <Checkbox
			key={ i }
			checked={ isOptionSelected(option) }
			label={ option }
			onCheck={ handleChange.bind(this, option) }
		/>
	})

	var orderList = selectedOptions.map((option, i) => {
		var pStyle = { 'display': 'inline-block' }
		var divStyle = { 'display': 'inline-block', 'margin': '0 10px' }
		return (
			<div style={ divStyle } key={ i }>
				<p style={ pStyle } onClick={ handleReorder.bind(this, option, i, -1) }>{ '<--' }</p>
				<p style={ pStyle }>{ option }</p>
				<p style={ pStyle } onClick={ handleReorder.bind(this, option, i, +1) }>{ '-->' }</p>
			</div>
		)
	})

	return (
		<div>
			<div>
				<h2>Select variables</h2>
				{ list }
			</div>
			<div>
				<h2>Specify order</h2>
				{ orderList }
			</div>
		</div>
	)

}

StatelessCheckbox.propTypes = {
	options: PropTypes.array.isRequired,
	selectedOptions: PropTypes.array.isRequired
}

export default StatelessCheckbox
