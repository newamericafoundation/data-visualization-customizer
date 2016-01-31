import React from 'react'
import { SelectField, MenuItem } from 'material-ui'

export default class MainVariableSelectForm extends React.Component {

	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
	}

	render() {
		return (
			<div style={{ margin: '30px 0' }}>
				<p>Pick featured variable:</p>
				<SelectField value={ this.props.mainVariable } onChange={this.handleChange} >
					{ this.renderList() }
				</SelectField>
			</div>
		)
	}

	renderList() {
		return this.props.variables.map((variable, i) => {
			return (
				<MenuItem 
					key={i} 
					value={variable} 
					primaryText={variable} 
				/>
			)
		})
	}

	handleChange(event, index, value) {
		this.props.setParentState({ mainVariable: value }) 
	}

}