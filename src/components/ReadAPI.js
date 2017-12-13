import React, { Component } from "react";
import * as BookAPI from "./BooksAPI.js";

class Read extends Component {
	componentDidMount() {
		BookAPI.getAll().then(bookId => {
			console.log(bookId);
		});
	}

	render() {
		return <h5>Testing Books...</h5>;
	}
}

export default Read;
