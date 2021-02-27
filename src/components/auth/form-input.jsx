import React from 'react'
import './form-input.scss'

const FormInput = ({ handleChange, name, type, value, placeholder }) => {
    return (
        <div className="group">
            <input 
                className="form-input" 
                onChange={handleChange}
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                required
                />
        </div>
    )
}

export default FormInput;