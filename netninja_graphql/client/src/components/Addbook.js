import React, { Component } from "react";
import { graphql ,compose} from "react-apollo";
import { getAuthorsQuery, addBookMutation } from "../queries/queries";

export class Addbook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      genre: "",
      authorId: ""
    };
  }

  displayAuthor() {
    let data = this.props.getAuthorsQuery;
    if (data.loading) {
      return <option value="">Loading....</option>;
    } else {
      return data.authors.map(author => {
        return (
          <option value={author.id} key={author.id}>
            {author.name}
          </option>
        );
      });
    }
  }

  submitForm(e)
  {
   e.preventDefault()
   console.log(this.state)
   const data = this.state
   this.props.addBookMutation({
      variables:{
         name: data.name,
         genre: data.genre,
         authorId: data.authorId
      }
   })
  }

  render() {
    return (
      <form id="addBook" onSubmit={this.submitForm.bind(this)}>
        <div className="field">
          <label> Book Name</label>
          <input
            type="text"
            onChange={e => {
              this.setState({
                name: e.target.value
              });
            }}
          />
        </div>
        <div className="field">
          <label>Genre </label>
          <input
            type="text"
            onChange={e => {
              this.setState({
                genre: e.target.value
              });
            }}
          />
        </div>
        <div className="field">
          <label>Author </label>
          <select
            name="author"
            id="author"
            onChange={e => {
              this.setState({
                authorId: e.target.value
              });
            }}
          >
            <option value="" defaultValue>
              Select Author
            </option>
            {this.displayAuthor()}
          </select>
        </div>

        <button type="submit">+</button>
      </form>
    );
  }
}

export default compose(
   graphql(getAuthorsQuery, {name:"getAuthorsQuery"}),
   graphql(addBookMutation, {name:"addBookMutation"})
)(Addbook);
