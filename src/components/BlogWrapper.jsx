import './BlogWrapper.css';
import Heading from './typography/Heading';
import Button from './button';

const BlogWrapper = ({ children, title, buttonText,buttonUrl  }) => {
    return (
        <div className='blog-wrapper'>
            <div className='blog-wrapper__header'>
                {title &&
                    <Heading tag="h2">{title}</Heading>
                }
                {buttonText &&
                    <Button variant="primary" text={buttonText} url={buttonUrl}>View all</Button>
                }
            </div>
            <div className='blog-wrapper__cards'>
                {children}
            </div>
        </div>
    );
}

export default BlogWrapper;