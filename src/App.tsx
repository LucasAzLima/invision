import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import { observer } from 'mobx-react';

import { theme } from 'Theme';

const App = observer(() => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <h2>One</h2>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
});

export default App;
