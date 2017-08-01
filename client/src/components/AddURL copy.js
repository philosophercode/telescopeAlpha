import React, { Component } from 'react';

class AddURL extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputURLValue: '',
			inputCategoryValue: ''
		}
		this.handleURLChange = this.handleURLChange.bind(this);
		this.handleCategoryChange = this.handleCategoryChange.bind(this);
		this.handleURLSubmit = this.handleURLSubmit.bind(this);
	}

	handleURLChange(event) {
		this.setState({inputURLValue: event.target.value});
		console.log(event.target.value);
	}

	handleCategoryChange(event) {
		this.setState({inputCategoryValue: event.target.value});
		console.log(event.target.value);
	}
	
	handleURLSubmit(event) {
		event.preventDefault();
		this.setState({inputURLValue: event.target.value});
		// this.setState({inputCategoryValue: event.target.value});
		console.log(this.state.inputURLValue);
		console.log(this.state.inputURLValue);
		console.log(this.state.inputCategoryValue);

		fetch('/api/urls', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
		        url_path: this.state.inputURLValue,
				category_id: this.state.inputCategoryValue,
			}),
		})
	}

	render() {
		return (
			<form
				className="add-url-form"
				onSubmit={this.props.handleURLSubmit}>

				<input
					type="text"
					placeholder="URL"
					value={this.props.inputURLValue}
					onChange={this.props.handleURLChange}
				/>

				<input
					type="text"
					placeholder="Category"
					value={this.props.inputCategoryValue}
					onChange={this.props.handleCategoryChange}
				/>

				<button>Add URL</button>
			</form>
		);
	}
}

export default AddURL;
