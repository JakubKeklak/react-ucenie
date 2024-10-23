import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Button from './button';

import './form.css'; // Add your CSS for styling the modal

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
        gdpr: 'Suhlasim so spracovanim osobnych udajov, na ucel spatneho kontaktu.'
    });

    const [modalVisible, setModalVisible] = useState(false);
    const [resultMessage, setResultMessage] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.init("39ZQDLzz2zQW1ByIg");
        emailjs.sendForm('service_8ejd911', 'template_1qsgma7', e.target)
            .then((result) => {
                setResultMessage('Sprava sa uspesne odoslala. Dakujeme, budeme vas kontaktovat.');
                setModalVisible(true);
            }, (error) => {
                setResultMessage('Spravu sa nepodarilo odoslat, skuste to este raz prosim.');
                setModalVisible(true);
            })
        setFormData({
            name: '',
            phone: '',
            email: '',
            message: '',
            gdpr: 'Suhlasim so spracovanim osobnych udajov, na ucel spatneho kontaktu.'
        });
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <div className="form__wrapper">
            <form onSubmit={handleSubmit} >
                <div className='form__item'>
                    <label>Meno:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form__item'>
                    <label>Tel. cislo:</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder='+421 9...'
                        value={formData.phone}
                        onChange={handleChange}
                        
                    />
                </div>
                <div className='form__item'>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form__item'>
                    <label>Sprava:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form__checkbox'>
                    <input type="checkbox" name="gdpr" id="gdpr" required value={formData.gdpr}
                        onChange={handleChange}/>
                    <label for="gdpr">Suhlasim so spracovanim osobnych udajov, na ucel spatneho kontaktu.</label>
                </div>
                
                <Button text="Odoslat" variant="secondary" submit={true}/>
            </form>

            {modalVisible && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <p>{resultMessage}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactForm;