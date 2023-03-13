import React from 'react';
import Style from './footer.module.css';

function Footer() {
  return (
    <div className={Style.container}>
      <div className={Style.cont1}>
        <div>
          <i className="fa-solid fa-box" />
          <p>Same-day local delivery</p>
        </div>
        <div>
          <i className="fa-solid fa-truck-fast" />
          <p>Ground shipping directly to you</p>
        </div>
        <div>
          <i className="fa-solid fa-house-chimney" />
          <p>Free in-store pickup</p>
        </div>
        <div>
          <i className="fa-solid fa-headset" />
          <p>24/7 customer support</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
