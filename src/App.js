import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeRoute from './components/HomeRoute';
import ModelsRoute from './components/ModelsRoute';
import StatsRoute from './components/StatsRoute';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path='/' component={HomeRoute} />
        <Route path='/models' component={ModelsRoute} />
        <Route path='/stats/:id' component={StatsRoute} />
      </Switch>
    </div>
  );
}

export default App;
