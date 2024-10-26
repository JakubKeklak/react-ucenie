import './button.css';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowRight } from '../svg/rightArrow.svg';

const Button = ({ text, url, variant, icon, submit, buttonFunction,activeButton }) => {
  const classVariant = variant || 'primary';
  const buttonIcon = icon || false;
  const isSubmit = submit || false;
  
  const isHashLink = url && url.includes('#');
  const LinkComponent = isHashLink ? HashLink : Link;
  const Tag = url ? LinkComponent : 'button';
  

  return (
    <Tag to={url} type={isSubmit ? "submit" : undefined} className={`button button--${classVariant} ${activeButton}`} smooth={isHashLink ? true : undefined} onClick={buttonFunction}>
      <span>{text}</span>
      {buttonIcon && 
        <span className="button__icon">
          <ArrowRight />
        </span>
        }
    </Tag>
  );
};

export default Button;