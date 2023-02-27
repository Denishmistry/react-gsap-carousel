import React, { Component } from "react";
import Head from "next/head";
class MetaTags extends Component {
  /******************* 
  @purpose : Rander HTML/ React Components
  @Author : INIC
  ******************/
  render() {
    /****************
    @purpose : SEO Intigration
    @Author : INIC
    ******************/
    return (
      <Head>
        <title>{"Project"}</title>
        <meta name="title" content={"Project title"} />
        <meta name="description" content={"Project description"} />
        <meta name="keywords" content={"Project keyword"} />
        <meta name="image" content={"Project image"} />
        <meta name="redirect" content={"Project redirect"} />
        <meta name="robots_adv" content={"Project robots adv"} />
      </Head>
    );
  }
}
export default MetaTags;
