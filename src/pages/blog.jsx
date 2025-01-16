import './blog.css'
import { useState } from 'react';
import { blogs } from '../data/blogs';
import Heading from '../components/typography/Heading';
import BlogWrapper from '../components/BlogWrapper';
import BlogCard from '../components/BlogCard';
import Button from '../components/button';
import { motion } from "framer-motion"
const Blog = () => {

  const uniqueCategories = [...new Set(blogs.map(blog => blog.category))];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredBlogs = selectedCategory === 'All' ? blogs : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <div className='blog container'>
      <Heading>Zaujimavosti</Heading>
      <div className='blog__category'>
        <Button text="Vsetky" buttonFunction={() => setSelectedCategory('All')} variant="secondary" activeButton={selectedCategory === 'All' ? 'active' : ''} />
        {uniqueCategories.map((category, index) => (
          <Button text={category} buttonFunction={() => setSelectedCategory(category)} variant="secondary" key={index} activeButton={selectedCategory === category ? 'active' : ''} />
        ))}
      </div>
      <BlogWrapper>
        {filteredBlogs.map((blog, index) => (
          <BlogCard blog={blog} index={index} />
        ))}
      </BlogWrapper>
    </div>
  );
}

export default Blog;
