import './footer.css'
import { ReactComponent as Facebook } from '../svg/facebook.svg'
import Button from './button'
const Footer = () => {
  return (
    <footer>
      <div className="footer__content container" >
          <div className='footer__top'>
            <hr className="footer__divider" />
            <span className="footer__logo">drevoasluzby</span>
            <hr className="footer__divider" />
          </div>
          <div className='footer__middle'>
            <div className='footer__services'>
              <p className='footer__title'>Naše služby</p>
              <ul className='footer__list'>
                <li><a href="/agro-sluzby">Agro služby</a></li>
                <li><a href="/komunalne-sluzby">Komunálne služby</a></li>
                <li><a href="/vyroba-a-dovoz-stiepane-drevo">Výroba a dovoz štiepaného dreva</a></li>
              </ul>
            </div>
            <div className='footer__contact'>
            <p className="footer__title">Kontakt</p>
              <ul className='footer__list'>
                <li><span>Ladislav Cajko</span></li>
                <li><span>ICO:</span><span>45852 3547</span></li>
                <li><span>DIC:</span><span>4569 3254</span></li>
                <li><span>Tel. kontakt:</span><span>+421 907 096 333</span></li>
                <li><span>Mail:</span><span>drevoasluzby@gmail.com</span></li>
              </ul>
            </div>
            <div className='footer__social'>
              
              <Button variant="secondary" text="Kontaktný formulár" url="/contact"/>
            </div>
          </div>
          <hr className="footer__divider" />
          <div className='footer__bottom'>
            <p>&copy; 2023 Drevo a služby</p>
          </div>
      </div>
    </footer>
  );
}

export default Footer;