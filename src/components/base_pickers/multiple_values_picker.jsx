import React from 'react'

import StatelessCheckbox from './../base_form_elements/stateless_checkbox.jsx'

export default function MultipleValuesPicker(props) {

	var { values, selectedValues } = props

	function setParentState(nextValues) {
		props.setParentStateByKey(props.valuesKey, nextValues)
	}

	return (
		<div style={{ margin: '30px 0' }}>
			<h1>{ props.prompt }</h1>
			<StatelessCheckbox
				values={values}
				selectedValues={selectedValues}
				sendUpdateToParent={setParentState}
			/>
		</div>
	)

}