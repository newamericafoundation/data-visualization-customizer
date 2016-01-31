import React from 'react'
import { SelectField, MenuItem } from 'material-ui'

export default class DataForm extends React.Component {

	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.state = {
			selected: this.props.variableNames[1]
		}
	}

	render() {
		return (
			<SelectField value={ this.state.selected } onChange={this.handleChange} >
				{ this.renderList() }
			</SelectField>
		)
	}

	renderList() {
		return this.props.variableNames.map((variableName, i) => {
			return (
				<MenuItem 
					key={i} 
					value={variableName} 
					primaryText={variableName} 
				/>
			)
		})
	}

	handleChange(event, index, value) {
		this.setState({ selected: value }) 
	}

}