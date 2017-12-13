import React, { Component } from "react";
import * as BookAPI from "./ReadAPI.js";

class Read extends Component {
	componentDidMount() {
		BookAPI.get().then(books => {
			console.log({ books });
		});
	}

	render() {
		return <h5>Testing Books...</h5>;
	}
}

export default Read;
