import React from 'react';
import style from './Flier2.module.css';

function Flier2() {
  return (
    <div className={style.container}>
      <div className={style.left__image}>
        <div className={style.left__image_text}>
          <p>MIX AND SAVE</p>
          <h3>
            NO.1 WHISKEY <br />
            <span className={style.h3__span}>LIMITED EDITION</span>
          </h3>
          <p>
            from<span className={style.pricing}>$15.99</span>
          </p>
        </div>
      </div>
      <div className={style.rigth__image}>
        <div className={style.right__image_text}>
          <p>Only from natural raw materials</p>
          <h3>
            CRAFT BEER <br />
            <span className={style.classic}>CLASSIC TASTE</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Flier2;
