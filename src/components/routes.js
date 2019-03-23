import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Top from './top';
import UserIndex from './user/UserIndex';
import UserNew from './user/UserNew';
import UserShow from './user/UserShow';

export default class Routes extends Component {
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Top} />
          <Route exact path='/users' component={UserIndex} />
          <Route exact path='/users/new' component={UserNew} />
          <Route exact path='/users/:id' component={UserShow} />
        </Switch>
      </BrowserRouter>
    )
  }
}
