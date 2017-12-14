import React, { Component } from "react";
import * as BookAPI from "./BooksAPI.js";

class Read extends Component {
	state = {
		books: []
	};

	componentDidMount() {
		BookAPI.getAll().then(bookId => {
			this.setState({ books: bookId });
		});
	}

	render() {
		const books = this.state.books.map(book => {
			return <Read key={book.id} name={book.first_name} />;
		});

		return <div>{books}</div>;
	}
}

export default Read;
