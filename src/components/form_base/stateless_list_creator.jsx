import React from 'react'
import { TextField } from 'material-ui'

export default function StatelessListCreator(props) {

	var list = props.values.map((value, i) => {
		return (
			<p key={i}>{value}</p>
		)
	})

	function sendUpdateToParent() {
		props.sendUpdateToParent('1')
	}

	return (
		<div>
			<TextField />
			{ list }
		</div>
	)

}