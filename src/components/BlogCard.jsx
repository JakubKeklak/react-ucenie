import './BlogCard.css';

const BlogCard = ({ blog, index }) => {
    return (
        <div className='blogcard' key={index}>
        <img src={blog.image} alt={blog.title} />
        <h3>{blog.title}</h3>
        <p>{blog.text}</p>
        <span>{blog.category}</span>
        </div>
    );
    }

export default BlogCard;