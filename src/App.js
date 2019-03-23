import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Routes from './components/routes';
import { store } from './store/store';
import Header from './components/layouts/header';
import Footer from './components/layouts/footer';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <Routes />
        <Footer />
      </Provider>
    );
  }
}
