import React from 'react'
import { SelectField, MenuItem } from 'material-ui'

export default function StatelessSelect(props) {

	function handleChange(event, index, value) {
		props.sendUpdateToParent(value) 
	}

	var list = props.values.map((value, i) => {
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
			<SelectField value={ props.selectedValue } onChange={handleChange} >
				{ list }
			</SelectField>
		</div>
	)

}