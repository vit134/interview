import App from 'next/app';
import React from 'react';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import initializeStore from '../src/store';

import { Layout } from '../src/components/layout';

class MyApp extends App {
  static async getInitialProps(props) {
    const { Component, ctx } = props;
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
      </Provider>
    );
  }
}

export default withRedux(initializeStore, {
  storeKey: 'Interview',
  debug: false,
})(MyApp);
