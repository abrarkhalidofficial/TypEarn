import React, { useEffect, useState } from "react";
import team from "../assets/team.png";
import Mehfooz from "../assets/mehfooz-ul-rehman.jpeg";
import Muzamil from "../assets/muzamil.jpeg";
import MD from "../assets/md-asfar.png";
import Hammad from "../assets/hammad-habib.jpeg";
import Abdullah from "../assets/m-abdullah.jpeg";
import Ameer from "../assets/ammer.jpeg";

import { Linkedin } from "react-feather";
import { Swiper, SwiperSlide } from "swiper/react";

export function Teams() {
  const [slidesPerView, setSlidesPerView] = useState(4);
  function changeSlidesPerView() {
    if (window.innerWidth < 650) {
      setSlidesPerView(1);
    } else if (window.innerWidth < 950) {
      setSlidesPerView(2);
    } else if (window.innerWidth < 1200) {
      setSlidesPerView(3);
    } else {
      setSlidesPerView(4);
    }
  }
  useEffect(() => {
    changeSlidesPerView();
    window.addEventListener("resize", changeSlidesPerView);
  }, []);

  return (
    <section id="teams" className="teams">
      <div className="teams__heading">Teams</div>
      <div className="teams__content">
        <Swiper spaceBetween={50} slidesPerView={slidesPerView}>
          <SwiperSlide>
            <div className="teams__content__entry">
              <img
                src={Abdullah}
                alt="team"
                className="teams__content__entry__img"
              />
              <div className="teams__content__entry__heading">
                M. Abdullah Shahid
              </div>
              <div className="teams__content__entry__info">
                Blockchain Developer
              </div>
              <a
                href="https://www.linkedin.com/in/muhammad-abdullah-s-0781a394/"
                className="teams__content__entry__icon"
              >
                <Linkedin size={20} color="currentColor" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="teams__content__entry">
              <img
                src={Mehfooz}
                alt="team"
                className="teams__content__entry__img"
              />
              <div className="teams__content__entry__heading">
                Mehfooz-ur-Rehman
              </div>
              <div className="teams__content__entry__info">
                Full Stack Developer
              </div>
              <a
                href="https://www.linkedin.com/in/mehfooz-rehman-37a1b0231/"
                className="teams__content__entry__icon"
              >
                <Linkedin size={20} color="currentColor" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="teams__content__entry">
              <img
                src={Hammad}
                alt="team"
                className="teams__content__entry__img"
              />
              <div className="teams__content__entry__heading">Hammad Habib</div>
              <div className="teams__content__entry__info">
                UI/UX Design Lead
              </div>
              <a
                href="https://luna-starter.web.app/www.linkedin.com/in/hammadhabib"
                className="teams__content__entry__icon"
              >
                <Linkedin size={20} color="currentColor" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="teams__content__entry">
              <img
                src={Muzamil}
                alt="team"
                className="teams__content__entry__img"
              />
              <div className="teams__content__entry__heading">
                Muzammil Haider
              </div>
              <div className="teams__content__entry__info">CEO</div>
              <a
                href="https://www.linkedin.com/in/muzammil-haider-1a8526148"
                className="teams__content__entry__icon"
              >
                <Linkedin size={20} color="currentColor" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="teams__content__entry">
              <img src={MD} alt="team" className="teams__content__entry__img" />
              <div className="teams__content__entry__heading">Md Asfar</div>
              <div className="teams__content__entry__info">Marketing Lead</div>
              <a
                href="https://www.linkedin.com/in/md-afsar/"
                className="teams__content__entry__icon"
              >
                <Linkedin size={20} color="currentColor" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="teams__content__entry">
              <img
                src={Ameer}
                alt="team"
                className="teams__content__entry__img"
              />
              <div className="teams__content__entry__heading">
                Ameer A. Khammas
              </div>
              <div className="teams__content__entry__info">Marketing Lead</div>
              <a
                href="https://luna-starter.web.app/"
                className="teams__content__entry__icon"
              >
                <Linkedin size={20} color="currentColor" />
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
