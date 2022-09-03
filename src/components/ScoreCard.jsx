import React from "react";
import scorecardtop from "../assets/scorecardtop.png";

export default function ScoreCard({ onClose, FirstPosition }) {
  return (
    <div className="scorecard__reverse">
      <form className="scorecard__reverse__form">
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
              <span>2</span>nd
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
              <div className="scorecard__reverse__score__card__data">
                <div className="scorecard__reverse__score__card__data__text">
                  1st Postion
                </div>
                <div className="scorecard__reverse__score__card__data__text">
                  Usama Khan
                </div>
                <div className="scorecard__reverse__score__card__data__text">
                  54 wpm
                </div>
              </div>
              <div className="scorecard__reverse__score__card__data scorecard__reverse__score__card__data__new">
                <div className="scorecard__reverse__score__card__data__text">
                  1st Postion
                </div>
                <div className="scorecard__reverse__score__card__data__text">
                  Usama Khan
                </div>
                <div className="scorecard__reverse__score__card__data__text">
                  54 wpm
                </div>
              </div>
            </div>
          ) : (
            <div className="scorecard__reverse__score__card__data__text">
              You have got first Position with speed of <span>44wpm</span>
            </div>
          )}

          <button
            onClick={() => {
              onClose(false);
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
