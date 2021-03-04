import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import Homepage from './components/pages/homepage'
import Shop from './components/pages/Shop'
import Header from './components/header/header'
import Signin from './components/pages/signin'
import Checkout from './components/pages/checkout'

import { connect } from 'react-redux'
import { setCurrentUser } from './redux/actions/user'
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

    const { setCurrentUser } = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged( async user => {
      if(user) {
        const userRef = await createUserProfile(user);
      
        //Use ref obj user to bind snapshot and set comp state of snapshot.data() created
        userRef.onSnapshot(snapShot => {
          
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });

        });
        
      } else {//Else user log out set back to null ( user auth state changed to null)
        setCurrentUser(user);
      }
      

    });
  }

  render() {

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/signin' 
            render={() => this.props.currentUser ? (<Redirect to='/' />) : (<Signin />)} 

            />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser 
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);