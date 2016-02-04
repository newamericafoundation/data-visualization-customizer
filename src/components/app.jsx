import React from 'react'
import { connect } from 'react-redux'

import { Dialog, RaisedButton, Tabs, Tab } from 'material-ui'

import Summary from './summary.jsx'

import VariableGroupInput from './variable_group_input.jsx'

import SingleValuePicker from './base_pickers/single_value_picker.jsx'
import MultipleValuesPicker from './base_pickers/multiple_values_picker.jsx'

import options from './../options.js'

class App extends React.Component {

	constructor(props) {
		super(props)
		this.setState = this.setState.bind(this)
		this.setStateByKey = this.setStateByKey.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.state = {
			status: 'editing',
			filterVariables: [],
			sideBarVariables: [],
			mainVariable: this.getVariables()[0],
			timeVariable: this.getVariables()[0],
			integratedChartOption: options.integratedChartOptions[0],
			integratedChartType: options.integratedChartTypes[0],
			mapZoomOption: options.mapZoomOptions[0],
			mapType: options.mapTypes[0],
			colorScale: options.colorScales[0]
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
					<Tab label='Map Type'>
						<SingleValuePicker
							prompt='Select map type'
							values={[ ...options.mapTypes ]}
							selectedValue={this.state.mapType}
							valueKey='mapType'
							setParentStateByKey={this.setStateByKey}
						/>
						<SingleValuePicker
							prompt='Select color scale'
							values={[ ...options.colorScales ]}
							selectedValue={this.state.colorScale}
							valueKey='colorScale'
							setParentStateByKey={this.setStateByKey}
						/>
					</Tab>
					<Tab label='Main Data Layer'>
						<SingleValuePicker
							prompt='Select main variable'
							values={[ ...variables ]}
							selectedValue={this.state.mainVariable}
							valueKey='mainVariable'
							setParentStateByKey={this.setStateByKey}
						/>
						<SingleValuePicker
							prompt='Select time variable'
							values={[ ...variables ]}
							selectedValue={this.state.timeVariable}
							valueKey='timeVariable'
							setParentStateByKey={this.setStateByKey}
						/>
						<MultipleValuesPicker
							prompt='Select filter variables'
							values={[ ...variables ]}
							selectedValues={this.state.filterVariables}
							valuesKey='filterVariables'
							setParentStateByKey={this.setStateByKey}
						/>
					</Tab>
					<Tab label='Sidebar'>
						<MultipleValuesPicker
							prompt='Select side bar variables'
							values={[ ...variables ]}
							selectedValues={this.state.sideBarVariables}
							valuesKey='sideBarVariables'
							setParentStateByKey={this.setStateByKey}
						/>
					</Tab>
					<Tab label='Chart Integration'>
						<SingleValuePicker
							prompt='Select integrated chart option'
							values={[ ...options.integratedChartOptions ]}
							selectedValue={this.state.integratedChartOption}
							valueKey='integratedChartOption'
							setParentStateByKey={this.setStateByKey}
						/>
						<SingleValuePicker
							prompt='Select integrated chart type'
							values={[ ...options.integratedChartTypes ]}
							selectedValue={this.state.integratedChartType}
							valueKey='integratedChartType'
							setParentStateByKey={this.setStateByKey}
						/>
					</Tab>
				</Tabs>
				<RaisedButton label='Submit' primary={true} onClick={this.handleSubmit} />
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

	setStateByKey(key, value) {
		var stateChange = {}
		stateChange[key] = value
		this.setState(stateChange)
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

export default connect(state => ({ data: state.data }))(App)