import React from 'react';
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

      <Footer />
    </div>
  );
}

export default Home;
