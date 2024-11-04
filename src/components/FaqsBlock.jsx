import './FaqsBlock.css'

const FaqsBlock = () => {
    return (
        <div className="faqs-block">
            <div className="container">
                <div className="faqs-block__wrapper">
                    <div className='faqs__card'>
                        <span className='faqs__title'>1000ton</span>
                        <p className='faqs__text'>
                            spracovaneho dreva
                        </p>
                    </div>
                    <div className='faqs__card'>
                        <span className='faqs__title'>100ha</span>
                        <p className='faqs__text'>
                            spracovanej ornej pody
                        </p>
                    </div>
                    <div className='faqs__card'>
                        <span className='faqs__title'>200km</span>
                        <p className='faqs__text'>
                            ocistenych cestnych komunikacii
                        </p>
                    </div>
                    <div className='faqs__card'>
                        <span className='faqs__title'>500+</span>
                        <p className='faqs__text'>
                            spokojnych zakaznikov
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FaqsBlock;