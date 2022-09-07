import React from "react";
import scorecardtop from "../assets/scorecardtop.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ScoreCard({ onClose, FirstPosition, winners, user }) {
  const navigate = useNavigate();
  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.scrollTo({ top: 0, behavior: "smooth" });
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="popup__reverse">
      <form className="popup__reverse__form">
        <div className="scorecard__reverse__form__img">
          <img src={scorecardtop} alt="" />
        </div>
        <div className="scorecard__reverse__form__content">
          {FirstPosition ? (
            ""
          ) : (
            <div className="scorecard__reverse__form__content__header__congrates">
              Congratulation
            </div>
          )}

          <div className="scorecard__reverse__form__content__header">
            <div className="scorecard__reverse__form__content__heading">
              <span>
                {winners?.map((item, i) => {
                  if (item.email === user.email) {
                    return i + 1 === 1
                      ? "1st"
                      : i + 1 === 2
                      ? "2nd"
                      : i + 1 === 3
                      ? "3rd"
                      : i + 1 + "th";
                  } else {
                    return null;
                  }
                })}
              </span>
            </div>
            <div className="scorecard__reverse__form__content__sub__heading">
              Position
            </div>
          </div>
          {FirstPosition ? (
            <div className="scorecard__reverse__form__content__score__card">
              <div className="scorecard__reverse__form__content__score__card__heading">
                Score Card
              </div>
              {winners?.map((item, i) => (
                <div className="scorecard__reverse__score__card__data">
                  <div className="scorecard__reverse__score__card__data__text">
                    {i + 1 === 1
                      ? "1st"
                      : i + 1 === 2
                      ? "2nd"
                      : i + 1 === 3
                      ? "3rd"
                      : i + 1 + "th"}{" "}
                    Postion
                  </div>
                  <div className="scorecard__reverse__score__card__data__text">
                    {item?.email.split("@")[0]}
                  </div>
                  <div className="scorecard__reverse__score__card__data__text">
                    {item?.speed} wpm
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="scorecard__reverse__score__card__data__text">
              You have got first Position with speed of <span>44wpm</span>
            </div>
          )}

          <button
            onClick={() => {
              onClose(false);
              navigate("/");
            }}
            className="scorecard__reverse__form__content__go__to__home"
          >
            Go To Home
          </button>
        </div>
      </form>
    </div>
  );
}
