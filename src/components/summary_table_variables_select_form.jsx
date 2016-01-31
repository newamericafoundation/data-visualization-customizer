import React from 'react'
import { SelectField, MenuItem, Checkbox } from 'material-ui'

export default function SummaryTableVariablesSelectForm(props) {

	var { variables, summaryTableVariables } = props

	function isVariableSelected(variable) {
		var index = summaryTableVariables.indexOf(variable)
		return (index > -1)
	}

	function handleChange(variable) {
		var newVariables
		var index = summaryTableVariables.indexOf(variable)
		if (index > -1) {
			newVariables = [ ...summaryTableVariables.slice(0, index), ...summaryTableVariables.slice(index + 1) ]
		} else {
			newVariables = [ ...summaryTableVariables, variable ]
		}
		props.setParentState({ summaryTableVariables: newVariables })
	}

	var list = variables.map((variable, i) => {
		return <Checkbox 
			key={i}
			checked={isVariableSelected(variable)}
			label={variable}
			onCheck={ handleChange.bind(this, variable) }
		/>
	})

	return (
		<div style={{ margin: '30px 0' }}>
			<p>Pick variables that will appear in the summary table:</p>
			{ list }
		</div>
	)

}