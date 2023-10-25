import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

const Services = () => {
  return (
    <section id="services">
      <h2> Other ventures</h2>

      <div className="container services__container" data-aos="zoom-in-down" data-aos-delay="300">
        <article className="service">
          <div className="service__head">
            <h3>Endorsements</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <a href="https://amp.scmp.com/magazines/style/celebrity/article/3112827/twice-members-fame-how-jihyo-nayeon-sana-tzuyu-and-other">Model for brands Smart School Uniform</a>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <a href="https://m.insight.co.kr/news/62710">Model for brands TM</a>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Fashion</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <a href="https://ghostarchive.org/iarchive/s/instagram/CPUx1SWDJ91">Joséphine Collection</a>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <a href="http://www.elle.co.kr/article/58246">ELLE</a>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <a href="https://en.wikipedia.org/wiki/Nayeon#cite_note-29">NYLON Korea</a>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <a href="https://ghostarchive.org/iarchive/s/instagram/CGXBxVvnXno">Cosmopollitan Korea</a>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <a href="https://www.wkorea.com/2021/03/26/road-to-summer-%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4-%EB%82%98%EC%97%B0/">W Korea</a>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <a href="https://ghostarchive.org/iarchive/s/instagram/CUWsRnHFVvr">Louis Vuitton</a>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
