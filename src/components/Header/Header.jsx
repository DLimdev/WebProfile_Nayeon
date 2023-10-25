import React from 'react';
import './header.css';
import HeaderSocials from './HeaderSocials';
import ME from '../../assets/58d186ac-d53d-4a23-b60a-7970893d263d.png';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Header = () => {
  return (
    <div className="container header__container" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="2000" data-aos-offset="0">
      <h2 className="text-light"> I'm</h2>
      <h1 className="text-light"> NAYEON</h1>
      <h3 className="text-light">TWICE</h3>
      <HeaderSocials />
      <div className="me">
        <img src={ME} alt="me" />
      </div>
      <a href="#contact" className="scroll__down">
        Scroll Down
      </a>
    </div>
  );
};

export default Header;
