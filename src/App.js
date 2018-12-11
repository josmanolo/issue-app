import React, { Component } from 'react';
import HeaderApp from './HeaderApp.js';
import IssueForm from './IssueForm.js';

class App extends Component{
	render(){
		return(
			<section className="main">
				<HeaderApp />
				<IssueForm />
			</section>
		);
	}
}

export default App;