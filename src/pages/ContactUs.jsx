import { useState } from 'react';
import './ContactUs.css'; 

function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setShowSuccess(false), 3000); // Hide popup after 3s
  };

  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Enter your message"
          rows="4"
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>

      {showSuccess && (
        <div className="popup-message">Message delivered successfully</div>
      )}
    </div>
  );
}

export default ContactUs;
