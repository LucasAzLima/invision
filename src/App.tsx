import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignIn from 'pages/Access/Signin';
import SignOut from 'pages/Access/Signout';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/signout" component={SignOut} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
