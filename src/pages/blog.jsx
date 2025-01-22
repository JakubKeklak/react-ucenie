import './blog.css'
import { useState } from 'react';
import { blogs } from '../data/blogs';
import Heading from '../components/typography/Heading';
import BlogWrapper from '../components/BlogWrapper';
import BlogCard from '../components/BlogCard';
import Button from '../components/button';
import SmallHero from '../components/SmallHero'

const Blog = () => {

  const uniqueCategories = [...new Set(blogs.map(blog => blog.category))];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredBlogs = selectedCategory === 'All' ? blogs : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <>
      <SmallHero
        title="Praktické rady od nás pre vás!"
        text="Na našom blogu sa s vami radi podelíme o skúsenosti nielen zo sveta palivového dreva, ale aj z oblasti poľnohospodárstva. 
        Či už hľadáte tipy na efektívne vykurovanie, rady pre starostlivosť o pôdu alebo pestovanie plodín, sme tu, aby sme vám pomohli. 
        Objavte užitočné informácie a inšpirujte sa našimi overenými postupmi."
        bgText="Rady a tipy"
      />
    <section className='blog container'>
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
    </section>
    </>
  );
}

export default Blog;
