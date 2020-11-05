import React from 'react'
import './NewsLetter.scss'

export const NewsLetter = () => {
    return (
    <div>
    <section className="newsletter_section row">
    
    <div className="newsletter_img col-md-6">
     <img src={require('../../assets/images/hero3.jpg')} alt="newsletter" />
     </div>

    <div className="col-md-5 newsletter text-left m-auto">
     <p>Legitimately clean</p><br />
     <h5>We make sure to retail authentic beauty products from quality brands</h5><br /><br/>
     
     <form className="form text-left p-3">
     <h5>Subscribe to get beauty tips and recommendations.</h5>
        <input 
        type="email" 
        placeholder="enter email..." 
        />
        <button className="newsletter_btn" type="submit">SUBMIT</button>
     </form>
    </div>

    </section> 
    </div> 
)
}
