import React, { useState, useEffect, useRef } from 'react';
import './gallery.css';
import Image from './parts/Image';

const Gallery = ({ data, variant }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [visibleCards, setVisibleCards] = useState(new Array(data.length).fill(false));
    const cardRefs = useRef([]);

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedImageIndex(null);
    };

    const showNextImage = (e) => {
        e.stopPropagation();
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const showPrevImage = (e) => {
        e.stopPropagation();
        setSelectedImageIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = cardRefs.current.indexOf(entry.target);
                        setVisibleCards((prevVisibleCards) => {
                            const newVisibleCards = [...prevVisibleCards];
                            newVisibleCards[index] = true;
                            return newVisibleCards;
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0 }
        );

        cardRefs.current.forEach((card) => {
            if (card) {
                observer.observe(card);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, [data.length]);

    return (
        <div className={`gallery ${variant ? 'gallery--row' : 'gallery--grid'}`} >
            {data.map((image, index) => (
                <div
                    key={index}
                    className={`gallery__card ${visibleCards[index] ? 'visible' : ''}`}
                    ref={(el) => (cardRefs.current[index] = el)}
                    onClick={() => handleImageClick(index)}
                >
                   
                    <Image src={image.image} alt={`gallery image ${index}`}  />
                </div>
            ))}

            {modalVisible && (
                <div className="gallery__modal" onClick={closeModal}>
                    <div className="gallery__modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="gallery__modal-close" onClick={closeModal}>&times;</span>
                        <Image src={data[selectedImageIndex].image} alt={selectedImageIndex} />
                        <div className="gallery__modal-navigation">
                            <button onClick={showPrevImage}></button>
                            <button onClick={showNextImage}></button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;