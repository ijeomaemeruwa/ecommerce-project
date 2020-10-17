import React from 'react'
import '../NewsLetter/NewsLetter.scss'

export const NewsLetter = () => {
    return (
    <div>
    <section className="news_section">
    <div className="newsLetter text-center p-5">
     <h3>Be the first to hear about new stock</h3>
     <form className="form">
        <input type="email" placeholder="Email" />
        <button className="btn" type="submit">SUBMIT</button>
     </form>
    </div>
    </section>      
    </div>
)
}
