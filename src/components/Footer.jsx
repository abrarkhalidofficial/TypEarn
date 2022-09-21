import { Link } from "react-router-dom";
import logoDark from "../assets/logomin.svg";
import { Fade } from "react-reveal";

export default function Footer() {
  return (
    <section id="footer" className="footer__conatiner">
      <div className="footer__conatiner__content">
        <div
          className="footer__overlay__content__col"
          style={{ flexDirection: "column" }}
        >
          <Fade>
            <Link
              to="/"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="footer__overlay__content__col__img__wrapper"
            >
              <img
                src={logoDark}
                alt="logoDark"
                style={{ width: 100 }}
                className="footer__overlay__content__col__img"
              />
            </Link>
          </Fade>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="224.393"
            height="61.543"
            viewBox="0 0 224.393 61.543"
          >
            <defs>
              <clipPath id="clip-path">
                <rect
                  id="Rectangle_1"
                  data-name="Rectangle 1"
                  width="224.393"
                  height="61.543"
                  fill="#fff"
                />
              </clipPath>
            </defs>
            <g
              id="Group_8649"
              data-name="Group 8649"
              transform="translate(-158.406 -48.233)"
              style={{ mixBlendMode: "luminosity", isolation: "isolate" }}
            >
              <g
                id="Group_2"
                data-name="Group 2"
                transform="translate(158.406 48.233)"
              >
                <g
                  id="Group_1"
                  data-name="Group 1"
                  transform="translate(0 0)"
                  clipPath="url(#clip-path)"
                >
                  <text
                    id="TypEarn"
                    transform="translate(0 43.442)"
                    fill="#fff"
                    fontSize="51"
                    fontFamily="Pasajero"
                  >
                    <tspan x="0" y="0">
                      TypEarn
                    </tspan>
                  </text>
                </g>
              </g>
            </g>
          </svg>
          <Fade bottom>
            <a
              href="mailto:hello@typeearn.io"
              className="footer__overlay__content__col__text"
              style={{ marginTop: 20, color: "white" }}
            >
              hello@typearn.io
            </a>
          </Fade>
        </div>
      </div>
    </section>
  );
}
