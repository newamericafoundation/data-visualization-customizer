import React from 'react'

import { Dialog, RaisedButton } from 'material-ui'

import Summary from './summary.jsx'
import MainVariableSelectForm from './main_variable_select_form.jsx'
import SummaryTableVariablesSelectForm from './summary_table_variables_select_form.jsx'


export default class Root extends React.Component {

	constructor(props) {
		super(props)
		this.setState = this.setState.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.state = {
			status: 'editing',
			mainVariable: this.getVariables()[0],
			summaryTableVariables: []
		}
	}

	render() {
		
		return (
			<Dialog autoScrollBodyContent={true} open={true}>
				{ (this.state.status === 'editing') ? this.renderForm() : this.renderSubmitSuccessMessage() }
			</Dialog>
		)
	}

	renderForm() {
		var variables = this.getVariables()
		return (
			<div>
				<Summary 
					itemNames={this.getItemNames()} 
					variables={variables} 
				/>
				<MainVariableSelectForm 
					mainVariable={this.state.mainVariable}
					setParentState={this.setState}
					variables={variables} 
				/>
				<SummaryTableVariablesSelectForm
					summaryTableVariables={this.state.summaryTableVariables}
					setParentState={this.setState}
					variables={variables}
				/>
				<RaisedButton label='Primary' onClick={this.handleSubmit} />
			</div>
		)
	}

	renderSubmitSuccessMessage() {
		return (
			<div>
				<h1>All set!</h1>
				<p>Now, just ship the following to the database:</p>
				<code>{ JSON.stringify(this.state) }</code>
			</div>
		)
	}

	getItemNames() {
		var { data } = this.props
		return data.map(datum => datum.name)
	}

	getVariables() {
		var { data } = this.props
		return Object.keys(data[0])
	}

	handleSubmit() {
		this.setState({ status: 'success' })
	}

}