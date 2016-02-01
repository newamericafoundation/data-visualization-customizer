import React from 'react'

import StatelessListCreator from './form_base/stateless_list_creator.jsx'

export default function VariableGroupInput(props) {

	return (
		<div>
			<h1>Specify variable groups</h1>
			<h2>This section will have a drag-and-drop interface to add variables to each group</h2>
			<StatelessListCreator values={props.variableGroups} />
		</div>
	)

}