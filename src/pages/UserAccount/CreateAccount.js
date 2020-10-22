import React from 'react'
import Form from 'react-bootstrap/Form'
import { FormInput } from '../../components/FormInput/FormInput'
import { Button } from '../../components/Button/Button'
import '../UserAccount/UserAccountPage.scss'

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

        const { displayName, email, password, confirmPassword} = this.state
        if(password !== confirmPassword) {
            alert('password does not match')
            return;
        }

        try {
            const { user } = await auth.createUserProfile(
                email,
                password
            );
        await createUserProfile( user, {displayName})
        this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
        });
        } catch(error){
            console.error(error);
        }
    }

    handleChange = e => {
        e.preventDeafult();
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    render() {
        const { displayName, email, password, confirmPassword} = this.state
    return (
    <div>
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
        name="username"
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

        <Form.Group controlId="formBasicPassword">
        <Form.Label>CONFIRM PASSWORD</Form.Label>
        <FormInput 
        name="confirmPassword"
        type="confirmPassword"
        value={confirmPassword}
        handleChange={this.handleChange} 
        placeholder="Confirm Password"
        required
        />
        </Form.Group>

        <div className="buttons">
        <Button type="submit">CREATE ACCOUNT</Button>
         <Button type="button" onClick={signInWithGoogle} isGoogleSignIn >
             {''}
             GOOGLE {''}
         </Button>
        </div>
        
        </Form>
        </div>   
        </div>
    )
}
}
