import React from 'react'
import ReactDOM from 'react-dom'
// import { Apptest } from './components/Apptest'
import { MyApp } from './components/MyApp'
import { Whoops404 } from './components/Whoops404'
import { Router, Route, hashHistory} from 'react-router'
// import Member from './components/Member'
import MemberList from './components/MemberList'

window.React = React //prevents error sometimes showing in the console that says React not found

ReactDOM.render (
		<MemberList />, document.getElementById('root')
);




		{/* 
		<Member isAdmin={false}
				name="Edna Welch"
				email="edna.welch88@example.com"
				thumbnail="https://randomuser.me/api/portraits/women/90.jpg"
				makeAdmin={(email) => console.log(email)} />, 
		document.getElementById('root'))
		*/}

// ReactDOM.render(<Router history={hashHistory}>
// 					<Route path="/" component={MyApp}/>
// 					<Route path="list-days" component={MyApp}>
// 						<Route path=":filter" component={MyApp}/>
// 					</Route>
// 					<Route path="add-day" component={MyApp}/>
// 					<Route path="*" component={Whoops404}/>
// 				</Router>, 
// 		document.getElementById('root')
// );



