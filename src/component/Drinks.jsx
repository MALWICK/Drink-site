import React from 'react';
import style from './Drinks.module.css';

function Drinks() {
  return (
    <div className={style.container}>
      <div className={style.cards__cont}>
        <div className={style.card1}>
          <img
            src="https://cdn11.bigcommerce.com/s-h2455qkov2/images/stencil/1280x1280/products/1438/4801/Colavita_Extra_Virgin_Olive_Oil_infused_with_Pepper_Essence__19643.1582998639.jpg?c=2"
            alt="blanca"
            className={style.card1__img}
          />
          <p className={style.vaker__p}>Vakers Mark Bourbon</p>
          <p className={style.vaker__price}>$150.00</p>
          <div className={style.vaker__stars}>
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
          </div>
          <p className={style.stock}>
            <span>.</span>in Stock
          </p>
          <button type="submit">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}

export default Drinks;
