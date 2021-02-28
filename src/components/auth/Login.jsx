import React, { Component } from 'react'
import './login.scss'
import FormInput from './form-input'
import ActionButton from '../action-button/action-button'

import { auth, signInWithGoogle } from '../../firebase/firebase'
class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            })
        } catch(error) {
            console.log(error);
        }
    }
    
    handleInputChange = e => {
        const { value, name } = e.target;

        this.setState({ [name]:value });
    }

    render() {
        return (
            <div className="login">
                <h2>I already have an account!</h2>
                <span>Login with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        required 
                        handleChange={this.handleInputChange} 
                        placeholder="Enter Email"
                        />
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        required  
                        handleChange={this.handleInputChange}
                        placeholder="Enter Password"
                        />

                    <ActionButton name="submit" type="submit">
                        Login
                    </ActionButton>
                    <ActionButton googleBtn onClick={signInWithGoogle}>
                        Signin with Google
                    </ActionButton>
                </form>
            </div>
        )
    }
}

export default Login;