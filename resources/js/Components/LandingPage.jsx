import React, { useState } from 'react';
import axios from 'axios';

const LandingPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/subscribe', formData);
            setMessage(response.data.message);
            setFormData({ name: '', email: '' });
        } catch (error) {
            setMessage('Subscription failed. Try again.');
        }
    };

    return (
        <div className="absolute left-  top-20 maxx-h-screen bg-gray-800 text-white flex items-center justify-center">
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-2xl">
                <h1 className="text-3xl font-bold mb-4">Subscribe Now to Our Newsletter</h1>
                <p className="text-gray-400 mb-6">
                    Stay updated with the latest news and updates. Enter your name and email below.
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-400">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-gray-700 text-white"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-gray-700 text-white"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-4 rounded"
                    >
                        Send
                    </button>
                </form>
                {message && <p className="mt-4">{message}</p>}
            </div>
        </div>
    );
};

export default LandingPage;
