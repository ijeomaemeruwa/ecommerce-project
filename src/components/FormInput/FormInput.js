import React from 'react'


export const FormInput = ({ handleChange, ...otherInputProps }) => {
    return (
        <div>
         <input 
         className="input_group"
         onChange={handleChange}
         {...otherInputProps}
         />
        </div>
    )
}