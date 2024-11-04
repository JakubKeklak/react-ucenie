import './BlogCard.css';

const BlogCard = ({ blog, index }) => {
    return (
        <div className='blogcard' key={index}>
            <img src={blog.image} alt={blog.title} />
            <div className='blogcard__content'>
                <h3>{blog.title}</h3>
                <p>{blog.text}</p>
                <span  className='blogcard__bottom'>{blog.category}</span>
            </div>
        </div>
    );
    }

export default BlogCard;