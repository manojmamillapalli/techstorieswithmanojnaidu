import React, { useState } from "react";
import "./HireMe.css";

// Firebase imports
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function HireMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    position: "",
    jobType: "",
    message: "",
    budget: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Save data to Firebase Firestore
      await addDoc(collection(db, "hireRequests"), {
        ...formData,
        createdAt: serverTimestamp()
      });

      setSubmitStatus("success");

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        position: "",
        jobType: "",
        message: "",
        budget: ""
      });

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);

    } catch (error) {
      console.error("Error saving data:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="hire-me" className="hire-me-section">
      <div className="hire-me-container">
        
        {/* Left Section */}
        <div className="hire-me-left">
          <h2 className="hire-me-title">Ready to Hire?</h2>
          <p className="hire-me-subtitle">
            Let's build something amazing together. I'm available for full-time, part-time, and contract opportunities.
          </p>

          <div className="availability-status">
            <div className="status-indicator"></div>
            <span><strong>Available for new opportunities</strong></span>
          </div>

          <div className="hire-me-highlights">
            <div className="highlight-item">
              <svg className="highlight-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>1+ years of software development experience</span>
            </div>
            <div className="highlight-item">
              <svg className="highlight-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Expertise in full-stack development</span>
            </div>
            <div className="highlight-item">
              <svg className="highlight-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>system design & API designing</span>
            </div>
            <div className="highlight-item">
              <svg className="highlight-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Remote & on-site availability</span>
            </div>
          </div>

          <div className="direct-contact">
            <a href="mailto:manojmamillapalli156@gmail.com" className="contact-item">
              <svg className="contact-icon" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <div className="contact-info">
                <div className="contact-label">Email</div>
                <div className="contact-value">manojmamillapalli156@gmail.com</div>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/mamillapallimanojnaidu/" target="_blank" rel="noopener noreferrer" className="contact-item">
              <svg className="contact-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <div className="contact-info">
                <div className="contact-label">LinkedIn</div>
                <div className="contact-value">Connect Professionally</div>
              </div>
            </a>

            <a href="tel:+919876543210" className="contact-item">
              <svg className="contact-icon" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <div className="contact-info">
                <div className="contact-label">Phone</div>
                <div className="contact-value">+91 7815956343</div>
              </div>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="hire-me-right">
          <h3 className="contact-form-title">Let's Discuss Your Project</h3>
          <p className="contact-form-subtitle">
            Fill out the form below and I'll get back to you within 24 hours.
          </p>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div style={{
              padding: '15px',
              marginBottom: '20px',
              backgroundColor: '#d4edda',
              border: '1px solid #c3e6cb',
              borderRadius: '8px',
              color: '#155724'
            }}>
              ✅ <strong>Message sent successfully!</strong> Your inquiry has been received.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div style={{
              padding: '15px',
              marginBottom: '20px',
              backgroundColor: '#f8d7da',
              border: '1px solid #f5c6cb',
              borderRadius: '8px',
              color: '#721c24'
            }}>
              ❌ <strong>Something went wrong.</strong> Please try again.
            </div>
          )}

          {/* Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                  placeholder="John Doe"
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                  placeholder="john@company.com"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your Company"
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Position/Role</label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="e.g. Senior Full Stack Developer"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Job Type</label>
                <select
                  name="jobType"
                  value={formData.jobType}
                  onChange={handleChange}
                  className="form-select"
                  disabled={isSubmitting}
                >
                  <option value="">Select job type</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Freelance">Freelance</option>
                  <option value="Consultation">Consultation</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="form-select"
                  disabled={isSubmitting}
                >
                  <option value="">Select budget range</option>
                  <option value="₹5-10L">₹5-10L per annum</option>
                  <option value="₹10-15L">₹10-15L per annum</option>
                  <option value="₹15-25L">₹15-25L per annum</option>
                  <option value="₹25L+">₹25L+ per annum</option>
                  <option value="Project-based">Project-based</option>
                  <option value="Let's discuss">Let's discuss</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Project Details *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                required
                placeholder="Tell me about the project, technologies needed, timeline, and any specific requirements..."
                disabled={isSubmitting}
              />
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
              style={{
                opacity: isSubmitting ? 0.7 : 1,
                cursor: isSubmitting ? 'not-allowed' : 'pointer'
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message & Get Response'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
