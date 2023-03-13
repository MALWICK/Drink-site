import React from 'react';
import Style from './footer.module.css';

function Footer() {
  return (
    <div className={Style.container}>
      <div className={Style.cont1}>
        <div className={Style.cont_small1}>
          <i className="fa-solid fa-box" />
          <p>Same-day local delivery</p>
        </div>
        <div className={Style.cont_small2}>
          <i className="fa-solid fa-truck-fast" />
          <p>Ground shipping directly to you</p>
        </div>
        <div className={Style.cont_small3}>
          <i className="fa-solid fa-house-chimney" />
          <p>Free in-store pickup</p>
        </div>
        <div className={Style.cont_small4}>
          <i className="fa-solid fa-headset" />
          <p>24/7 customer support</p>
        </div>
      </div>
      <div className={Style.cont2}>
        <div>
          <h4>CUSTOMER SERVICE</h4>
          <ul>
            <li>Help Center</li>
            <li>My Account</li>
            <li>Track My Order</li>
            <li>Return Policy</li>
            <li>Gifts Cards</li>
          </ul>
        </div>
        <div>
          <h4>ABOUT US</h4>
          <ul>
            <li>Company Info</li>
            <li>Press Releases</li>
            <li>Careers</li>
            <li>Reviews</li>
            <li>Investor Relation</li>
          </ul>
        </div>
        <div>
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Search</li>
            <li>Become a Resseller</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div>
          <h4>CATEGORIES</h4>
          <ul>
            <li>Brandy</li>
            <li>White Wine</li>
            <li>Champagne</li>
            <li>Vodka</li>
            <li>Tequila</li>
          </ul>
        </div>
        <div>
          <h3>Get exclusive offers & rewards</h3>
          <p>
            Sign up for our members portal to receive some exclusive offer &{' '}
            <br />
            rewards. Its easy and free!
          </p>
          <div className={Style.cont2__input}>
            <input type="email" placeholder="Your email address" />
            <buttun type="submit">Subscribe</buttun>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
