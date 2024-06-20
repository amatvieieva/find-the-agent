import { Link, useNavigate } from "react-router-dom";
import LinkBtnLeft from "../../assets/icons/link buttonLeft.svg?react";
import LinkBtnRight from "../../assets/icons/link button.svg?react";
import "./ProgressLine.scss";

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
          <LinkBtnLeft />
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
                    <span>
                      Next <LinkBtnRight />
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
                    <span>
                      Next <LinkBtnRight />
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
