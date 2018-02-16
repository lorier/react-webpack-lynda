import FaShield from 'react-icons/lib/fa/shield'
import { Component } from 'react'

class Member extends Component {

	//following 3 methods are 'updating lifecycle methods'
	componentWillMount() {
		this.style={
			float: 'left',
			width: '300px',
			padding: '20px',
			backgroundColor: 'tan'
		}
	}
	componentWillUpdate(nextProps) {
		this.style = {
			float: 'left',
			width: '300px',
			padding: '20px',
			backgroundColor: (nextProps.admin) ? 'green' : 'purple'
		}
	}
	shouldComponentUpdate(nextProps) {
		return this.props.admin !== nextProps.admin
	}

	render() {

		const { name, thumbnail, email, admin, makeAdmin, removeAdmin } = this.props
		return (
			//TODO: create member Component
			<div style={{
			position: 'relative',
			float: 'left',
			width: '300px',
			padding: '20px',
			margin: '20px',
			height: '250px'}}>

				<div className="member" style={this.style}>

					<div style={{float: 'left'}}>
						<h1>{name} {(admin)? <FaShield /> : null}</h1>
						{(admin) ? 
							<a onClick={() => removeAdmin(email)}>Remove Admin</a> :
							<a onClick={() => makeAdmin(email)}>Make Admin</a>
						}
						<img style={{display: 'block', }} src={thumbnail} alt="Image"/>
						<a href="mailto:{{email}}">{email}</a>
					</div>
				</div>
			</div>
		)
	}
}
export default Member

