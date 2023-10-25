import React from 'react';
import './contact.css';
import { MdOutlineMail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    e.target.reset();

    emailjs.sendForm('service_07i7us7', 'template_6lq82rk', form.current, '3siszlkTLumx01jlr').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <div className="container contact__container" data-aos="fade-up" data-aos-delay="200">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>DickyHadinata379@gmail.com</h5>
            <a href="mailto:dickyhadinata379@gmail.com" target="_blank">
              Sand a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messeger</h4>
            <h5>kucabara Hadinata</h5>
            <a href="https://m.me/kucabarahadinata" target="_blank">
              Sand a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+6285247296460</h5>
            <a href="https://api.whatsapp.com/send?phone+6285247296460" target="_blank">
              Sand a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Messege" required></textarea>
          <button type="submit" className="btn btn-primary">
            {' '}
            Sand Messege
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
