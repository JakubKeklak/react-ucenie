import React, { useState, useEffect, useRef } from 'react';
import './gallery.css';

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
                >
                    <img src={image.image} alt={`gallery image ${index}`} onClick={() => handleImageClick(index)} />
                </div>
            ))}

            {modalVisible && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={closeModal}>&times;</span>
                        <img src={data[selectedImageIndex].image} alt={selectedImageIndex} />
                        <div className="modal-navigation">
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