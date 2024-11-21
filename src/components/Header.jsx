import { useState, useEffect } from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';
import { links } from '../data/links';
import { useContext } from 'react'
import { ProductContext } from '../context/dataContext'
import { ReactComponent as Kosik } from '../svg/kosik.svg';
import { ReactComponent as Facebook } from '../svg/facebook.svg';
import { ReactComponent as Mail } from '../svg/mail.svg';
import { ReactComponent as Instagram } from '../svg/instagram.svg';


const Header = () => {
  const { productSummaries, handleShowCalc, closeCalc } = useContext(ProductContext);
  const [showNavbar, setShowNavbar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const closeNavbar = () => {
    if (window.innerWidth <= 750) {
      setShowNavbar(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container container">
        <div className="header__logo">
          <span>Drevo</span>
          <span> a </span>
          <span>Sluzby</span>
        </div>
        <nav className="navigation">
          <ul className={`navigation__menuItems ${showNavbar ? 'navigation__menuItems--show' : ''}`}>
            {links.filter(link => link.navlink).map((link, index) => {
              return (
                <li key={index}>
                  <NavLink
                    className="menuItem"
                    to={link.url}
                    exact
                    activeClassName="menuItem--active"
                    onClick={() => { closeNavbar(); closeCalc(); }}
                  >
                    <span>{link.name}</span>
                  </NavLink>
                </li>
              )
            })}
          </ul>
          
        </nav>
        <div className="header__icons">
          <div className={`shop__icon shop__icon-kosik ${productSummaries.length > 0 ? 'shop__icon-kosik--view' : ''}`} onClick={handleShowCalc}>
            <Kosik />
            <span className='shop__count'>{productSummaries.length}</span>
          </div>
          <a href="https://www.facebook.com/jakub.keklak?locale=sk_SK" target='blank' className="shop__icon">
           <Facebook />
          </a>
          <a href="https://www.facebook.com/jakub.keklak?locale=sk_SK" target='blank' className="shop__icon">
           <Instagram />
          </a>
          <NavLink to="/contact" className="shop__icon shop__icon-mail">
            <Mail />
          </NavLink>
          <div className="navigation__toggle">
            <div
              className={`navigation__toggleLines ${showNavbar ? 'navigation__toggleLines--close' : ''}`}
              onClick={() => { handleShowNavbar(); }}
            >
              <div className="navigation__toggleLine"></div>
              <div className="navigation__toggleLine"></div>
              <div className="navigation__toggleLine"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;