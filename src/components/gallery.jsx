import React, { useState } from 'react';
import './gallery.css';

const Gallery = ({ data }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

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
        <div className='gallery'>
            {data.slice(0, 4).map((image, index) => (
                <div key={index} className='gallery__card'>
                    <img src={image.image} alt={`gallery image ${index}`}  onClick={() => handleImageClick(index)}/>
                </div>
            ))}

            {modalVisible && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={closeModal}>&times;</span>
                        <img src={data[selectedImageIndex].image} alt={selectedImageIndex} />
                        <div className="modal-navigation">
                            <button onClick={showPrevImage}>Prev</button>
                            <button onClick={showNextImage}>Next</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;