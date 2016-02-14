import React from 'react'
import { PropTypes } from 'react'
import { SelectField, MenuItem } from 'material-ui'

function StatelessSelect(props) {

	var { options, selectedOption } = props

	function handleChange(event, index, value) {
		props.sendUpdateToParent(value)
	}

	var list = options.map((option, i) => {
		return (
			<MenuItem
				key={i}
				value={option}
				primaryText={option}
			/>
		)
	})

	return (
		<div>
			<SelectField value={ selectedOption } onChange={handleChange} >
				{ list }
			</SelectField>
		</div>
	)

}

StatelessSelect.propTypes = {
	options: PropTypes.array.isRequired
}

export default StatelessSelect
