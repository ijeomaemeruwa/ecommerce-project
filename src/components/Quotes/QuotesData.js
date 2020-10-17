import React, { Component } from 'react'
import { Quotes } from '../Quotes/Quotes'
import '../Quotes/Quotes.scss'

export class QuotesData extends Component {
    state = {
        quotes: [
            {
                id: '1',
                text: 'You gotta nourish to flourish'
            },
            {
                id: '2',
                text: 'My passions include looking beautiful'
            },
            {
                id: '3',
                text: 'Sexy time'
            },
            {
                id: '4',
                text: 'If you are sad, add more lipstick and attack'
            }
        ]
    }
    render() {
        const { quotes } = this.state;
    return (
    <div className="quote_section">
      {
        quotes.map(({id, text}) => (
            <Quotes 
            key={id} 
            quote={text} 
            />
        ))
      }          
    </div>
    )
    }
}
