import React from 'react';
import Styles from './Drawing.module.css';
import Cocktail from '../assets/images/gift.gif';
import Deals from '../assets/images/deals.jpg';
import Beer from '../assets/images/hinneken.jpg';
import Cognac from '../assets/images/cognac.jpg';
import Spirit from '../assets/images/spirits.jpg';
import Tequila from '../assets/images/tequila.jpg';

function Drawing() {
  return (
    <div className={Styles.container}>
      <h1>Our range</h1>
      <div>
        <p className={Styles.span_p}>
          Explore an unbeatable range with over 20,000 products
          <span>shop All Range</span>
          <i className="fa-solid fa-chevron-right" />
        </p>
      </div>
      <div className={Styles.drawing__container}>
        <div className={Styles.drawing1}>
          <img src={Cocktail} alt="beer" />
          <p>Cocktail</p>
        </div>
        <div className={Styles.drawing2}>
          <img src={Deals} alt="Deals" />
          <p>Deals</p>
        </div>
        <div className={Styles.drawing2}>
          <img src={Beer} alt="Beer" />
          <p>Beer</p>
        </div>
        <div className={Styles.drawing2}>
          <img src={Cognac} alt="cognac" />
          <p>Beer</p>
        </div>
        <div className={Styles.drawing2}>
          <img src={Spirit} alt="spirit" />
          <p>Spirit</p>
        </div>
        <div className={Styles.drawing2}>
          <img src={Tequila} alt="Tequilq" />
          <p>Tequila</p>
        </div>
      </div>
    </div>
  );
}

export default Drawing;
