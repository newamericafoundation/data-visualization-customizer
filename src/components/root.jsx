import React from 'react'

import { Dialog } from 'material-ui'

import Summary from './summary.jsx'
import DataForm from './data_form.jsx'


export default class Root extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			isOpen: true
		}
	}

	render() {
		return (
			<Dialog open={this.state.isOpen}>
				<Summary itemNames={this.getItemNames()} variableNames={this.getVariableNames()} />
				<DataForm variableNames={this.getVariableNames()} />
			</Dialog>
		)
	}

	componentDidMount() {
		
	}

	getItemNames() {
		var { data } = this.props
		return data.map(datum => datum.name)
	}

	getVariableNames() {
		var { data } = this.props
		return Object.keys(data[0])
	}

}