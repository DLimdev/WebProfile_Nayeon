import React from 'react';
import './experience.css';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Experience = () => {
  return (
    <section id="experience">
      <h2> Life And Career</h2>

      <div className="container experience__container">
        <div className="experience__earlylife aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
          <h3>Early Life</h3>
          <p>
            As a child, she had participated in a child modeling contest and was eventually cast by idol agency JYP Entertainment. However, her mother prevented her from starting training and entering show business right away given her
            young age.On September 15, 2010, she secretly attended JYP Entertainment's 7th Open Audition after which she became a trainee. In 2013, she was initially cast as a member of 6mix, a JYP girl group that was planned but never
            debuted. She also made an appearance in the second episode of the 2012 television series Dream High
          </p>
        </div>

        <div className="experience__solo aos-init aos-animate" data-aos="fade-left" data-aos-duration="1000">
          <h3>2015–present: Sixteen, Twice and solo debut</h3>
          <p>
            In 2015, Nayeon participated in the reality television show Sixteen, a competition designed to choose the founding members of Twice. As one of the nine successful participants, she went on to join the newly formed girl group
            Twice. In October 2015, Nayeon officially debuted as a member of Twice with their first extended play, The Story Begins. In Gallup Korea's annual music poll for 2017, Nayeon was voted the sixth most popular idol in South
            Korea.In the 2018 poll, she was again ranked sixth, receiving 6.7% of the votes. In 2019, she was ranked fifth, receiving 8.2% of the votes.In 2019, Nayeon was also ranked as the eighth most popular female K-pop idol in a survey
            of soldiers doing mandatory military service in South Korea. On May 19, 2022, it was announced that Nayeon will debut as a solo artist on June 24 with her first extended play, Im Nayeon.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
