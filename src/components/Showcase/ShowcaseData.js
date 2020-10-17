import React, { Component } from 'react'
import { Showcase } from '../../components/Showcase/Showcase'
import '../Showcase/Showcase.scss'

export class ShowcaseData extends Component {
    state = {
        cards:  [
            {
               id: '1',
               imageURL: 'https://images.unsplash.com/photo-1527203561188-dae1bc1a417f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
               title: 'Skin like GOLD',
               size: 'large' 
            },
            {
                id: '2',
                imageURL: 'https://images.unsplash.com/photo-1585652757141-8837d676fac8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                title: 'Glam Time',
                size: 'large'
             }
        ]
    }
    render() {
    return (
    <div className="card">
      {
        this.state.cards.map(({id, imageURL, title, size}) => (
           <Showcase 
           key={id} 
           image={imageURL} 
           text={title}
           size={size} 
           />
        ))
      }          
    </div>
    )
}
}

