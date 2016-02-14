import React from 'react'
import { connect } from 'react-redux'
import { Dialog, RaisedButton, Tabs, Tab } from 'material-ui'

import Summary from './summary.jsx'

import VariableGroupInput from './variable_group_input.jsx'

import SingleValuePicker from './base_pickers/single_value_picker.jsx'
import MultipleValuesPicker from './base_pickers/multiple_values_picker.jsx'
import ValueTreePicker from './base_pickers/value_tree_picker.jsx'

import options, { setDefaultOptions } from './../options/index.js'

class App extends React.Component {

	constructor(props) {
		super(props)
		this.setStateByKey = this.setStateByKey.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		var initialOptions = setDefaultOptions({}, this.getVariables())
		this.props.dispatch({ type: 'SET_OPTIONS', payload: initialOptions })
	}

	render() {
		return (
			<Dialog autoScrollBodyContent={ true } open={ true }>
				{ this.renderForm() }
			</Dialog>
		)
	}

	renderForm() {
		var variables = this.getVariables()
		if(Object.keys(this.props.options).length === 0) { return }
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
							options={[ ...options.mapTypes ]}
							selectedOption={this.props.options.mapType}
							optionKey='mapType'
							setOptionByKey={this.setStateByKey}
						/>
						<SingleValuePicker
							prompt='Select color scale'
							options={[ ...options.colorScales ]}
							selectedOption={this.props.options.colorScale}
							optionKey='colorScale'
							setOptionByKey={this.setStateByKey}
						/>
					</Tab>
					<Tab label='Main Data Layer'>
						<SingleValuePicker
							prompt='Select main variable'
							options={[ ...variables ]}
							selectedOption={this.props.options.mainVariable}
							optionKey='mainVariable'
							setOptionByKey={this.setStateByKey}
						/>
						<SingleValuePicker
							prompt='Select time variable'
							options={[ ...variables ]}
							selectedOption={this.props.options.timeVariable}
							optionKey='timeVariable'
							setOptionByKey={this.setStateByKey}
						/>
						<MultipleValuesPicker
							prompt='Select filter variables'
							options={[ ...variables ]}
							selectedOptions={this.props.options.filterVariables}
							optionKey='filterVariables'
							setOptionByKey={this.setStateByKey}
						/>
					</Tab>
					<Tab label='Sidebar'>
						<MultipleValuesPicker
							prompt='Select side bar variables'
							options={[ ...variables ]}
							selectedOptions={this.props.options.sideBarVariables}
							optionKey='sideBarVariables'
							setOptionByKey={this.setStateByKey}
						/>
					</Tab>
					<Tab label='Chart Integration'>
						<SingleValuePicker
							prompt='Select chart type'
							options={ options.chartTypes }
							selectedOption={ this.props.options.chartType }
							optionKey='chartType'
							setOptionByKey={this.setStateByKey}
						/>
						<SingleValuePicker
							prompt='Select chart X variable'
							options={ [ ...variables ] }
							selectedOption={ this.props.options.chartXVariable }
							optionKey='chartXVariable'
							setOptionByKey={this.setStateByKey}
						/>
						<SingleValuePicker
							prompt='Select chart Y variable'
							options={ [ ...variables ] }
							selectedOption={ this.props.options.chartYVariable }
							optionKey='chartYVariable'
							setOptionByKey={this.setStateByKey}
						/>
						<SingleValuePicker
							prompt='Select chart Z variable'
							options={ [ ...variables ] }
							selectedOption={ this.props.options.chartZVariable }
							optionKey='chartZVariable'
							setOptionByKey={this.setStateByKey}
						/>
					</Tab>
				</Tabs>
				<RaisedButton label='Submit' primary={true} onClick={this.handleSubmit} />
			</div>
		)
	}

	setStateByKey(key, value) {
		console.log(key, value)
		var stateChange = {}
		stateChange[key] = value
		this.props.dispatch({ type: 'SET_OPTIONS', payload: stateChange })
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
		this.props.endApp(this.props.options)
	}

}

export default connect(state => ({ data: state.data, options: state.options }))(App)
