import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Models from './views/Models';
import Stats from './views/Stats';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/models' component={Models} />
        <Route path='/stats/:id' component={Stats} />
      </Switch>
    </div>
  );
}

export default App;
