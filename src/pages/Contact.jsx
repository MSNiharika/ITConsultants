import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission (e.g., send to backend)
  };

  return (
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-4xl font-semibold text-blue-800 mb-8">Contact Us</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        Ready to start your project? Get in touch with us to discuss your needs and how we can help you achieve your goals.
      </p>
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-4 mb-4 border-2 border-gray-300 rounded-lg"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-4 mb-4 border-2 border-gray-300 rounded-lg"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-4 mb-4 border-2 border-gray-300 rounded-lg"
          rows="6"
        />
        <button type="submit" className="bg-blue-800 hover:bg-blue-700 py-3 px-8 rounded-lg text-white">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;