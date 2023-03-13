import React from 'react';
import Deal from '../assets/images/home1.jpg';
import home2 from '../assets/images/home2.jpg';
import Header from '../component/Header';
import Style from './Home.module.css';

function Home() {
  /*   const [width, setWidht] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidht(carousel.current.scrollWidth, carousel.current.offsetWidth);
  }, []); */
  return (
    <div className={Style.container}>
      <Header />
      <div className={Style.deal}>
        <img src={Deal} alt="deal" />
        <img src={home2} alt="deal" />
        <div className={Style.center}>
          <p>DELISH DRINKS FOR JUNE</p>
          <h1> SUMMER DEALS</h1>
          <h3> 25% off all Wines & beer & Soft-Drinks</h3>
          <div>
            <button className={Style.show} type="button">
              SHOW MORE
            </button>
            <div>
              <p>*offer valid untill 23/8</p>
            </div>
          </div>
        </div>
        {/* <motion.div ref={carousel} className={Style.carousel}>
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className={Style.inner_carousel}
          >
            {images.map((image) => {
              return (
                <motion.div className={Style.item} key={image}>
                  <img src={image} alt="l" />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div> */}
      </div>
    </div>
  );
}

export default Home;
