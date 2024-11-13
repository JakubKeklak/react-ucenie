import './BlogCard.css';
import Image from './parts/Image';

const BlogCard = ({ blog, index }) => {
    return (
        <div className='blogcard' key={index}>
            <div className='blogcard__image'>
                <Image src={blog.image} alt={blog.title} />
            </div>
            <div className='blogcard__content'>
                <div className='blogcard__title'>{blog.title}</div>
                <p className='blogcard__text'>{blog.text}</p>
                <div  className='blogcard__bottom'>
                    <span  className='blogcard__category'>{blog.category}</span> 
                    <span  className='blogcard__readingTime'>10min citania</span>
                </div>
            </div>
        </div>
    );
    }

export default BlogCard;