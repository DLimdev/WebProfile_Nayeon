import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.instagram.com" target="blank">
        <BsInstagram />
      </a>
      <a href="https://www.facebook.com" target="blank">
        <FaFacebookF />
      </a>
    </div>
  );
};

export default HeaderSocials;
