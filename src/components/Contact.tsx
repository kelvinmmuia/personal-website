import { FC, useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const Contact: FC<{ id: string }> = ({ id }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Here you would typically send the form data to your backend
    // For now, we'll simulate a successful submission
    try {
      // Replace with actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      setStatus('error');
      // Reset status after 5 seconds
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section id={id} className="section contact">
      <div className="container">
        <h2 className="section-title">
          <span>04.</span> Get In Touch
        </h2>
        <div className="contact-content">
          <div className="contact-text">
            <p>
              I'm always interested in connecting with fellow data scientists, developers, and innovators. 
              Whether you have a project idea, want to collaborate, or just want to chat about data science 
              and web development, feel free to reach out!
            </p>
            <a href="mailto:kelvinmwakamuia@gmail.com" className="email-link">
              kelvinmwakamuia@gmail.com
            </a>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Your message here..."
              />
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                'Sending...'
              ) : (
                <>
                  Send Message <FaPaperPlane className="icon" />
                </>
              )}
            </button>
            
            {status === 'success' && (
              <div className="status-message success">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {status === 'error' && (
              <div className="status-message error">
                Oops! Something went wrong. Please try again later.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
