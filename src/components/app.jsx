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
		this.setStateByKey = this.setStateByKey.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		var initialOptions = {
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
		this.props.dispatch({ type: 'SET_OPTIONS', payload: initialOptions })
	}

	render() {
		return (
			<Dialog autoScrollBodyContent={true} open={true}>
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
							values={[ ...options.mapTypes ]}
							selectedValue={this.props.options.mapType}
							valueKey='mapType'
							setOptionByKey={this.setStateByKey}
						/>
						<SingleValuePicker
							prompt='Select color scale'
							values={[ ...options.colorScales ]}
							selectedValue={this.props.options.colorScale}
							valueKey='colorScale'
							setOptionByKey={this.setStateByKey}
						/>
					</Tab>
					<Tab label='Main Data Layer'>
						<SingleValuePicker
							prompt='Select main variable'
							values={[ ...variables ]}
							selectedValue={this.props.options.mainVariable}
							valueKey='mainVariable'
							setOptionByKey={this.setStateByKey}
						/>
						<SingleValuePicker
							prompt='Select time variable'
							values={[ ...variables ]}
							selectedValue={this.props.options.timeVariable}
							valueKey='timeVariable'
							setOptionByKey={this.setStateByKey}
						/>
						<MultipleValuesPicker
							prompt='Select filter variables'
							values={[ ...variables ]}
							selectedValues={this.props.options.filterVariables}
							valuesKey='filterVariables'
							setOptionByKey={this.setStateByKey}
						/>
					</Tab>
					<Tab label='Sidebar'>
						<MultipleValuesPicker
							prompt='Select side bar variables'
							values={[ ...variables ]}
							selectedValues={this.props.options.sideBarVariables}
							valuesKey='sideBarVariables'
							setOptionByKey={this.setStateByKey}
						/>
					</Tab>
					<Tab label='Chart Integration'>
						<SingleValuePicker
							prompt='Select integrated chart option'
							values={[ ...options.integratedChartOptions ]}
							selectedValue={this.props.options.integratedChartOption}
							valueKey='integratedChartOption'
							setOptionByKey={this.setStateByKey}
						/>
						<SingleValuePicker
							prompt='Select integrated chart type'
							values={[ ...options.integratedChartTypes ]}
							selectedValue={this.props.options.integratedChartType}
							valueKey='integratedChartType'
							setOptionByKey={this.setStateByKey}
						/>
					</Tab>
				</Tabs>
				<RaisedButton label='Submit' primary={true} onClick={this.handleSubmit} />
			</div>
		)
	}

	setStateByKey(key, value) {
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