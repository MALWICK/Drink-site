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
        <div className={Style.cont2__small1}>
          <h4>CUSTOMER SERVICE</h4>
          <ul>
            <li>Help Center</li>
            <li>My Account</li>
            <li>Track My Order</li>
            <li>Return Policy</li>
            <li>Gifts Cards</li>
          </ul>
        </div>
        <div className={Style.cont2__small2}>
          <h4>ABOUT US</h4>
          <ul>
            <li>Company Info</li>
            <li>Press Releases</li>
            <li>Careers</li>
            <li>Reviews</li>
            <li>Investor Relation</li>
          </ul>
        </div>
        <div className={Style.cont2__small3}>
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Search</li>
            <li>Become a Resseller</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div className={Style.cont2__small4}>
          <h4>CATEGORIES</h4>
          <ul>
            <li>Brandy</li>
            <li>White Wine</li>
            <li>Champagne</li>
            <li>Vodka</li>
            <li>Tequila</li>
          </ul>
        </div>
        <div className={Style.cont2__small4}>
          <h4>Get exclusive offers & rewards</h4>
          <p>
            Sign up for our members portal to receive some exclusive offer &{' '}
            <br />
            rewards. Its easy and free!
          </p>
          <div className={Style.cont2__input}>
            <input type="email" placeholder="Your email address" />
            <button type="submit">Subscribe</button>
          </div>
        </div>
      </div>
      <div className={Style.cont3}>
        <div className={Style.connect}>
          <p>STAY CONNECT</p>
          <span>
            <i className="fa-brands fa-facebook-f" />
          </span>
          <span>
            <i className="fa-brands fa-twitter" />
          </span>
          <span>
            <i className="fa-brands fa-pinterest" />
          </span>
          <span>
            <i className="fa-brands fa-square-instagram" />
          </span>
        </div>
        <div className={Style.accept}>
          <p>WE ACCEPT</p>
          <i className="fa-brands fa-bitcoin" />
          <i className="fa-brands fa-cc-visa" />
          <i className="fa-brands fa-paypal" />
          <i className="fa-brands fa-cc-amazon-pay" />
          <i className="fa-solid fa-credit-card" />
        </div>
        <div className={Style.careers}>
          <p>Careers</p>
          <p>About Us</p>
          <p>Affiliates</p>
          <p>Privacy Settings</p>
          <p>Help</p>
          <p>Site map</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
