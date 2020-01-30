import React from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import { Description } from './description';

export const Detail = () => {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <h3>Select a pokemon</h3>
      </Route>
      <Route path={`${path}/:id`}>
        <Description />
      </Route>
    </Switch>
  );
};
