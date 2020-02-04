import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Top from './top/top';

export default class Routes extends Component {
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Top} />
        </Switch>
      </BrowserRouter>
    )
  }
}
