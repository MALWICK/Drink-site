import React from 'react';
import Drawing from '../component/Drawing';
import Drinks from '../component/Drinks';
import Flier1 from '../component/Flier1';
import Footer from '../component/Footer';
import Header from '../component/Header';
import Style from './Home.module.css';

function Home() {
  return (
    <div className={Style.home__container}>
      <Header />
      <div className={Style.deal}>
        <div className={Style.center}>
          <p className={Style.center__delish}>DELISH DRINKS FOR JUNE</p>
          <h1> SUMMER DEALS</h1>
          <h3>25% off all wines & beer </h3>
          <button type="submit"> SHOW MORE</button>
          <p className={Style.center__offer}>*offer valid untill 23/8</p>
        </div>
      </div>
      <Drawing />
      <Flier1 />
      <div className={Style.trending__container}>
        <div className={Style.left__div}>
          <h2> Trending Today</h2>
          <p>
            The best selection of Whiskey, Vodka and Liquer
            <span className={Style.left__span}>
              View ALL
              <i className="fa-solid fa-chevron-right" />
            </span>
          </p>
        </div>
        <div className={Style.right__div}>
          <span className={Style.right__span1}>
            <i className="fa-solid fa-chevron-left" />
          </span>
          <span className={Style.right__span2}>
            <i className="fa-solid fa-chevron-right" />
          </span>
        </div>
      </div>
      <Drinks />

      <Footer />
    </div>
  );
}

export default Home;
