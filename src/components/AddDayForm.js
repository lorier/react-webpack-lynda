import { Component } from 'react'
import { PropTypes } from 'prop-types'

	//in the tutorial she changes this to a stateless funciton component
export class AddDayForm extends Component {

	tahoeResorts = [
		"Alpine Meadows",
		"Boreal",
		"Diamond Peak",
		"Donner Ski Ranch",
		"Heavenly",
		"Homewood",
		"Kirkwood",
		"Mt. Rose",
		"Northstar",
		"Squaw Valley",
		"Sugar Bowl"
	]

	submit = (event) => {
		event.preventDefault()

		// this seems to work for shuffling around values without using 
		// state, and without resorting to controlled components
		// console.log(this.refs.resort.refs.inputResort.value)

		//resort - seems like a bit of a hacky way to get at the nested component form value but it works
		this.props.onNewDay({
			resort: this.refs.resort.refs.inputResort.value,
			date: this.refs.date.value,
			powder: this.refs.powder.checked,
			backcountry: this.refs.backcountry.checked
		})
		this.refs.resort.refs.inputResort.value = ''
		this.refs.date.value = ''
		this.refs.powder.checked = false
		this.refs.backcountry.checked = false
	}

	render() {
		// use refs to reach out to individual elements to figure out
		// what their values are
		const { resort, date, powder, backcountry } = this.props

		return (
			<form onSubmit={this.submit} action="" className="add-day-form">
				
				<label htmlFor="resort">Resort Name</label>
				<Autocomplete options={this.tahoeResorts} name="resort" ref="resort"/>
				
				<label htmlFor="date">Date</label>
				<input type="date" id="date" name="date" ref="date" required defaultValue={date}/>
			
				<div>
					<label htmlFor="powder">Powder Day</label>
					<input ref="powder" id="powder" name="powder" type="checkbox" defaultChecked={powder} />
				</div>

				<div>
					<label htmlFor="backcountry">Backcountry Day</label>
					<input ref="backcountry" id="backcountry" name="backcountry" type="checkbox" defaultChecked={backcountry} />
				</div>	
				<button type="submit">Submit</button>		
			</form>
		)
	}

}

class Autocomplete extends Component {
	//grabs the value of whatever our input ref is
	get value() {
		return this.refs.inputResort.value
	}
	//sets ref to whatever the input value is
	set value(inputValue) {
		this.refs.inputResort.value
	}
	render() {
		//datalist is the tag necessary for the autopopulate feature
		// id on datalist should match list on input tag
		return(
			<div>
				<input ref="inputResort" type="text" list="tahoe-resorts"/>
				<datalist id="tahoe-resorts">
					{this.props.options.map(
						(opt, i) => <option key={i}>{opt}</option>)}
				</datalist>
			</div>
		)
	}
}
AddDayForm.defaultProps = {
	resort: "Kirkwood",
	date: "2017-02-01",
	powder: true,
	backcountry: false
}
AddDayForm.propTypes = {
	resort: PropTypes.string.isRequired,
	date:PropTypes.string.isRequired,
	powder:PropTypes.bool.isRequired,
	backcountry:PropTypes.bool.isRequired
}