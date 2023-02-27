import App from "next/app";
import React, { Fragment } from "react";
import WithReduxStore from "../store/with-redux-store";
import { Provider } from "react-redux";
import NextNprogress from "nextjs-progressbar";
// Plugins CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-rangeslider/lib/index.css';
import "react-datepicker/dist/react-datepicker.css";
// ag-grid
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

// Custom css
import "./../public/assets/scss/style.scss";

class MyApp extends App {
  /******************** 
	@purpose : Set NextJs Intial Data
	@Parameter : { Component, ctx }
	@Author : INIC
	******************/
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }
  state = {
    history: [],
    loaded: false,
  };
  /******************* 
	@purpose : Rander HTML/ React Components
	@Author : INIC
	******************/
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Fragment>
        {/******************** 
        @purpose : Page Load Progress Bar
        @Author : INIC
        ********************/}
        <NextNprogress
          color="#13615a"
          startPosition={0.3}
          stopDelayMs={200}
          height="5"
          options={{ easing: "ease", speed: 500 }}
        />
        {/******************** 
        @purpose : Connect Application With Redux
        @Author : INIC
        ********************/}
        <Provider store={reduxStore}>
          {/******************** 
          @purpose : Bind Application components
          @Author : INIC
          ********************/}
            <Component history={this.state.history} {...pageProps} />
        </Provider>
      </Fragment>
    );
  }
}
export default WithReduxStore(MyApp);
