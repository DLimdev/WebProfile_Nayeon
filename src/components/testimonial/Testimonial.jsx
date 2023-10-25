import React from 'react';
import './testimonial.css';
import AVTR1 from '../../assets/Chungha.jpeg';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Chungha',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque reprehenderit perspiciatis quia, aspernatur nisi voluptatibus at similique numquam eius! Soluta',
  },
  {
    avatar: AVTR1,
    name: 'Chungha',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque reprehenderit perspiciatis quia, aspernatur nisi voluptatibus at similique numquam eius! Soluta',
  },
  {
    avatar: AVTR1,
    name: 'Chungha',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque reprehenderit perspiciatis quia, aspernatur nisi voluptatibus at similique numquam eius! Soluta',
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={AVTR1} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
