import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'; //the ".." is saying leave the container directory then go to the file with that path
import './App.css';

class App extends Component {
	constructor () {
		super();
		this.state = {
			robots: [], 
			searchfield: ''
		}
	}
//so the below is just getting an array of 10 users from a fake data website
//they have the same characteristics as the robots that populated the previous array
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({ robots: users }));
	}
//everytime that the search changes, we get an event
//the filtered robots thing is basically saying that if the name of a robot in the robot array has the same value
//as what is currently in the searchfield, then display those robots only
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const { robots, searchfield } = this.state; //destructuring (similar to using namespace in C++)
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});
		return !robots.length ?	//if the array has not been populated yet, display "loading"
		<h1>Loading</h1> :
		(
			<div className='tc'>
				<h1 className ='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
			</div>
			);
		}
}	

export default App;