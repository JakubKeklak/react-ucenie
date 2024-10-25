import './services.css'
import ServicesDetailBlock from '../components/ServicesDetailBlock'
import Button from '../components/button'
import Gallery from '../components/gallery'
import { slides } from '../data/slider'


const services = () => {
  return (
    <main className="services">
        <div className="services__navigation container">
          <ul>
            <li><a className="menuItem" href="#vyroba-a-dovoz-stiepane-drevo">Palivove drevo</a></li>
            <li><a className="menuItem" href="#komunalne-sluzby">Komunálne služby</a></li>
            <li><a className="menuItem" href="#agro-sluzby">Agro služby</a></li>
            <li><a className="menuItem" href="#dovoz-materialu">Dovoz materiálu</a></li>
          </ul>        
        </div>

        <ServicesDetailBlock
          id="vyroba-a-dovoz-stiepane-drevo"
          title="VÝROBA A DOVOZ ŠTIEPANÉHO DREVA"
          text={
            <ul>
              <li>mäkké štiepané palivové drevo</li>
              <li>tvrdé štiepané palivové drevo</li>
              <li>dovoz štiepaného palivového dreva</li>
            </ul>
          }
          buttons={
            <>
              <Button text="Zistit viac" variant="tertiary" url="/contact"/>
              <Button text="Cennik" variant="tertiary" url="/cennik"/>
            </>
          }
          gallery={<Gallery data={slides}/>}
        />

        <ServicesDetailBlock
          id="komunalne-sluzby"
          title="KOMUNÁLNE SLUŽBY"
          text={
            <ul>
              <li>kosenie trávnatých plôch (parky, dvory, záhrady a iné plochy v trvalej údržbe)</li>
              <li>mulčovanie trvalo trávnatých plôch</li>
              <li>ošetrovanie okrasných krovín a stromov</li>
            </ul>
          }
          buttons={
            <>
              <Button text="Zistit viac" variant="tertiary" url="/contact"/>
              <Button text="Cennik" variant="tertiary" url="/cennik"/>
            </>
          }
          gallery={<Gallery data={slides}/>}
        />

        <ServicesDetailBlock
          id="agro-sluzby"
          title="AGRO SLUŽBY"
          text={
            <ul>
              <li>príprava ornej pôdy</li>
              <li>osev obilnín</li>
              <li>výroba a spracovanie sena</li>
              <li>výroba a zber zemiakov</li>
            </ul>
          }
          buttons={
            <>
              <Button text="Zistit viac" variant="tertiary" url="/contact"/>
              <Button text="Cennik" variant="tertiary" url="/cennik"/>
            </>
          }
          gallery={<Gallery data={slides}/>}
        />

        <ServicesDetailBlock
          id="dovoz-materialu"
          title="DOVOZ MATERIALU"
          text={
            <ul>
              <li>dovoz stavebného materiálu</li>
            </ul>
          }
          buttons={
            <>
              <Button text="Zistit viac" variant="tertiary" url="/contact"/>
              <Button text="Cennik" variant="tertiary" url="/cennik"/>
            </>
          }
          gallery={<Gallery data={slides}/>}
        />
    </main>
  );
}

export default services;