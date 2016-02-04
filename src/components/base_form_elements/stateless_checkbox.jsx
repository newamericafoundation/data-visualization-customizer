import React from 'react'
import { PropTypes } from 'react'
import { MenuItem, Checkbox } from 'material-ui'

function StatelessCheckbox(props) {

	var { values, selectedValues } = props

	function isValueSelected(value) {
		var index = selectedValues.indexOf(value)
		return (index > -1)
	}

	function handleChange(value) {
		var nextSelectedValues
		var index = selectedValues.indexOf(value)
		if (index > -1) {
			nextSelectedValues = [ ...selectedValues.slice(0, index), ...selectedValues.slice(index + 1) ]
		} else {
			nextSelectedValues = [ ...selectedValues, value ]
		}
		props.sendUpdateToParent(nextSelectedValues)
	}

	var list = values.map((value, i) => {
		return <Checkbox 
			key={i}
			checked={isValueSelected(value)}
			label={value}
			onCheck={ handleChange.bind(this, value) }
		/>
	})

	return (
		<div>
			{ list }
		</div>
	)

}

StatelessCheckbox.propTypes = {
	values: PropTypes.array.isRequired,
	selectedValues: PropTypes.array.isRequired
}

export default StatelessCheckbox