import React from 'react'
import '../FormInput/FormInput.scss'


export const FormInput = ({ handleChange, ...otherInputProps }) => {
    return (
        <div className="user_form">
         <input 
         className="input_group"
         onChange={handleChange}
         {...otherInputProps}
         />
        </div>
    )
}