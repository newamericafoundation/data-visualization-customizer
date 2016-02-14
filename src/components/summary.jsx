import React from 'react'
import { PropTypes } from 'react'

function Summary(props) {

	return (
		<div>
			<h1>CSV uploaded successfully!</h1>
			<p>{ `We have ${props.itemNames.length} items and ${props.variables.length} variables.` }</p>
			<p>Use the tabs to set up your project.</p>
		</div>
	)

}

Summary.propTypes = {
	itemNames: PropTypes.array.isRequired,
	variables: PropTypes.array.isRequired
}

export default Summary
