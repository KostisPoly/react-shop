import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Homepage from './components/pages/homepage'
import Shoppage from './components/pages/Shop'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shoppage} />
      </Switch>
    </div>
  );
}

export default App;
