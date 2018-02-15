import { Component } from 'react'
import { SkiDayList } from './SkiDayList'
import { SkiDayCount } from './SkiDayCount'
import { Menu } from './Menu'
import { AddDayForm } from './AddDayForm'

export class MyApp extends Component {
	state = { 
		allSkiDays: [
			{
				resort: "Squaw Valley",
				date: new Date("1/2/2016"),
				powder: true,
				backcountry: false
			},
			{
				resort: "second Valley",
				date: new Date("3/2/2016"),
				powder: false,
				backcountry: false
			},
						{
				resort: "Third Valley",
				date: new Date("3/2/2016"),
				powder: false,
				backcountry: true
			},
		]
	}
	countDays(filter) {
		const {allSkiDays} = this.state
		return allSkiDays.filter(
				(day) => (filter) ? day[filter] : day).length
	}

	render() {
		return (
			<div className="app">
				<Menu />
				{	(this.props.location.pathname === "/") ?
						<SkiDayCount total={this.countDays()}
											powder={this.countDays( "powder")}
											backcountry={this.countDays( "backcountry")}/> :
					(this.props.location.pathname === "/add-day") ?
							<AddDayForm /> :
						<SkiDayList days={this.state.allSkiDays}/>
				}
			</div>
		)
	}
}