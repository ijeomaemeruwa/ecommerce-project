import React from 'react'

export const Button = ({ children, isGoogleSignIn, ...otherProps }) => {
    return (
      <div>
        <button 
        className={`${isGoogleSignIn} 'google-sign-in': ''} custom-btn`} 
        {...otherProps}
        >
        {children}
        </button>  
      </div>
    )
}
