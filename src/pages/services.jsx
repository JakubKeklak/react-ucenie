import React from 'react';
import './services.css'
import ServicesDetailBlock from '../components/ServicesDetailBlock'
import { Link } from 'react-scroll';
import Button from '../components/button'
import Gallery from '../components/gallery'
import { slides } from '../data/slider'
import AnimatedHero from '../components/AnimatedHero';
import Text from '../components/text'
import Video from '../assets/video1.mp4'


const services = () => {
  return (
    <main className="services">
      <AnimatedHero
        data={slides}
        size="small"
        image="https://www.akershustraktor.no/wp-content/uploads/2021/03/Plog_servo_45_04-scaled.jpg"
        video={Video}
        title={
          <>
          Váš partner pre <br></br> teplo, pozemky aj okolie.
          </>
        }
      />
      <div className="services__navigation ">
        <ul className="container">
          <li><Link className="menuItem" to="vyroba-a-dovoz-stiepane-drevo" activeClass="menuItem--active-services" spy={true} offset={-70} smooth={true} >Palivove drevo</Link></li>
          <li><Link className="menuItem" to="komunalne-sluzby" activeClass="menuItem--active-services" spy={true} offset={-70} smooth={true} >Komunálne služby</Link></li>
          <li><Link className="menuItem" to="agro-sluzby" activeClass="menuItem--active-services" spy={true} offset={-70} smooth={true} >Agro služby</Link></li>
          <li><Link className="menuItem" to="dovoz-materialu" activeClass="menuItem--active-services" spy={true} offset={-70} smooth={true}>Dovoz materiálu</Link></li>
        </ul>
      </div>

      <ServicesDetailBlock
        id="vyroba-a-dovoz-stiepane-drevo"
        name="vyroba-a-dovoz-stiepane-drevo"
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
            <Button text="Zistit viac" variant="tertiary" url="/contact" />
            <Button text="Cennik" variant="tertiary" url="/cennik" />
          </>
        }
        gallery={<Gallery data={slides} />}
      />

      <ServicesDetailBlock
        id="komunalne-sluzby"
        name="komunalne-sluzby"
        index={2}
        title="KOMUNÁLNE SLUŽBY"
        text={
          <>
            <Text>
              lorem ipsum dolor is a dumy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
            <Text>
              lorem ipsum dolor is a dumy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
            <ul>
              <li>kosenie trávnatých plôch (parky, dvory, záhrady a iné plochy v trvalej údržbe)</li>
              <li>mulčovanie trvalo trávnatých plôch</li>
              <li>ošetrovanie okrasných krovín a stromov</li>
            </ul>
          </>
        }
        buttons={
          <>
            <Button text="Zistit viac" variant="tertiary" url="/contact" />

          </>
        }
        gallery={<Gallery data={slides} />}
      />

      <ServicesDetailBlock
        id="agro-sluzby"
        name="agro-sluzby"
        index={3}
        title="AGRO SLUŽBY"
        text={
          <>
            <Text>
              lorem ipsum dolor is a dumy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
            <ul>
              <li>príprava ornej pôdy</li>
              <li>osev obilnín</li>
              <li>výroba a spracovanie sena</li>
              <li>výroba a zber zemiakov</li>
            </ul>
          </>
        }
        buttons={
          <>
            <Button text="Zistit viac" variant="tertiary" url="/contact" />
          </>
        }
        gallery={<Gallery data={slides} />}
      />

      <ServicesDetailBlock
        id="dovoz-materialu"
        name="dovoz-materialu"
        index={4}
        title="DOVOZ MATERIALU"
        text={
          <>
            <Text>
              lorem ipsum dolor is a dumy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
            <Text>
              lorem ipsum dolor is a dumy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
            <ul>
              <li>dovoz stavebného materiálu</li>
            </ul>
          </>
        }
        buttons={
          <>
            <Button text="Zistit viac" variant="tertiary" url="/contact" />
          </>
        }
        gallery={<Gallery data={slides} />}
      />
    </main>
  );
}

export default services;