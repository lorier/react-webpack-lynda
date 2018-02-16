import { Component } from 'react'
import fetch from 'isomorphic-fetch'
import Member from './Member'

class MemberList extends Component {
	state = {
		members: [],
		loading: false,
		administrators: []
	}
	makeAdmin = (email) => {
		const administrators = [
			...this.state.administrators,
			email
		]
		this.setState({administrators})
	}

	removeAdmin = (email) => {
		const administrators = this.state.administrators.filter(
			adminEmail => adminEmail !== email
			)
		this.setState({administrators})
	}
	componentDidMount() {
		this.setState({loading: true})
		fetch('https://api.randomuser.me/?nat=US&results=12')
			.then(response => response.json())
			.then(json => json.results)
			.then(members => this.setState({
				members, //same as members = members
				loading: false
		}))
	}

	render() {
		const { members, loading } = this.state
		return (
			<div className="member-list">
				<h1>Society Members</h1>
				{(loading) ?
					<span>loading...</span> :
					<span>{members.length} members</span>
					
				}

				{  (members.length) ?
					 members.map( (member, i) => <Member 
													key={i}
													admin={this.state.administrators.some(
														adminEmail => adminEmail == member.email)}
													name={member.name.first + ' ' + member.name.last} 
													email={member.email}
													thumbnail={member.picture.thumbnail} 
													makeAdmin={this.makeAdmin}
													removeAdmin={this.removeAdmin}
													/> 
													
								) :
								<span>Currently 0 Members</span> 
				}

			</div>
		)
	}
}

export default MemberList