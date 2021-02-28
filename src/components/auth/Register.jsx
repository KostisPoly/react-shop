import React, { Component } from 'react'
import './register.scss'
import FormInput from './form-input'
import ActionButton from '../action-button/action-button'
import { auth, createUserProfile } from '../../firebase/firebase'

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            displayName: '',
            passwordConfirm: ''
        }
    }
    
    handleSubmit = async e => {//if pass validate try createprofile
        e.preventDefault();

        const { email, password, displayName, passwordConfirm } = this.state;

        if(password !== passwordConfirm) {
            alert('Passwords dont match!');
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfile(user, { displayName });

            //ON SUCCESS EMPTY FORM BY EMPTYING STATE?
            this.setState({
                email: '',
                password: '',
                displayName: '',
                passwordConfirm: ''
            });
        } catch(error) {
            console.log('Cannot create user or profile -- '+error);
        }

    }

    handleInputChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });
    }

    render() {
        const { email, password,displayName, passwordConfirm } = this.state;
        return (
            <div className="register">
                <h2>I dont have an account!</h2>
                <span>Register with email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        handleChange={this.handleInputChange}
                        placeholder="Enter Email"
                        required     
                    />
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        handleChange={this.handleInputChange}
                        placeholder="Enter Username"
                        required     
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        handleChange={this.handleInputChange}
                        placeholder="Enter Password"
                        required     
                    />
                    <FormInput
                        type="password"
                        name="passwordConfirm"
                        value={passwordConfirm}
                        handleChange={this.handleInputChange}
                        placeholder="Confirm Password"
                        required     
                    />
                    <ActionButton 
                        type="submit"
                    >
                        Register
                    </ActionButton>
                </form>
            </div>
        )
    }
}

export default Register;