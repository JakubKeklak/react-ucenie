import './about.css'
import ColoredWrapper from '../components/coloredWrapper'
import Button from '../components/button'
import Gallery from '../components/gallery'
import { slides } from '../data/slider'


const about = () => {
  return (
    <div className="about">
      
        <div className="detail container">
          <div className="detail__content">
            <h1>VÝROBA A DOVOZ ŠTIEPANÉHO DREVA</h1>
            
            <ul className="detail__list">
              <li>mäkké štiepané palivové drevo</li>
              <li>tvrdé štiepané palivové drevo</li>
              <li>dovoz štiepaného palivového dreva</li>
            </ul>
            <Button text="Zistit viac" variant="tertiary" url="/contact"/>
            <Button text="Cennik" variant="tertiary" url="/cennik"/>
          </div>
          <div className="detail__image">
              <Gallery data={slides}/>
          </div>
        </div>

        <ColoredWrapper color="gray" />

        <div className="detail detail--twist container">
          <div className="detail__content">
            <h1>KOMUNÁLNE SLUŽBY</h1>
            <ul className="detail__list">
              <li>kosenie trávnatých plôch (parky, dvory, záhrady a iné plochy v trvalej údržbe)</li>
              <li>mulčovanie trvalo trávnatých plôch</li>
              <li>ošetrovanie okrasných krovín a stromov</li>
            </ul>
            <Button text="Zistit viac" variant="tertiary" url="/contact"/>
          </div>
          <div className="detail__image">
            <Gallery data={slides}/>
          </div>
        </div>

        <ColoredWrapper color="gray" />

        <div className="detail container" id="vyroba-a-dovoz-stiepane-drevo">
          <div className="detail__content">
            <h1>AGRO SLUŽBY</h1>
            <ul className="detail__list">
              <li>príprava ornej pôdy</li>
              <li>osev obilnín</li>
              <li>výroba a spracovanie sena</li>
              <li>výroba a zber zemiakov</li>
            </ul>
            <Button text="Zistit viac" variant="tertiary" url="/contact"/>
          </div>
          <div className="detail__image">
            <Gallery data={slides}/>
          </div>
        </div>
        
        <ColoredWrapper color="gray" />
        
        <div className="detail detail--twist container">
          <div className="detail__content">
            <h1>DOVOZ MATERIALU</h1>
            <ul className="detail__list">
              <li>dovoz stavebného materiálu</li>
            </ul>
            <Button text="Zistit viac" variant="tertiary" url="/contact"/>
          </div>
          <div className="detail__image">
            <Gallery data={slides}/>
          </div>
        </div>
    </div>
  );
}

export default about;