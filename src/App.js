import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Homepage from './components/pages/homepage'
import Shoppage from './components/pages/Shop'
import Header from './components/header/header'
import Signin from './components/pages/signin'

import { auth, createUserProfile } from './firebase/firebase'
class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null;

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  componentDidMount(){//Will alwyays fire async db func call! Either null or user auth object!
    this.unSubscribeFromAuth = auth.onAuthStateChanged( async user => {
      if(user) {
        const userRef = await createUserProfile(user);
      
        //Use ref obj user to bind snapshot and set comp state of snapshot.data() created
        userRef.onSnapshot(snapShot => {
          
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

        });
        
      } else {//Else user log out set back to null ( user auth state changed to null)
        this.setState({ currentUser: user});
      }
      

    });
  }

  render() {

    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={Shoppage} />
          <Route exact path='/signin' component={Signin} />
        </Switch>
      </div>
    );
  }
}

export default App;
