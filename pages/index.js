import React, { Component } from "react";
import { connect } from "react-redux";
import Home from "./home";
import Layout from "../components/layout";
class Index extends Component {
  render() {
    return (
      <Layout page="home">
        {/******************** 
        @purpose : Default page of react application
        @Author : INIC
        ********************/}
        <Home />
      </Layout>
    );
  }
}
/******************** 
@purpose : Connect With Redux
@Parameter : {ui}
@Author : INIC
******************/
const mapStateToProps = ({ ui }) => ({
  ui: ui,
});
export default connect(mapStateToProps)(Index);
