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
		props.sendUpdateToParent(nextSelectedOptions)
	}

	function handleReorder(option, i, delta) {
		var nextSelectedOptions = shiftElementInArray(selectedOptions, i, delta)
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
		var arrowStyle = { 'display': 'inline-block', 'cursor': 'pointer', 'margin': '0 5px', color: 'teal' }
		var pStyle = { 'display': 'inline-block' }
		var divStyle = { 'display': 'inline-block', 'margin': '0 15px' }

		var leftArrow = (i === 0 ) ? null : <p style={ arrowStyle } onClick={ handleReorder.bind(this, option, i, -1) }>{ '<--' }</p>
	var rightArrow = (i === selectedOptions.length - 1) ? null : <p style={ arrowStyle } onClick={ handleReorder.bind(this, option, i, +1) }>{ '-->' }</p>
		return (
			<div style={ divStyle } key={ i }>
				{ leftArrow }
				<p style={ pStyle }>{ option }</p>
				{ rightArrow }
			</div>
		)
	})

	var h2Style = { 'marginTop': '35px' }

	var orderBox = (selectedOptions && selectedOptions.length && selectedOptions.length > 1) ? (
		<div>
			<h2 style={ h2Style }>Specify order</h2>
			<p>Click on the left-right arrows to re-order your selection.</p>
			{ orderList }
		</div>
	) : null

	return (
		<div>
			<div>
				<h2 style={ h2Style }>Select variables</h2>
				{ list }
			</div>
			{ orderBox }
		</div>
	)

}

StatelessCheckbox.propTypes = {
	options: PropTypes.array.isRequired,
	selectedOptions: PropTypes.array.isRequired
}

export default StatelessCheckbox
