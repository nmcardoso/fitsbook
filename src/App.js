import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeRoute from './components/HomeRoute';
import ModelsRoute from './components/ModelsRoute';
import StatsRoute from './components/StatsRoute';
import LoginRoute from './components/LoginRoute';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomeRoute} />
        <Route path='/models' component={ModelsRoute} />
        <Route path='/stats/:id' component={StatsRoute} />
        <Route path="/login" component={LoginRoute} />
      </Switch>
    </div>
  );
}

export default App;
