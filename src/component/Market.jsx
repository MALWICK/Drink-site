import React from 'react';
import style from './market.module.css';
import mouse from '../assets/images/mouse.png';
import wineSticker from '../assets/images/winesticker.png';
import trinke from '../assets/images/trinke.png';

function Market() {
  return (
    <div className={style.market}>
      <div className={style.container}>
        <div className={style.card1}>
          <img src={mouse} alt="mouse" />
          <h4>Click & Collect</h4>
          <p>
            Ready to pick up from Your chosen <br /> store in 30 minutes.
          </p>
          <p className={style.learn}>
            Learn More
            <i className="fa-solid fa-chevron-right" />
          </p>
        </div>
        <div className={style.card2}>
          <img src={wineSticker} alt="mouse" />
          <h4>Trusted Marketplace</h4>
          <p>
            Learn more about our company & <br />
            trade accounts and offers
          </p>
          <p className={style.brow}>
            Browse Product <i className="fa-solid fa-chevron-right" />
          </p>
        </div>
        <div className={style.card3}>
          <img src={trinke} alt="mouse" />
          <h4>Join Our Club</h4>
          <p>
            Register to save your orders and <br />
            receive alerts.
          </p>
          <p className={style.regis}>
            Register Now
            <i className="fa-solid fa-chevron-right" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Market;
