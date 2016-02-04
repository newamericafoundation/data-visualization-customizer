import React from 'react'
import { SelectField, MenuItem } from 'material-ui'

import StatelessSelect from './../base_form_elements/stateless_select.jsx'

export default function SingleValuePicker(props) {

	function sendUpdateToParent(nextSelectedValue) {
		props.setParentStateByKey(props.valueKey, nextSelectedValue) 
	}

	return (
		<div style={{ margin: '30px 0' }}>
			<h1>{ props.prompt }</h1>
			<StatelessSelect
				values={props.values}
				selectedValue={props.selectedValue}
				sendUpdateToParent={sendUpdateToParent}
			/>
		</div>
	)

}