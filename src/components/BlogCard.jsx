import './BlogCard.css';
import Image from './parts/Image';
import Label from './parts/Label'

const BlogCard = ({ blog, index }) => {
    return (
        <div className='blogcard' key={index}>
            <div className='P'>
                <Image src={blog.image} alt={blog.title} />
            </div>
            <div className='blogcard__content'>
                <div className='blogcard__title'>{blog.title}</div>
                <p className='blogcard__text'>{blog.text}</p>
            </div>
            <div  className='blogcard__bottom'>
                <span  className='blogcard__category'>Citat viac</span> 
                <span  className='blogcard__readingTime'>10min citania</span>
            </div>
            <div className="blogcard__label">
                <Label>{blog.category}</Label>
            </div>
        </div>
    );
    }

export default BlogCard;