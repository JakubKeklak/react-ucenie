import React, { useState, useEffect, useRef } from 'react';
import './gallery.css';
import Image from './parts/Image';

const Gallery = ({ data, variant }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    
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


    return (
        <div className={`gallery ${variant ? 'gallery--row' : 'gallery--grid'}`} >
            {data.map((image, index) => (
                <div
                    key={index}
                    className="gallery__card"
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
                            <button onClick={showPrevImage}>PREV</button>
                            <button onClick={showNextImage}>NEXT</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;