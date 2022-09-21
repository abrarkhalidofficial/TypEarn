import React, { useEffect } from "react";
import team from "../assets/team.png";
import { Linkedin } from "react-feather";
import { Swiper, SwiperSlide } from "swiper/react";

export function Teams() {
  const [slidesPerView, setSlidesPerView] = React.useState(4);
  useEffect(() => {
    if (window.innerWidth < 650) {
      setSlidesPerView(1);
    } else if (window.innerWidth < 950) {
      setSlidesPerView(2);
    } else if (window.innerWidth < 1200) {
      setSlidesPerView(3);
    } else {
      setSlidesPerView(4);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth < 650) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 950) {
        setSlidesPerView(2);
      } else if (window.innerWidth < 1200) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(4);
      }
    });
  }, []);

  return (
    <div className="teams">
      <div className="teams__heading">Teams</div>
      <div className="teams__content">
        <Swiper spaceBetween={50} slidesPerView={slidesPerView}>
          <SwiperSlide>
            <div className="teams__content__entry">
              <img
                src={team}
                alt="team"
                className="teams__content__entry__img"
              />
              <div className="teams__content__entry__heading">
                ABDULLAh ShAhiD
              </div>
              <div className="teams__content__entry__info">DEVELOPER</div>
              <a href="#" className="teams__content__entry__icon">
                <Linkedin size={20} color="currentColor" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="teams__content__entry">
              <img
                src={team}
                alt="team"
                className="teams__content__entry__img"
              />
              <div className="teams__content__entry__heading">
                ABDULLAh ShAhiD
              </div>
              <div className="teams__content__entry__info">DEVELOPER</div>
              <a href="#" className="teams__content__entry__icon">
                <Linkedin size={20} color="currentColor" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="teams__content__entry">
              <img
                src={team}
                alt="team"
                className="teams__content__entry__img"
              />
              <div className="teams__content__entry__heading">
                ABDULLAh ShAhiD
              </div>
              <div className="teams__content__entry__info">DEVELOPER</div>
              <a href="#" className="teams__content__entry__icon">
                <Linkedin size={20} color="currentColor" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="teams__content__entry">
              <img
                src={team}
                alt="team"
                className="teams__content__entry__img"
              />
              <div className="teams__content__entry__heading">
                ABDULLAh ShAhiD
              </div>
              <div className="teams__content__entry__info">DEVELOPER</div>
              <a href="#" className="teams__content__entry__icon">
                <Linkedin size={20} color="currentColor" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="teams__content__entry">
              <img
                src={team}
                alt="team"
                className="teams__content__entry__img"
              />
              <div className="teams__content__entry__heading">
                ABDULLAh ShAhiD
              </div>
              <div className="teams__content__entry__info">DEVELOPER</div>
              <a href="#" className="teams__content__entry__icon">
                <Linkedin size={20} color="currentColor" />
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
