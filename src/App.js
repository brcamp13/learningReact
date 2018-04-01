import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';


class App extends Component {
	constructor () {
		super();
		this.state = {
			robots: robots, 
			searchfield: ''
		}
	}
//everytime that the search changes, we get an event
//the filtered robots thing is basically saying that if the name of a robot in the robot array has the same value
//as what is currently in the searchfield, then display those robots only
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}


	render() {
		const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});
		return (
		<div className='tc'>
			<h1>RoboFriends</h1>
			<SearchBox searchChange={this.onSearchChange} />
			<CardList robots={filteredRobots}/>
		</div>
		);
	}
}	

export default App;