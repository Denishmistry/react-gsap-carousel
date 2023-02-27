import React, { Component } from "react";
import { Link } from "../routes"; //Access routing

class NotFound extends Component {
  /******************* 
	@purpose : Rander HTML/ React Components
	@Author : INIC
	******************/
  render() {
    return (
      <div className="">
        <div className="error-wrap">
          <div className="content-404">
            <div className="content-404-title">Error</div>
            <div className="content-404-link">
              <Link route="/">
                <a className="btn btn-primary mt-50" title="Back To Home">
                  <span className="icon-left-caret"></span>Back To Home{" "}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
