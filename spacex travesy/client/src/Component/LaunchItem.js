import React from "react";
import classNames from "classnames";
import Moment from "moment";
import { Link } from "react-router-dom";

export default function LaunchItem(props) {
  const {
    flight_number,
    mission_name,

    launch_date_local,
    launch_success
  } = props.launch;
  const sucess = launch_success ? "success" : "gagal";
  return (
    <div className="card card-body">
      <div className="row">
        <div className="col-md-9">
          <h4>
            Mission :
            <span
              className={classNames({
                "text-success": launch_success,
                "text-danger": !launch_success
              })}
            >
              {mission_name}
            </span>
          </h4>
          <br />
          <p>
            Date: <Moment format="YYYY-MM-DD HH:mm">{launch_date_local}</Moment>
          </p>
          <p>success: {launch_success ? "success" : "gagal"}</p>
        </div>
        <div className="col-md-3">
          <Link to={`/launch/${flight_number}`} className="btn btn-secondary ">
            Launch Details
          </Link>
        </div>
      </div>
    </div>
  );
}
