import React from 'react'
import '../NewsLetter/NewsLetter.scss'

export const NewsLetter = () => {
    return (
    <div>
    <section className="newsletter_section row">
    
    <div className="newsletter_img col-md-6">
     <img src={require('../../assets/images/face2.jpg')} alt="newsletter" />
    </div>

    <div className="col-md-5 newsletter text-left m-auto">
     <h4>Legitimately clean</h4><br />
     <h3>What you put on your body matters</h3><br />
     <h4>That's why we make sure to retail authentic beauty products from quality brands</h4><br /><br/>
     
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
