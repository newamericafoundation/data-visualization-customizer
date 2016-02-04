import React from 'react'
import { PropTypes } from 'react'
import { SelectField, MenuItem } from 'material-ui'

function StatelessSelect(props) {

	var { values, selectedValue } = props

	function handleChange(event, index, value) {
		props.sendUpdateToParent(value) 
	}

	var list = values.map((value, i) => {
		return (
			<MenuItem 
				key={i} 
				value={value} 
				primaryText={value} 
			/>
		)
	})

	return (
		<div>
			<SelectField value={ selectedValue } onChange={handleChange} >
				{ list }
			</SelectField>
		</div>
	)

}

StatelessSelect.propTypes = {
	values: PropTypes.array.isRequired
}

export default StatelessSelect