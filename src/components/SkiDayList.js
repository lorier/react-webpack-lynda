import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import { SkiDayRow } from './SkiDayRow'
import { Link } from 'react-router'

export const SkiDayList = ({days, filter}) => {
	//filter days depending on whether it's a powder or backcountry day
	const filteredDays = (!filter || !filter.match(/powder|backcountry/))?
								days: //return days if no match
								days.filter(day => day[filter]) // return days that match the filter
	return (
		<div className="ski-day-list">
			<table>
				<thead>
					<tr>
						<th>Date</th>
						<th>Resort</th>
						<th>Powder</th>
						<th>Backcountry</th>
					</tr>
					<tr>
						<td colSpan={4}>
							<Link to="/list-days">All Days</Link>
							<Link to="/list-days/powder">Powder Days</Link>
							<Link to="/list-days/backcountry">Backcountry Days</Link>
						</td>
					</tr>
				</thead>
			<tbody>
				{filteredDays.map((day,i) =>
					<SkiDayRow key={i} {...day}/>
				)}
			</tbody>
			</table>
		</div>
	)
}