import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "next/router"; //Access routing
import { Link } from "./../../routes"; //Access routing

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  /******************* 
  @purpose : Rander HTML/ React Components
  @Author : INIC
  ******************/
  render() {
    return (
      <footer className="site-footer mt-auto">
        <div className="container">
          <div className="footer-text d-flex align-items-center justify-content-between">
            <div className="mr-2">Copyright {(new Date().getFullYear())} All right reserved</div>
            <div>
              <Link href="#">Privacy Policy</Link> |{" "}
              <Link href="#">Terms of Use</Link> |{" "}
              <Link href="#">Cookie Settings</Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
/******************** 
@purpose : Connect With Redux
@Parameter : {ui}
@Author : INIC
******************/
const mapStateToProps = ({ ui }) => ({});
export default withRouter(connect(mapStateToProps)(Footer));
