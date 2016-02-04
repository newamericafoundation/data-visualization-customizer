import React from 'react'
import { PropTypes } from 'react'

function Summary(props) {

	return (
		<div>
			<h1>CSV uploaded successfully!</h1>
			<p>{ `We have ${props.itemNames.length} items and ${props.variables.length} variables.` }</p>
			<p>You can go through the tabs and customize how this data should be displayed.</p>
		</div>
	)

}

Summary.propTypes = {
	itemNames: PropTypes.array.isRequired,
	variables: PropTypes.array.isRequired
}

export default Summary