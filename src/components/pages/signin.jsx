import React from 'react'
import './signin.scss'
import Login from '../auth/Login'
import Register from '../auth/Register';

class Signin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            useCase: 'login'
        };
    }
    renderContent() {
        switch (this.state.useCase) {
            case 'register':
                return (
                    <div className="sign-in">
                        <Register />
                        <button className="link-button" onClick={() => this.setState({useCase: 'login'})}>Already have account so....</button>
                    </div>
                )        
            default:
                return (
                    <div className="sign-in">
                        <Login />
                        <button className="link-button" onClick={() => this.setState({useCase: 'register'})}>Dont have an account so....</button>
                    </div>
                )
        }
    }
    
    
    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
            
        )
    }
}

export default Signin;