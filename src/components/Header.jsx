import { useState, useEffect } from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';
import { links } from '../data/links';

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container container">
        <div className="navigation__logo">
          <span>Drevo</span>
          <span> a </span>
          <span>Sluzby</span>
        </div>
        <nav className="navigation">
          <ul className={`navigation__menuItems ${showNavbar ? 'navigation__menuItems--show' : ''}`}>
            {links.filter(link => link.navlink).map((link) => {
              return (
                <li key={link.id}>
                  <NavLink
                    className="menuItem"
                    to={link.url}
                    exact
                    activeClassName="menuItem--active"
                  >
                    {link.name}
                  </NavLink>
                </li>
              )
            })}
          </ul>
          <div className="navigation__toggle">
            <div
              className={`navigation__toggleLines ${showNavbar ? 'navigation__toggleLines--close' : ''}`}
              onClick={handleShowNavbar}
            >
              <div className="navigation__toggleLine"></div>
              <div className="navigation__toggleLine"></div>
              <div className="navigation__toggleLine"></div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;