import { Link } from 'react-router-dom';
import './ExitBtn.scss';

export default function ExitBtn() {
  return <Link to={'/'} className="exitBtn">Exit</Link>;
}
