import React from 'react'
import { FormNav } from '../UserAccount/FormNav'
import { CreateAccount } from '../UserAccount/CreateAccount'
import { Login } from '../UserAccount/Login'

export class UserAccountPage extends React.Component {
    state = {
        selectedTab: 'createaccount'
    }

    renderCreateAccountTab() {
        return (<CreateAccount />)
    }

    renderLoginTab() {
        return (<Login />)
    }

    renderFormNav() {
        return (
        <FormNav 
        onClick={(tabName) => this.changeTab(tabName)}
        selectedTab={this.state.selectedTab}
        />
    )
    }

    renderTabContent() {
        switch(this.state.selectedTab) {
            case 'createaccount':
                default:
                return this.renderCreateAccountTab();
            case 'login':
                return this.renderLoginTab();
        }
    }

    render(){
        return (
        <div className="user_account">
        <div className="form_container">

         {this.renderFormNav()}

         <div className="form_content">
         {this.renderTabContent()}
         </div>

        </div>
        </div>
    )
    }

    changeTab(tabName) {
        this.setState({
            selectedTab: tabName
        })
    }    
}
