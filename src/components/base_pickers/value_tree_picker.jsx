import React from 'react'

import StatelessSelect from './../base_form_elements/stateless_select.jsx'

export default function ValueTreePicker(props) {

	var { optionsTree, selectedOptions, optionsKey } = props

	function handleFirstSelectChange(value) {
    console.log(value)
    var obj = {}
    obj[optionsTree.optionsKey] = value
    props.setOptionByKey(optionsKey, obj)
	}

  var firstValues = optionsTree.options.map(option => option.value)
  var firstSelectedValue = selectedOptions[optionsTree.optionsKey]

  var firstSelect = (
    <StatelessSelect
      options={ firstValues }
      selectedOption={ firstSelectedValue }
      sendUpdateToParent={ handleFirstSelectChange }
    />
  )

	return (
		<div style={{ margin: '30px 0' }}>
			<h1>{ props.prompt }</h1>
      { firstSelect }
		</div>
	)

}
