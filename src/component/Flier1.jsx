import React from 'react';
import styles from './Flier1.module.css';
/* import Greenpic from '../assets/images/greenpic.jpg';
import Blackpic from '../assets/images/blackpic.jpg'; */

function Flier1() {
  return (
    <div className={styles.container}>
      <div className={styles.container1}>
        <div className={styles.green__container}>
          <div className={styles.green__center}>
            <div className={styles.heading__cont}>
              <span className={styles.enjoy__p}>
                Enjoy our quality responsibly
              </span>
              <h1>
                SOAR BEYOND
                <span className={styles.bold__heading}> THE EXPECTED</span>
              </h1>
            </div>
            <p>
              from<span className={styles.price}>49000XFA</span>
            </p>
            <button type="submit">SHOW More</button>
          </div>
        </div>
        <div className={styles.black__container}>
          <div className={styles.black__center}>
            <span className={styles.black__just}>Just lunched</span>
            <h1 className={styles.black__header}>
              EXTRA SPECIAL <span>SCOTCH</span>
            </h1>
            <p>in-store Pickup available</p>
            <div className={styles.black_btn}>
              <button type="submit">SHOW More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flier1;
