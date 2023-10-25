import React from 'react';
import './about.css';
import ME from '../../assets/bb6a5aab-b1bc-4281-9799-7bb6d44b9dde.jpeg';
import signature from '../../assets/Nayeon_signature.png';
import { BsTranslate } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { MdLabelImportantOutline } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="container about__container" data-aos="fade-up" data-aos-duration="1500">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about_Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsTranslate className="about__icon" />
              <h5>Hangul</h5>
              <small> 임나연</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Mamber Of</h5>
              <small>TWICE</small>
            </article>

            <article className="about__card">
              <MdLabelImportantOutline className="about__icon" />
              <h5>Label</h5>
              <small> JYP - Wanner Japan - Republic</small>
            </article>
          </div>
          <p>
            Im Na-yeon(Korean: 임나연; born September 22, 1995), known mononymously as Nayeon, is a South Korean singer. After participating on the reality survival television show Sixteen in 2015, she became a member in the South Korean
            girl group Twice formed by JYP Entertainment.
          </p>
          <div className="about__me-signature">
            <img src={signature} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
