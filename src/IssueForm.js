import React, {Component} from "react";
import Modal from './Modal.js';

const IssueText = () => {
	return(<p className="txtI">Fill out the form to report the issue</p>);
};

class IssueForm extends Component{


	constructor(){
		super();
		this.state ={
			title:'',
			issue:''
		};
	}

	stateModal = {show: false};

	showModal = () => {
		this.setState({show: true});
	};

	hideModal = () => {
		this.setState({show: false});
	};

	// handleClickShowAlert() {
	//     this.setState2({
	//       showingAlert: true
	//     });
	    
	//     setTimeout(() => {
	//       this.setState2({
	//         showingAlert: false
	//       });
	//     }, 2000);
	//   }

	handleChange = event =>{
		const{name,value} = event.target;

		this.setState({
			[name] : value,
		});

		
	}

	handleClick = () =>{
		this.showModal();

		var txt1 = this.state.title;
		var txt2 = this.state.issue;

		const data = {
			"title": txt1,
			"body": txt2 
		}

		fetch('https://api.github.com/repos/josmanolo/issues-list/issues', {
		  headers: {
		    "Content-Type" : "application/vnd.github.v3+json",
			"Authorization" : "token f17ca56c5552e27ee0073fcfc428eeb4eb52c7b8"
		  },
		  method: 'POST',
		  body: JSON.stringify(data),
		  }).then(function(data) {


		    console.log(data);
		 });
	}

	
  

	render(){

		return(
			<section className="sectionForm">
				<IssueText/>
				<a className="link" href="https://github.com/josmanolo/issues-list">https://github.com/josmanolo/issues-list</a>
				<form>
					<input placeholder="Title" type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
					<input placeholder="Issue" type="text" name="issue" value={this.state.issue} onChange={this.handleChange}/>
					<a onClick={this.handleClick}>Send</a>
				</form>

				<Modal show={this.state.show} handleClose={this.hideModal}>
					<p>Your Issue has been published!</p>
				</Modal>
			</section>
		);
	}
}

export default IssueForm;


