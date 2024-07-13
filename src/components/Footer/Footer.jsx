import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className="footer-content-left">
               <img src={assets.logo} alt="" />
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex sapiente, sequi atque rerum iste in vitae culpa ipsam impedit? Architecto facilis culpa mollitia possimus vitae magni voluptate recusandae vero est.</p>
               <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />

               </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
              <li>Home</li>
              <li>Aount us</li>
              <li>Delivery</li>
              <li> privacy Policy</li>

            </div>
            <div className='footer-content-rigth'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-222-456-7890</li>
                    <li>contanct@tamato.com</li>
                </ul>

            </div>
             </div>
      <hr />
      <p className="footer-copyrigth">Copyrigth 2024 @Tomato.com -All Rigth Reserved.</p>
    </div>
  )
}

export default Footer
