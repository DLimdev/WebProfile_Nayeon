import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/🅂🄲🄰🄽▶︎TWICE-MORE&MORE Photobook 9TH MINI ALBUM C Ver_ ⇾ ɴᴀʏᴇᴏɴ (1).jpeg';
import IMG2 from '../../assets/🅂🄲🄰🄽▶︎TWICE-MORE&MORE Photobook 9TH MINI ALBUM C Ver_ ⇾ ɴᴀʏᴇᴏɴ.jpeg';
import IMG3 from '../../assets/moreandmore.jpeg';
import IMG7 from '../../assets/d9463fac9b0249d7eb17067fca202969.jpg';
import IMG8 from '../../assets/NAYEON WALLPAPER (1).jpg';
import IMG9 from '../../assets/NAYEON WALLPAPER (2).jpg';
import IMG10 from '../../assets/NAYEON WALLPAPER (3).jpg';
import IMG11 from '../../assets/NAYEON WALLPAPER (4).jpg';
import IMG12 from '../../assets/َُ on Twitter.jpg';
import IMG13 from '../../assets/5.jpg';
import IMG14 from '../../assets/6.jpg';
import IMG15 from '../../assets/7.jpg';
import IMG16 from '../../assets/8.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Gallery</h2>

      <div className="container portfolio__container" data-aos="fade-up">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG7} alt="" />
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG8} alt="" />
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG9} alt="" />
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG10} alt="" />
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG11} alt="" />
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG12} alt="" />
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG13} alt="" />
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG14} alt="" />
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG15} alt="" />
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG16} alt="" />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
