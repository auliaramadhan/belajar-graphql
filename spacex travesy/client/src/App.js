import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Launches from "./Component/launches";
import Launch from "./Component/Launch";
import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <img
              src="https://raw.githubusercontent.com/bradtraversy/spacex_launch_stats/master/client/src/logo.png"
              alt="spaceX"
              style={{ width: 300, display: "block", margin: "auto" }}
            />
            <Launches />
          </div>
          <Route exact path="/" Component={Launches} />
          <Route exact path="/launch/:flight_number" Component={Launch} />
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
