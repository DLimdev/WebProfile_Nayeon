import React from 'react';
import './footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href="footer__logo"></a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Life and Career</a>
        </li>
        <li>
          <a href="#services">Other Ventures</a>
        </li>
        <li>
          <a href="#portfolio">Gallery</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://instagtam.com">
          <FaInstagram />
        </a>
        <a href="https://twitter.com">
          <FaTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Dicky Hadinata. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
