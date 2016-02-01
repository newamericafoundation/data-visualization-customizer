import React from 'react'
import { SelectField, MenuItem } from 'material-ui'

import StatelessSelect from './form_base/stateless_select.jsx'

export default function MainVariablePicker(props) {

	function sendUpdateToParent(nextSelectedValue) {
		props.setParentState({ mainVariable: nextSelectedValue }) 
	}

	return (
		<div style={{ margin: '30px 0' }}>
			<h1>Pick featured variable</h1>
			<StatelessSelect
				values={props.variables}
				selectedValue={props.mainVariable}
				sendUpdateToParent={sendUpdateToParent}
			/>
		</div>
	)

}