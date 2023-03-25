import React from 'react';
import style from './whatsNew.module.css';

function WhatsNew() {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>Whats new</h1>
        <p>
          The best beers from around the world
          <span className={style.view}>
            view All <i className="fa-solid fa-chevron-right" />
          </span>
        </p>
      </div>
      <div className={style.cards__cont}>
        <div className={style.card1}>
          <img
            src="https://cdn.shopify.com/s/files/1/0663/8521/5723/products/7_1_3aa73db9-23eb-4b71-83b0-238461dad474_210x.jpg?v=1662977355"
            alt="Vakers mark bourbon"
            className={style.card1__img}
          />
          <p className={style.vaker__p}>Vakers mark bourbon</p>
          <div className={style.vaker__stars}>
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
          </div>
          <p className={style.price}>$150.0</p>
          <p className={style.stock}>.in Stock</p>
          <button type="submit">ADD TO CART</button>
        </div>
        <div className={style.card1}>
          <img
            src="https://cdn.shopify.com/s/files/1/0663/8521/5723/products/7_1_3aa73db9-23eb-4b71-83b0-238461dad474_210x.jpg?v=1662977355"
            alt="Vakers mark bourbon"
            className={style.card1__img}
          />
          <p className={style.vaker__p}>Vakers mark bourbon</p>
          <div className={style.vaker__stars}>
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
          </div>
          <p className={style.price}>$150.0</p>
          <p className={style.stock}>.in Stock</p>
          <button type="submit">ADD TO CART</button>
        </div>
        <div className={style.card1}>
          <img
            src="https://cdn.shopify.com/s/files/1/0663/8521/5723/products/9_1_fe7003f0-352e-4634-9c4a-6a084e1edeb5_210x.jpg?v=1662977485"
            alt="Vakers mark bourbon"
            className={style.card1__img}
          />
          <p className={style.vaker__p}>Vakers mark bourbon</p>
          <div className={style.vaker__stars}>
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
          </div>
          <p className={style.price}>$150.0</p>
          <p className={style.stock}>.in Stock</p>
          <button type="submit">ADD TO CART</button>
        </div>
        <div className={style.card1}>
          <img
            src="https://cdn.shopify.com/s/files/1/0663/8521/5723/products/10_2_f85e371a-0e75-4514-a2a8-71eb23777c93_210x.jpg?v=1662977523"
            alt="Vakers mark bourbon"
            className={style.card1__img}
          />
          <p className={style.vaker__p}>Vakers mark bourbon</p>
          <div className={style.vaker__stars}>
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
          </div>
          <p className={style.price}>$150.0</p>
          <p className={style.stock}>.in Stock</p>
          <button type="submit">ADD TO CART</button>
        </div>
        <div className={style.card1}>
          <img
            src="https://cdn.shopify.com/s/files/1/0663/8521/5723/products/3_3_5125916d-2ec1-43c2-bed8-343c23c3e4ca_210x.jpg?v=1662976066"
            alt="Vakers mark bourbon"
            className={style.card1__img}
          />
          <p className={style.vaker__p}>Vakers mark bourbon</p>
          <div className={style.vaker__stars}>
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
          </div>
          <p className={style.price}>$150.0</p>
          <p className={style.stock}>.in Stock</p>
          <button type="submit">ADD TO CART</button>
        </div>
        <div className={style.card1}>
          <img
            src="https://cdn.shopify.com/s/files/1/0663/8521/5723/products/3_1_a95e4fc3-92be-4a10-9a40-bb7346522820_210x.jpg?v=1662975994"
            alt="Vakers mark bourbon"
            className={style.card1__img}
          />
          <p className={style.vaker__p}>Vakers mark bourbon</p>
          <div className={style.vaker__stars}>
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
          </div>
          <p className={style.price}>$150.0</p>
          <p className={style.stock}>.in Stock</p>
          <button type="submit">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}

export default WhatsNew;
