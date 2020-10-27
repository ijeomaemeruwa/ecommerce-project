import React from 'react'
import Form from 'react-bootstrap/Form'
import { FormInput } from '../../components/FormInput/FormInput'
import '../UserAccount/UserAccountPage.scss'

import { AuthButton } from '../../components/AuthButton/AuthButton'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

export class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }
     
    handleSubmit = async e => {
        e.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: '' })
        } catch(error) {
            console.log(error);
        }    
    }


    handleChange = event => {
        event.preventDeafult();
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }
    

    render() {
        const { email, password} = this.state
    return (
        <div>
        <div className="user_access">
        <div className="title">
        <h4>LOG IN</h4>
        </div>

        <Form className="form" onSubmit={this.handleSubmit}>

        <Form.Group controlId="formBasicEmail">
        <Form.Label>EMAIL</Form.Label>
        <FormInput
        name="email" 
        type="email" 
        value={email}
        handleChange={this.handleChange}
        placeholder="Email"
        required
        />
        </Form.Group>
        
        <Form.Group controlId="formBasicPassword">
        <Form.Label>PASSWORD</Form.Label>
        <FormInput 
        name="password"
        type="password"
        value={password}
        handleChange={this.handleChange} 
        placeholder="Password"
        required
        />
        </Form.Group>
         <div>
        <AuthButton type="submit">LOG IN</AuthButton>
         <AuthButton type="button" onClick={signInWithGoogle} isGoogleSignIn >
             {''}
             GOOGLE {''}
         </AuthButton>
         </div>
        </Form>   
        </div>
        </div>
    )
}
}