import Hero from '../components/Hero'
import { slides } from "../data/slider";
import Gallery from '../components/gallery';
const about = () => {
  return (
    <div>
      <h1>About Page</h1>
      {slides.aboutpage &&
      
      <Gallery data={slides.aboutpage} />
      }
    </div>
  );
}

export default about;