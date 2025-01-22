import './FaqsBlock.css'
import { motion } from "motion/react"

const FaqsBlock = () => {
    return (
        <section className="faqs-block">
            <div className="container faqs-block__wrapper">
                <ul className="faqs-block__list">
                    <li className='faqs__card'>
                        <span className='faqs__title'>1000ton</span>
                        <motion.p 
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: .5, delay: .2 }}
                            viewport={{ once: true }}
                        className='faqs__text'>
                            spracovaneho dreva
                        </motion.p>
                    </li>
                    <li className='faqs__card'>
                        <span className='faqs__title'>100ha</span>
                        <motion.p 
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: .5, delay: .4 }}
                            viewport={{ once: true }}
                        className='faqs__text'>
                            spracovanej ornej pody
                        </motion.p>
                    </li>
                    <li className='faqs__card'>
                        <span className='faqs__title'>200km</span>
                        <motion.p 
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: .5, delay: .6 }}
                            viewport={{ once: true }}
                        className='faqs__text'>
                            ocistenych cestnych komunikacii
                        </motion.p>
                    </li>
                    <li className='faqs__card'>
                        <span className='faqs__title'>500+</span>
                        <motion.p 
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: .5, delay: .8 }}
                            viewport={{ once: true }}
                        className='faqs__text'>
                            spokojnych zakaznikov
                        </motion.p>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default FaqsBlock;