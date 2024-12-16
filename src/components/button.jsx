import './button.css';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";

const Button = ({ text, url, variant, icon, submit, buttonFunction,activeButton, disabledButton }) => {
  const classVariant = variant || 'primary';
  const buttonIcon = icon || false;
  const isSubmit = submit || false;
  const disabled = disabledButton ? true : undefined;
  const isHashLink = url && url.includes('#');
  const LinkComponent = isHashLink ? HashLink : Link;
  const Tag = url ? LinkComponent : 'button';
  

  return (
    <Tag to={url} type={isSubmit ? "submit" : undefined} className={`button button--${classVariant} ${activeButton} ${buttonIcon ? 'button--icon' : ''}`} smooth={isHashLink ? true : undefined} onClick={buttonFunction} disabled={disabled} >
      <span>{text}</span>
      {buttonIcon && 
        <span className="button__icon">
          <FaAngleRight />
        </span>
        }
    </Tag>
  );
};

export default Button;