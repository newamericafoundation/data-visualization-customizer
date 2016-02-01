import React from 'react'

import { Dialog, RaisedButton, Tabs, Tab } from 'material-ui'

import Summary from './summary.jsx'
import MainVariablePicker from './main_variable_picker.jsx'
import SummaryTableVariablesPicker from './summary_table_variables_picker.jsx'
import VariableGroupInput from './variable_group_input.jsx'


export default class Root extends React.Component {

	constructor(props) {
		super(props)
		this.setState = this.setState.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.state = {
			status: 'editing',
			mainVariable: this.getVariables()[0],
			summaryTableVariables: [],
			variableGroups: [ 'variable-group-1', 'variable-group-2' ]
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
				<Tabs>
					<Tab label='Summary'>
						<Summary 
							itemNames={this.getItemNames()} 
							variables={variables} 
						/>
					</Tab>
					<Tab label='Main Variable'>
						<MainVariablePicker
							mainVariable={this.state.mainVariable}
							setParentState={this.setState}
							variables={variables} 
						/>
					</Tab>
					<Tab label='Summary Table Variables'>
					<SummaryTableVariablesPicker
						summaryTableVariables={this.state.summaryTableVariables}
						setParentState={this.setState}
						variables={variables}
					/>
					</Tab>
					<Tab label='Variable Groups'>
						<VariableGroupInput
							variableGroups={this.state.variableGroups}
							setParentState={this.setState}
						/>
					</Tab>
				</Tabs>
				<RaisedButton label='Done!' primary={true} onClick={this.handleSubmit} />
			</div>
		)
	}

	renderSubmitSuccessMessage() {
		return (
			<div>
				<h1>All set!</h1>
				<p>Now, just ship the following JSON to the database, or, as an intermediate solution, copy and paste it to an input field within your CMS:</p>
				<code>{ JSON.stringify(this.state, null, 4) }</code>
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