import React, { Component } from 'react'
import './login.scss'
import FormInput from './form-input'
import ActionButton from '../action-button/action-button'

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({
            email: '',
            password: ''
        });
    }
    
    handleInputChange = e => {
        e.preventDefault();

        console.log(e.target.value);
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
                </form>
            </div>
        )
    }
}

export default Login;