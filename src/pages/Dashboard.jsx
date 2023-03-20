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
      <h1>Dashboard Page</h1>
      <p>
        {user?.firstName} {user?.lastName}
      </p>
      <div>
        <div>
          <h3>Showing Drinks</h3>
        </div>
        <div>
          <p>sort by:</p>
          <p>relevance</p>
          <select name="tf">
            <option value="null">.</option>
          </select>
        </div>
        <div>
          <p>view:</p>
        </div>
      </div>
      <div className={style.items__container}>
        <div className={style.left__container}>
          <div className={style.none__alcoholic}>
            <h3>None Alcohlic</h3>
            <div>
              <label htmlFor="none__alcoholic">None Alcoholic</label>
              <input
                type="checkbox"
                name="none__alcoholic"
                value="none alcoholic"
              />
            </div>
            <div>
              <label htmlFor="none__alcoholic">JUICE</label>
              <input type="checkbox" name="none__alcoholic" value="juice" />
            </div>
            <div>
              <label htmlFor="none__alcoholic">Hot Milk</label>
              <input type="checkbox" name="none__alcoholic" value="hot milk" />
            </div>
            <div>
              <label htmlFor="none__alcoholic">Boun Vita</label>
              <input type="checkbox" name="none__alcoholic" value="boun vita" />
            </div>
            <div>
              <label htmlFor="none__alcoholic">Hot Chocolate</label>
              <input
                type="checkbox"
                name="none__alcoholic"
                value="hot_chocolate"
              />
            </div>
            <div>
              <label htmlFor="none__alcoholic">Mineral Water</label>
              <input
                type="checkbox"
                name="none__alcoholic"
                value="water mineral"
              />
            </div>
            <div>
              <label htmlFor="none__alcoholic">Tea</label>
              <input type="checkbox" name="none__alcoholic" value="tea" />
            </div>
            <div>
              <label htmlFor="none__alcoholic">Coffee</label>
              <input type="checkbox" name="none__alcoholic" value="coffee" />
            </div>
            <div>
              <label htmlFor="none__alcoholic">Soda</label>
              <input type="checkbox" name="none__alcoholic" value="Soda" />
            </div>
            <div>
              <label htmlFor="none__alcoholic">Tonic</label>
              <input type="checkbox" name="none__alcoholic" value="Tonic" />
            </div>
          </div>
          <div className={style.none__alcoholic}>
            <h3>None Alcohlic</h3>
            <div>
              <label htmlFor="alcoholic">Wine</label>
              <input type="checkbox" name="alcoholic" value="wine" />
            </div>
            <div>
              <label htmlFor="alcoholic">Beer</label>
              <input type="checkbox" name="alcoholic" value="beer" />
            </div>
            <div>
              <label htmlFor="alcoholic">Perry</label>
              <input type="checkbox" name="alcoholic" value="perry" />
            </div>
            <div>
              <label htmlFor="alcoholic"> Cider</label>
              <input type="checkbox" name="alcoholic" value="_cider" />
            </div>
            <div>
              <label htmlFor="alcoholic">Gin</label>
              <input type="checkbox" name="alcoholic" value="gin" />
            </div>
            <div>
              <label htmlFor="alcoholic">Vodka</label>
              <input type="checkbox" name="alcoholic" value="vodka" />
            </div>
            <div>
              <label htmlFor="none__alcoholic">Coffee</label>
              <input type="checkbox" name="none__alcoholic" value="coffee" />
            </div>
            <div>
              <label htmlFor="alcoholic">Tequila</label>
              <input type="checkbox" name="alcoholic" value="tequila" />
            </div>
            <div>
              <label htmlFor="alcoholic">Whiskey</label>
              <input type="checkbox" name="alcoholic" value="whiskey" />
            </div>
          </div>
        </div>
        <div className={style.right__container}>iodo;kp</div>
      </div>
    </div>
  );
}

export default Dashboard;
