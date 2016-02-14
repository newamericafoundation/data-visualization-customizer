import React from 'react'

import StatelessSelect from './../base_form_elements/stateless_select.jsx'
import styles from './styles.json'

export default function SingleValuePicker(props) {

	var { optionKey, options, prompt, selectedOption } = props

	function sendUpdateToParent(nextSelectedOption) {
		props.setOptionByKey(props.optionKey, nextSelectedOption)
	}

	return (
		<div style={ styles.container }>
			<h1>{ prompt }</h1>
			<StatelessSelect
				options={ options }
				selectedOption={ selectedOption }
				sendUpdateToParent={ sendUpdateToParent }
			/>
		</div>
	)

}
