import React, { Component } from "react";

class Book extends Component {
	state = {
		quest: "I will stop the motor of the world"
	};

	buttonClicked = () => {
		console.log("Button was clicked!");
	};

	render() {
		return (
			<div>
				<h1>Hello!</h1>
				<h2>My name is {this.props.name}</h2>
				<button onClick={this.buttonClicked}>My secret is: </button>
				<h3>{this.state.quest}</h3>
			</div>
		);
	}
}

export default Book;
