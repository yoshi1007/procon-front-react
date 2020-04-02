import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Top from './top/top';
import Submit from './submit/submit';

export default class Routes extends Component {
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Top} />
          <Route exact path='/submit' component={Submit} />
        </Switch>
      </BrowserRouter>
    )
  }
}
