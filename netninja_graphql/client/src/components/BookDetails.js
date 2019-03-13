import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBookQuery } from "../queries/queries";

export class BookDetails extends Component {
  displayBookDetail() {
    const { book } = this.props.data;
    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All boook by Author</p>
          <ul className="other-book">
            {book.author.book.map(item => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return <div>No Data</div>;
    }
  }
  render() {
    return <div id="book-detai;">{this.displayBookDetail()}</div>;
  }
}

export default graphql(getBookQuery, {
  options: (props) =>{
    return {
      variables: {
        id: props.bookId
      }
    }
   }
})(BookDetails);
