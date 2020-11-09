import React from 'react'
import Form from 'react-bootstrap/Form'
import { FormInput } from '../../components/FormInput/FormInput'
import './UserAuth.scss'

import CustomButton from '../../components/CustomButton/CustomButton'
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
        <>
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
    
        <div className="text-center">
        <CustomButton type="submit" 
        className="text-center">
            LOG IN
        </CustomButton><br />

            <h5>OR</h5>
            <h5>SIGN IN WITH GOOGLE</h5><br />
            
        <CustomButton type="button" 
         onClick={signInWithGoogle} isGoogleSignIn >
             {''}
             GOOGLE {''}
         </CustomButton>
        </div>
    
        </Form>   
        </div>
        </>
    )
}
}