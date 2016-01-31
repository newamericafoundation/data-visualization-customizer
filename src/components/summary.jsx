import React from 'react'

export default function Summary(props) {

	return (
		<div>
			<h1>CSV uploaded successfully!</h1>
			<p>{ `We have ${props.itemNames.length} items and ${props.variableNames.length} variables.` }</p>
		</div>
	)

}