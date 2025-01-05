import './ContentBlock.css';
import Heading from './typography/Heading';
import Text from './text';
import Image from './parts/Image';
import { motion } from "motion/react"

const ContentBlock = ({ children, imageRight }) => {
    const variant = imageRight ? 'content-block--image-right' : '';
    const smer = imageRight ? 100 : -100;
    return (
        <div className={`content-block ${variant} `}>
            <div className='content-block__wrapper container'>
                <motion.div
                    initial={{ opacity: 0, x: smer }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: .5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className='content-block__content'>
                    <div className='content-block__heading'>
                        <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: '100%' }}
                            transition={{ duration: .5, delay: 1 }}
                            
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

                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: smer * (-1) }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: .5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className='content-block__image'>
                    <Image src="https://urobsisam.zoznam.sk/wp-content/uploads/2024/09/stiepacka-dreva-1.jpg" alt="" />
                </motion.div>
            </div>
        </div>
    );
}

export default ContentBlock;