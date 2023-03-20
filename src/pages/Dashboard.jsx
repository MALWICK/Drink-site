/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { getCurrentUser } from '../api/auth';
import style from './Dashboard.module.css';

function Dashboard() {
  const [user, SetUser] = useState();

  useEffect(() => {
    getCurrentUser().then(SetUser);
  });
  return (
    <div className={style.container}>
      <p>
        {user?.firstName} {user?.lastName}
      </p>
      <div className={style.show}>
        <div className={style.show__drinks}>
          <h3>Showing Drinks</h3>
        </div>
        <div className={style.sort__rev}>
          <p>sort by:</p>
          <p>relevance</p>
          <select name="tf">
            <option value="null">.</option>
          </select>
        </div>
        <div className={style.view__rev}>
          <div className={style.view}>
            <span>view:</span>
            <select name="items">
              <option value="9">9</option>
            </select>
          </div>
          <div className={style.padi}>
            <i className="fa-solid fa-arrow-left-long" />
            <i className="fa-solid fa-arrow-right-long" />
          </div>
        </div>
      </div>
      <div className={style.items__container}>
        <div className={style.left__container}>
          <h1>Categories</h1>
          <div className={style.none__alcoholic}>
            <h3>None Alcohlic</h3>
            <div className={style.none1}>
              <label htmlFor="none__alcoholic">None Alcoholic</label>
              <input
                type="checkbox"
                name="none__alcoholic"
                value="none alcoholic"
              />
            </div>
            <div className={style.none1}>
              <label htmlFor="none__alcoholic">JUICE</label>
              <input type="checkbox" name="none__alcoholic" value="juice" />
            </div>
            <div className={style.none1}>
              <label htmlFor="none__alcoholic">Hot Milk</label>
              <input type="checkbox" name="none__alcoholic" value="hot milk" />
            </div>
            <div className={style.none1}>
              <label htmlFor="none__alcoholic">Boun Vita</label>
              <input type="checkbox" name="none__alcoholic" value="boun vita" />
            </div>
            <div className={style.none1}>
              <label htmlFor="none__alcoholic">Hot Chocolate</label>
              <input
                type="checkbox"
                name="none__alcoholic"
                value="hot_chocolate"
              />
            </div>
            <div className={style.none1}>
              <label htmlFor="none__alcoholic">Mineral Water</label>
              <input
                type="checkbox"
                name="none__alcoholic"
                value="water mineral"
              />
            </div>
            <div className={style.none1}>
              <label htmlFor="none__alcoholic">Tea</label>
              <input type="checkbox" name="none__alcoholic" value="tea" />
            </div>
            <div className={style.none1}>
              <label htmlFor="none__alcoholic">Coffee</label>
              <input type="checkbox" name="none__alcoholic" value="coffee" />
            </div>
            <div className={style.none1}>
              <label htmlFor="none__alcoholic">Soda</label>
              <input type="checkbox" name="none__alcoholic" value="Soda" />
            </div>
            <div className={style.none1}>
              <label htmlFor="none__alcoholic">Tonic</label>
              <input type="checkbox" name="none__alcoholic" value="Tonic" />
            </div>
          </div>
          <div className={style.alcoholic}>
            <h3>None Alcohlic</h3>
            <div className={style.alco1}>
              <label htmlFor="alcoholic">None Alcoholic</label>
              <input
                type="checkbox"
                name="none__alcoholic"
                value="none alcoholic"
              />
            </div>
            <div className={style.alco1}>
              <label htmlFor="alcoholic">Wine</label>
              <input type="checkbox" name="alcoholic" value="wine" />
            </div>
            <div className={style.alco1}>
              <label htmlFor="alcoholic">Beer</label>
              <input type="checkbox" name="alcoholic" value="beer" />
            </div>
            <div className={style.alco1}>
              <label htmlFor="alcoholic">Perry</label>
              <input type="checkbox" name="alcoholic" value="perry" />
            </div>
            <div className={style.alco1}>
              <label htmlFor="alcoholic"> Cider</label>
              <input type="checkbox" name="alcoholic" value="_cider" />
            </div>
            <div className={style.alco1}>
              <label htmlFor="alcoholic">Gin</label>
              <input type="checkbox" name="alcoholic" value="gin" />
            </div>
            <div className={style.alco1}>
              <label htmlFor="alcoholic">Vodka</label>
              <input type="checkbox" name="alcoholic" value="vodka" />
            </div>
            <div className={style.alco1}>
              <label htmlFor="none__alcoholic">Coffee</label>
              <input type="checkbox" name="alcoholic" value="coffee" />
            </div>
            <div className={style.alco1}>
              <label htmlFor="alcoholic">Tequila</label>
              <input type="checkbox" name="alcoholic" value="tequila" />
            </div>
            <div className={style.alco1}>
              <label htmlFor="alcoholic">Whiskey</label>
              <input type="checkbox" name="alcoholic" value="whiskey" />
            </div>
          </div>
          <div className={style.ingre}>
            <div className={style.ingre__filed}>
              <label htmlFor="alcoholic">Ingrdients</label>
              <input
                type="checkbox"
                name="none__alcoholic"
                value="none alcoholic"
              />
            </div>
            <div className={style.alco1}>
              <label htmlFor="alcoholic">Glasses</label>
              <input
                type="checkbox"
                name="none__alcoholic"
                value="none alcoholic"
              />
            </div>
          </div>
        </div>
        <div className={style.right__container}>l</div>
      </div>
    </div>
  );
}

export default Dashboard;
