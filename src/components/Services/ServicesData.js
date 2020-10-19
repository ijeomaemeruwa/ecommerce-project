import React, { Component } from 'react'
import { Services } from '../Services/Services'
import '../Services/Services.scss'

export class ServicesData extends Component {
    state = {
        service: [
            {
                id: '1',
                text: '',
                icon: ''
            },
            {
                id: '2',
                text: '',
                icon: ''
            }
        ]
    }
    render() {
        const { service } = this.state;
    return (
    <div className="services_section">
      {
        service.map(({id, text}) => (
            <Services
            key={id} 
            item={text} 
            />
        ))
      }          
    </div>
    )
    }
}
