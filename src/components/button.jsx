import './button.css';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowRight } from '../svg/rightArrow.svg';

const Button = ({ text, url, variant, icon }) => {
  const classVariant = variant || 'primary';
  const buttonIcon = icon || false;

  const isHashLink = url && url.includes('#');

  const LinkComponent = isHashLink ? HashLink : Link;

  return (
    <LinkComponent to={url} className={`button button--${classVariant}`} smooth={isHashLink ? true : undefined}>
      <span>{text}</span>
      {buttonIcon && 
        <span className="button__icon">
          <ArrowRight />
        </span>
        }
    </LinkComponent>
  );
};

export default Button;