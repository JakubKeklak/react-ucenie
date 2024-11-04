import './ContentBlock.css';
import Heading from './typography/Heading';
import Text from './text';
import Image from './parts/Image';

const ContentBlock = ({ children,imageRight }) => {
    const variant = imageRight ? 'content-block--image-right' : '';
    return (
        <div className={`content-block ${variant} `}>
            <div className='content-block__wrapper container'>
                <div className='content-block__content'>
                    <Heading level={2}>Title</Heading>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla convallis libero nec metus convallis, auctor tincidunt
                        nunc fermentum. Nullam nec nunc nec nunc fermentum.
                    </Text>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla convallis libero nec metus convallis, auctor tincidunt
                        nunc fermentum. Nullam nec nunc nec nunc fermentum.
                    </Text>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla convallis libero nec metus convallis, auctor tincidunt
                        nunc fermentum. Nullam nec nunc nec nunc fermentum.
                    </Text>
                    
                </div>
                <div className='content-block__image'>
                    <Image src="https://urobsisam.zoznam.sk/wp-content/uploads/2024/09/stiepacka-dreva-1.jpg" alt="" />
                </div>
            </div>
        </div>
    );
}

export default ContentBlock;