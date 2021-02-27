import React, { Component } from 'react'
import './register.scss'

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    
    render() {
        return (
            <div className="register">
                <h2></h2>
                <span></span>
            </div>
        )
    }
}

export default Register;