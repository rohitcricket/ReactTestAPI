import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
	componentDidMount() {
		axios.get("https://reqres.in/api/users").then(response => {
			console.log(response);
		});
	}

	render() {
		return <h5>Testing API...</h5>;
	}
}

export default Post;
