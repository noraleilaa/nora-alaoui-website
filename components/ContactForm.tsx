// components/ContactForm.tsx
'use client';

import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-gray-700 text-sm mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400 text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-700 text-sm mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400 text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-gray-700 text-sm mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400 text-sm"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-900 transition-colors text-sm"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;