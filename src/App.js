import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

function App() {

  return (
    <Switch>
      <Route exact path="/auth"><div>App</div></Route>
      <Redirect from="/" to="/auth" />
    </Switch>
  );
}

export default App;
