import { Facebook, Twitter, Youtube } from "react-feather";
import { Link } from "react-router-dom";
import logoDark from "../assets/logo.png";
import { Fade } from "react-reveal";

export default function Footer() {
  return (
    <section id="footer" className="footer__conatiner">
      <div className="footer__conatiner__content">
        <div className="footer__overlay__content__col">
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
                style={{ width: 250 }}
                className="footer__overlay__content__col__img"
              />
            </Link>
          </Fade>
          <Fade bottom>
            <a
              href="mailto:hello@typeearn.io"
              className="footer__overlay__content__col__text"
              style={{ marginTop: 20 }}
            >
              hello@typearn.io
            </a>
          </Fade>
        </div>
      </div>
    </section>
  );
}
