import React from 'react'
import '../Footer/Footer.scss'

export const Footer = () => {
    return (
    <div>
     <footer className="footer">
     <div className="footer_content row mx-auto">

     <div className="services col-md-4">
        <h5>INFO</h5>
      <ul>
         <li>Help</li>
         <li>Track Order</li>
         <li>Promotions</li>
         <li>Delivery and Returns</li>
      </ul>
     </div>

      <div className="quick_links col-md-4">
         <h5>QUICK LINKS</h5>
       <ul>
          <li>Makeup</li>
          <li>Skincare</li>
          <li>My Orders</li>
          <li>Careers</li>
       </ul>
      </div>

      <div className="other_info col-md-4">
         <h5>MORE FROM OATTS</h5>
         <ul>
            <li>Marketplace</li>
            <li>Vouchers</li>
            <li>Collabs</li>
            <li>Brands</li>
         </ul>
      </div>
     </div>
    </footer>       
    </div>
    )
}
