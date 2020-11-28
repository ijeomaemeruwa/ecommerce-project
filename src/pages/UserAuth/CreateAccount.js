import React from 'react'
import Form from 'react-bootstrap/Form'
import { FormInput } from '../../components/FormInput/FormInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import './UserAuth.scss'

import { 
    auth, 
    createUserProfile, 
    signInWithGoogle 
    } 
    from '../../firebase/firebase.utils'

export class CreateAccount extends React.Component {
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    handleSubmit = async event => {
        event.preventDeafult();
        const { displayName, email, password } = this.state

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );
   
        await createUserProfile( user, {displayName})
        this.setState({
        displayName: '',
        email: '',
        password: ''
        });
        } catch(error){
            console.error(error);
        }
    }


    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }


    render() {
        const { displayName, email, password } = this.state
    return (
    <>
        <div className="user_access">
        <div className="title">
        <h4>CREATE ACCOUNT</h4>
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

        <Form.Group controlId="formBasicLastName">
        <Form.Label>USERNAME</Form.Label>
        <FormInput
        name="displayName"
        type="text" 
        value={displayName} 
        handleChange={this.handleChange}
        placeholder="UserName"
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
        className="custom_btn">
            CREATE ACCOUNT
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
