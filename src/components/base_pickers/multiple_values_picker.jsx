import React from 'react'

import StatelessCheckbox from './../base_form_elements/stateless_checkbox.jsx'

import styles from './styles.json'

export default function MultipleValuesPicker(props) {

	var { options, selectedOptions, optionKey, prompt } = props

	function setParentState(nextOptions) {
		props.setOptionByKey(optionKey, nextOptions)
	}

	return (
		<div style={ styles.container }>
			<h1>{ prompt }</h1>
			<StatelessCheckbox
				options={ options }
				selectedOptions={ selectedOptions }
				sendUpdateToParent={ setParentState }
			/>
		</div>
	)

}
