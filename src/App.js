import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Homepage from './components/pages/homepage'
import Shoppage from './components/pages/Shop'
import Header from './components/header/header'
import Signin from './components/pages/signin'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shoppage} />
        <Route exact path='/signin' component={Signin} />
      </Switch>
    </div>
  );
}

export default App;
