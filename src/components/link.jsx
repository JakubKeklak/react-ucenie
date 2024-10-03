//import { Link } from 'react-router-dom';
import './link.css';
const menuItem = ({ url, text }) => {
  return (
    <a className="menuItem" href={url}>{text}</a>
    );
}

export default menuItem;