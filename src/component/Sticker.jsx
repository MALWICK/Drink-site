import React from 'react';
import style from './sticker.module.css';
import al from '../assets/images/al.png';
import cock from '../assets/images/cock.png';
import stra from '../assets/images/stra.png';
import wine from '../assets/images/wineclub.png';
import wini from '../assets/images/wini.png';

function Sticker() {
  return (
    <div className={style.sticker}>
      <img src={al} alt="" />
      <img src={wini} alt="" />
      <img src={cock} alt="" />
      <img src={stra} alt="" />
      <img src={wine} alt="" />
      <img src={wini} alt="" />
    </div>
  );
}

export default Sticker;
