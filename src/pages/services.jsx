import './services.css'
import ServicesDetailBlock from '../components/ServicesDetailBlock'
import { HashLink } from 'react-router-hash-link';
import Button from '../components/button'
import Gallery from '../components/gallery'
import { slides } from '../data/slider'
import AnimatedHero from '../components/AnimatedHero';
import Text from '../components/text'


const services = () => {
  return (
    <main className="services">
      <AnimatedHero 
        data={slides} 
        size="small"
        image="https://www.illinoisbank.com/sites/default/files/0010_22_Farm_Labor4_Story_600X300.jpg"/>
        <div className="services__navigation ">
          <ul className="container">
            <li><HashLink className="menuItem" to="#vyroba-a-dovoz-stiepane-drevo" >Palivove drevo</HashLink></li>
            <li><HashLink className="menuItem" to="#komunalne-sluzby" >Komunálne služby</HashLink></li>
            <li><HashLink className="menuItem" to="#agro-sluzby" >Agro služby</HashLink></li>
            <li><HashLink className="menuItem" to="#dovoz-materialu" >Dovoz materiálu</HashLink></li>
          </ul>        
        </div>

        <ServicesDetailBlock
          id="vyroba-a-dovoz-stiepane-drevo"
          index={1}
          title="VÝROBA A DOVOZ ŠTIEPANÉHO DREVA"
          text={
            <>
              <Text>
                lorem ipsum dolor is a dumy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </Text>
              
              <ul>
                <li>mäkké štiepané palivové drevo</li>
                <li>tvrdé štiepané palivové drevo</li>
                <li>dovoz štiepaného palivového dreva</li>
              </ul>
              <Text>
                lorem ipsum dolor is a dumy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </Text>
            </>
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
          index={2}
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
          index={3}
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
          index={4}
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