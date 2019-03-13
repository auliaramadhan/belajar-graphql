import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { getBooksQuery } from '../queries/queries'


export class Booklist extends Component {
   displayBooks(){
      let data = this.props.data;
      if (data.loading) {
         return (
            <div>Loading book</div>
         )
      } else {
         return data.books.map( book => {
            return( <li>{book.name}</li> )
         })
      }
   }
  render() {
    return (
      <div>
        <ul id="book-list">
         {this.displayBooks()}
        </ul>
      </div>
    )
  }
}

export default graphql(getBooksQuery)(Booklist)
