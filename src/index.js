import React from 'react'
import ReactDOM from 'react-dom'
// import { Apptest } from './components/Apptest'
import { MyApp } from './components/MyApp'
import { Whoops404 } from './components/Whoops404'
import { Router, Route, hashHistory} from 'react-router'
window.React = React //prevents error sometimes showing in the console that says React not found

ReactDOM.render(<Router history={hashHistory}>
					<Route path="/" component={MyApp}/>
					<Route path="list-days" component={MyApp}/>
					<Route path="add-day" component={MyApp}/>
					<Route path="*" component={Whoops404}/>
				</Router>, 
		document.getElementById('root')
);

// const Output = (props) => {
//   return (
//     <div>
//       <p>You entered: <span>{props.text}</span></p>
//     </div>
//   );
// };

// class Form extends React.Component {
//   state = {value: ''}

//   handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(this.state.value);
//     this.props.onSubmitForm(this.state.value);
//   }

//   render () {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input type="text" placeholder="Enter text" value={this.state.value}
//           onChange={(event) => this.setState({value: event.target.value})}/>
//         <button type="submit">Enter Text</button>
//       </form>
//     )
//   }
// }

// class MyApp extends React.Component {
  
//   state = { textInput: '' }

//   showTextInput = (info) => {
//     this.setState(prevState => ({textInput: info}));
//   }

//   render () {
//     return (
//       <div>
//         <Form onSubmitForm={this.showTextInput}/>
//         <Output text={this.state.textInput}/>
//       </div>
//     );
//   }

// }
//original script from boilerplate
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<MyApp />, document.getElementById('root'));