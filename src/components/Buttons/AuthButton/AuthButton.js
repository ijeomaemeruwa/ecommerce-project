import React from 'react'

export const AuthButton = ({ children, isGoogleSignIn, ...otherProps }) => {
    return (
      <div className="auth">
        <button 
        className={`${isGoogleSignIn} 'google-sign-in': ''} auth_btn`} 
        {...otherProps}
        >
        {children}
        </button>  
      </div>
    )
}
