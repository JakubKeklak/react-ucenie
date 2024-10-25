import {useState} from 'react';
import { blogs } from '../data/blogs';
import BlogCard from '../components/BlogCard';

const Blog = () => {
  
  const uniqueCategories = [...new Set(blogs.map(blog => blog.category))];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredBlogs = selectedCategory === 'All' ? blogs : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <div className='container'>
      <h1>Blog</h1>
      <div className='blogs__category'>
        <div className='category' onClick={() => setSelectedCategory('All')}>
          Vsetky
        </div>
        {uniqueCategories.map((category, index) => (
          <div key={index} className='category' onClick={() => setSelectedCategory(category)}>
            {category}
          </div>
        ))}
      </div>
      <div className='blogs'>
        {filteredBlogs.map((blog, index) => (
        
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default Blog;
