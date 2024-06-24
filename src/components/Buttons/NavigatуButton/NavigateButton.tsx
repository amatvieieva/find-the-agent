import { Link } from "react-router-dom";
import "./NavigateButton.scss";

interface NavigateButtonProps {
  children: string;
  to: string;
  isDisabled: boolean;
}
export default function NavigateButton({
  children,
  to,
  isDisabled,
}: NavigateButtonProps) {
  if (isDisabled) {
    return <div className="navigateButton isDisabled">{children}</div>;
  }
  return (
    <Link className="navigateButton" to={to}>
      {children}
    </Link>
  );
}
