import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../header";
import Footer from "../footer";
import MetaTags from "../meta-tags";
import { withRouter } from "next/router";
class Layout extends Component {
  /******************* 
  @purpose : Rander HTML/ React Components
  @Author : INIC
  ******************/
  render() {
    const { children } = this.props;
    return (
      <div className="d-flex flex-column h-100">
        {/****************
        @purpose : SEO Intigration
        @Author : INIC
        ******************/}
        <MetaTags />
        {/******************* 
          @purpose :Header Components
          @Author : INIC
          ******************/}
        <Header />
        <main className="main-layout flex-shrink-0"> {children} </main>
        {/******************* 
          @purpose :Footer Components
          @Author : INIC
          ******************/}
        <Footer/>
      </div>
    );
  }
}
/******************** 
@purpose : Connect With Redux
@Parameter : {ui, layout}
@Author : INIC
******************/
const mapStateToProps = ({ ui }) => ({});
export default withRouter(connect(mapStateToProps)(Layout));
