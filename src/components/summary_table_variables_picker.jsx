import React from 'react'

import StatelessCheckbox from './form_base/stateless_checkbox.jsx'

export default function SummaryTableVariablesPicker(props) {

	var { variables,  summaryTableVariables } = props

	function setParentState(nextValues) {
		props.setParentState({ summaryTableVariables: nextValues })
	}

	return (
		<div style={{ margin: '30px 0' }}>
			<h1>Pick summary table variables</h1>
			<StatelessCheckbox
				values={variables}
				selectedValues={summaryTableVariables}
				sendUpdateToParent={setParentState}
			/>
		</div>
	)

}