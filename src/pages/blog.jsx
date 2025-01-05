import './blog.css'
import { useState } from 'react';
import { blogs } from '../data/blogs';
import Heading from '../components/typography/Heading';
import BlogWrapper from '../components/BlogWrapper';
import BlogCard from '../components/BlogCard';
import Button from '../components/button';
import { motion } from "motion/react"
const Blog = () => {

  const uniqueCategories = [...new Set(blogs.map(blog => blog.category))];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredBlogs = selectedCategory === 'All' ? blogs : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0  }}
      whileInView={{  opacity: 1 }}
      transition={{ duration: .3 }}
      viewport={{ once: true }}
      className='blog container'>
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
    </motion.div>
  );
}

export default Blog;
