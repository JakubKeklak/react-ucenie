import './ContentBlock.css';
import Heading from './typography/Heading';
import Text from './text';
import Image from './parts/Image';
import { motion } from "motion/react"

const ContentBlock = ({ children, imageRight }) => {
    const variant = imageRight ? 'content-block--image-right' : '';
    return (
        <section className={`content-block ${variant} `}>
            <div className='content-block__wrapper container'>
                <article className='content-block__content'>
                    <div className='content-block__heading'>
                        <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: '100%' }}
                            transition={{ duration: .5, delay: .5 }}
                            className='content-block__heading-line'></motion.div>
                        <Heading level={2}>Title</Heading>
                    </div>
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

                </article>
                <div className='content-block__image'>
                    <Image src="https://urobsisam.zoznam.sk/wp-content/uploads/2024/09/stiepacka-dreva-1.jpg" alt="" />
                </div>
            </div>
        </section>
    );
}

export default ContentBlock;