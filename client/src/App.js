import React, { Component } from 'react';
// https://upload.wikimedia.org/wikipedia/commons/8/86/Newtonian_telescope2.svg
import logo from './logo.png';
import './App.css';

import { Navbar, Jumbotron, Button, DropdownButton, MenuItem } from 'react-bootstrap';



import AddURL from './components/AddURL';

import ScreenshotList from './components/ScreenshotList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      categories: [],
      id: null,
			inputURLValue: '',
			inputCategoryValue: ''
    }
    this.handleURLDelete = this.handleURLDelete.bind(this);
  }
  
  componentDidMount() {
  
			fetch ('/api/urls')
				.then((res => {
					return res.json();
				})).then((jsonRes) => {
					this.setState({
						dataLoaded: true,
						urls: jsonRes.urlsData
					})
					console.log(jsonRes.urlsData);
				});


			fetch ('/api/categories')
				.then((res => {
					return res.json();
				})).then((jsonRes) => {
					this.setState({
						dataLoaded: true,
						categories: jsonRes.catagoriesData
					})
					console.log(jsonRes.categoriesData);
				});

	}

  handleURLDelete(event, id) {
    event.preventDefault();
    console.log(id);
    fetch(`/api/urls/${this.state.id}`, {
      method: 'DELETE',
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>TELESCOPE α</h2>
          <DropdownButton className="dropdown" title="Category/Add URL" id="bg-nested-dropdown">
            <AddURL />
            <MenuItem eventKey="1">Arts/Entertainment</MenuItem>
            <MenuItem eventKey="2">Business</MenuItem>
            <MenuItem eventKey="3">Computers/Tech</MenuItem>
            <MenuItem eventKey="4">Games</MenuItem>
            <MenuItem eventKey="5">Health</MenuItem>
            <MenuItem eventKey="6">Home</MenuItem>
            <MenuItem eventKey="7">News</MenuItem>
            <MenuItem eventKey="8">Recreation</MenuItem>
            <MenuItem eventKey="9">Reference/Search</MenuItem>
            <MenuItem eventKey="10">Regional/NYC</MenuItem>
            <MenuItem eventKey="11">Shopping</MenuItem>
            <MenuItem eventKey="12">Society</MenuItem>
            <MenuItem eventKey="13">Sports</MenuItem>
            <MenuItem eventKey="14">Travel</MenuItem>
            <MenuItem eventKey="15">World</MenuItem>
            <MenuItem eventKey="16">Other</MenuItem>
          </DropdownButton>
          

        
        </div>

        <div className='headerSpace'></div>
        <ScreenshotList
          urls={this.state.urls}
          handleURLDelete={this.handleURLDelete}
        />
        <div className='footerSpace'></div>
        <div className="App-footer">
          <h2>Site by Isaac S</h2>
        </div>
        
      </div>
    );
  }
}

export default App;

