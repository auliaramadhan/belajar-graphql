import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import classNames from "classnames";

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

export class Launch extends Component {
  render() {
    let { flight_number } = this.props.match.params;
    flight_number = parseInt(flight_number);
    return (
      <Fragment>
        <Query>
          {({ loading, error, data }) => {
            if (loading) {
              return <h4> loading</h4>;
            } else if (error) {
              console.log(error);
            }
            console.log(data);
            const {
              mission_name,
              flight_number,
              launch_year,
              launch_success,
              rocket: { rocket_id, rocket_name, rocket_type }
            } = data.launch;

            return (
              <Fragment>
                <h1 className="display-4 my-3">
                  <span className="text-dark">Mission</span> : {mission_name}
                  <h4 className="mb-3">Launch Details</h4>
                  <ul className="list-group">
                    <li className="list-group-item">
                      Flight NumberL {flight_number}
                    </li>
                  </ul>
                  <ul className="list-group">
                    <li className="list-group-item">
                      Launch year : {launch_year}
                    </li>
                  </ul>
                  <ul className="list-group">
                    <li className="list-group-item">
                      Launch successful :{" "}
                      <span
                        className={classNames({
                          "text-success": launch_success,
                          "text-danger": !launch_success
                        })}
                      >
                        {launch_success ? "yes" : "no"}
                      </span>
                    </li>
                  </ul>
                </h1>

                <h4 className="my-3">Rocket Details</h4>
                <ul className="list-group">
                  <li className="list-group-item">Rocket ID: {rocket_id}</li>
                  <li className="list-group-item">
                    Rocket Name: {rocket_name}
                  </li>
                  <li className="list-group-item">
                    Rocket Type: {rocket_type}
                  </li>
                </ul>
                <hr />
                <Link to="/" className="btn btn-secondary">
                  Back
                </Link>
              </Fragment>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Launch;
