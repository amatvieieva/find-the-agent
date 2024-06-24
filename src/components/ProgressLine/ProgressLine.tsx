import { Link, useNavigate } from "react-router-dom";
import "./ProgressLine.scss";
import  ButtonLeft from "../../assets/icons/ButtonLeft.svg?react";
import   ButtonRight from "../../assets/icons/ButtonRight.svg?react";

interface ProgressLineProps {
  pageNumber: number;
  btnDisabled?: boolean;
  nextPage?: string;
}
export default function ProgressLine({
  pageNumber,
  btnDisabled,
  nextPage,
}: ProgressLineProps) {
  const navigate = useNavigate();

  return (
    <div className="progressLine__wrapper">
      <div className="progressLine">
        <div
          className="progressLine--color"
          style={{ width: `${pageNumber * 20}%` }}
        ></div>
      </div>
      <div className="progressLine__info">
        <button
          className="progressLine__back progressLine__btn"
          onClick={() => navigate(-1)}
        >
          <ButtonLeft />
          Back
        </button>
        {pageNumber !== 5 && (
          <div className="progressLine__nextWrapper">
            <span className="progressLine__infoText">step {pageNumber}/4</span>

            {pageNumber >= 2 &&
              nextPage &&
              (!btnDisabled ? (
                <div className="progressLine__btn progressLine__next">
                  {pageNumber === 4 ? (
                    "Show matching agents"
                  ) : (
                    <span className="next__btn">
                      Next <ButtonRight />
                    </span>
                  )}
                </div>
              ) : (
                <Link
                  to={nextPage}
                  className="progressLine__btn progressLine__next progressLine__next--active"
                >
                  {pageNumber === 4 ? (
                    "Show matching agents"
                  ) : (
                    <span className="next__btn">
                      Next <ButtonRight />
                    </span>
                  )}
                </Link>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
