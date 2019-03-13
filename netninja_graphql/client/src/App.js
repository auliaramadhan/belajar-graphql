import React, { Component } from 'react';
import ApolloCLient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'

// component
import Booklist from './components/Booklist'
import Addbook from './components/Addbook'

const client = new ApolloCLient({
  uri: 'localhost:5000/graphql '
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
        <h1>Ninja readingl</h1>
        <Booklist/>
        <Addbook/>
        </div>
      </ApolloProvider>
    );
  }

}
export default App;
