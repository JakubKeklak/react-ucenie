import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import './form.css'; // Add your CSS for styling the modal

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
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
                setResultMessage('Message sent successfully!');
                setModalVisible(true);
            }, (error) => {
                setResultMessage('Failed to send message, please try again.');
                setModalVisible(true);
            })
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Send</button>
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