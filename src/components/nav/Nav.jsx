import React from 'react';
import './nav.css';
import { BiHome } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import { BsFillFileCodeFill } from 'react-icons/bs';
import { BsFillChatSquareDotsFill } from 'react-icons/bs';
import { GrGallery } from 'react-icons/gr';
import { useState } from 'react';
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#header" onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}>
        <BiHome />
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <AiOutlineUser />
      </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
        <BsFillBookmarkStarFill />
      </a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>
        <BsFillFileCodeFill />
      </a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>
        <GrGallery />
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <BsFillChatSquareDotsFill />
      </a>
    </nav>
  );
};

export default Nav;
