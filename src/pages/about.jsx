import './about.css'
import ColoredWrapper from '../components/coloredWrapper'
import Button from '../components/button'
import Gallery from '../components/gallery'
import { slides } from '../data/slider'


const about = () => {
  return (
    <div className="about">
      <ColoredWrapper color="gray">
        <div className="detail container" >
          <div className="detail__content">
            <h1>Agro sluzby</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              elementum, odio nec tincidunt malesuada, enim purus bibendum nunc, nec
              tincidunt lacus felis nec nunc. Nullam nec ex nec purus sollicitudin
              fermentum. Sed auctor, odio
            </p>
            <ul className="detail__list">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Donec elementum, odio</li>
            </ul>
            <Button text="Zistit viac" variant="secondary" url="/contact"/>
          </div>
          <div className="detail__image">
           
              <Gallery data={slides}/>
            
        </div>
        </div>
      </ColoredWrapper>

      <ColoredWrapper >
        <div className="detail detail--twist container">
          <div className="detail__content">
            <h1>Agro sluzby</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              elementum, odio nec tincidunt malesuada, enim purus bibendum nunc, nec
              tincidunt lacus felis nec nunc. Nullam nec ex nec purus sollicitudin
              fermentum. Sed auctor, odio
            </p>
            <ul className="detail__list">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Donec elementum, odio</li>
            </ul>
            <Button text="Zistit viac" variant="secondary" url="/contact"/>
          </div>
          <div className="detail__image">
            <Gallery data={slides}/>
          </div>
        </div>
      </ColoredWrapper>

      <ColoredWrapper color="gray" id="vyroba-a-dovoz-stiepane-drevo">
        <div className="detail container" >
          <div className="detail__content">
            <h1>Drevo</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              elementum, odio nec tincidunt malesuada, enim purus bibendum nunc, nec
              tincidunt lacus felis nec nunc. Nullam nec ex nec purus sollicitudin
              fermentum. Sed auctor, odio
            </p>
            <ul className="detail__list">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Donec elementum, odio</li>
            </ul>
            <Button text="Zistit viac" variant="secondary" url="/contact"/>
          </div>
          <div className="detail__image">
            <Gallery data={slides}/>
          </div>
        </div>
      </ColoredWrapper>

      <ColoredWrapper>
        <div className="detail detail--twist container">
          <div className="detail__content">
            <h1>Agro sluzby</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              elementum, odio nec tincidunt malesuada, enim purus bibendum nunc, nec
              tincidunt lacus felis nec nunc. Nullam nec ex nec purus sollicitudin
              fermentum. Sed auctor, odio
            </p>
            <ul className="detail__list">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Donec elementum, odio</li>
            </ul>
            <Button text="Zistit viac" variant="secondary" url="/contact"/>
          </div>
          <div className="detail__image">
            <Gallery data={slides}/>
          </div>
        </div>
      </ColoredWrapper>

    </div>
  );
}

export default about;