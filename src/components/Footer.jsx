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

        <div className="footer__overlay__content__col">
          <Fade bottom>
            <a
              href="https://www.facebook.com/Lunastarter-104944465439150"
              className="footer__overlay__content__col__entry"
            >
              <Facebook size={20} color="currentColor" />
            </a>
          </Fade>
          <Fade bottom>
            <a
              href="https://twitter.com/lunastarter_io"
              className="footer__overlay__content__col__entry"
            >
              <Twitter size={20} color="currentColor" />
            </a>
          </Fade>
          <Fade bottom>
            <a
              href="https://discord.gg/KyDCDE9xDC"
              className="footer__overlay__content__col__entry"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31.5"
                height="36"
                fill="currentColor"
                viewBox="0 0 31.5 36"
              >
                <path
                  id="Icon_awesome-discord"
                  data-name="Icon awesome-discord"
                  d="M20.9,17.1a1.843,1.843,0,1,1-1.836-2A1.918,1.918,0,0,1,20.9,17.1Zm-8.406-2a2.005,2.005,0,0,0,0,4,1.918,1.918,0,0,0,1.836-2A1.906,1.906,0,0,0,12.492,15.1ZM31.5,3.708V36c-4.535-4.007-3.084-2.681-8.352-7.578l.954,3.33H3.69A3.7,3.7,0,0,1,0,28.044V3.708A3.7,3.7,0,0,1,3.69,0H27.81A3.7,3.7,0,0,1,31.5,3.708ZM26.37,20.772a24.1,24.1,0,0,0-2.592-10.494,8.9,8.9,0,0,0-5.058-1.89l-.252.288a11.979,11.979,0,0,1,4.482,2.286A15.294,15.294,0,0,0,9.5,10.44c-.666.306-1.062.522-1.062.522A12.143,12.143,0,0,1,13.176,8.6L13,8.388a8.9,8.9,0,0,0-5.058,1.89A24.1,24.1,0,0,0,5.346,20.772a6.526,6.526,0,0,0,5.49,2.736s.666-.81,1.206-1.494a5.6,5.6,0,0,1-3.15-2.124c.265.185.7.426.738.45a13.121,13.121,0,0,0,11.232.63,10.3,10.3,0,0,0,2.07-1.062,5.68,5.68,0,0,1-3.258,2.142c.54.684,1.188,1.458,1.188,1.458A6.58,6.58,0,0,0,26.37,20.772Z"
                />
              </svg>
            </a>
          </Fade>
          <Fade bottom>
            <a
              href="https://www.youtube.com/channel/UC2bJpRyq4Mcxl9u6n8ooBNw"
              className="footer__overlay__content__col__entry"
            >
              <Youtube size={20} color="currentColor" />
            </a>
          </Fade>
        </div>
      </div>
    </section>
  );
}
