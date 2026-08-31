import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Mail, Briefcase, Loader2 } from 'lucide-react';
import { PROFILE } from '../data/profile';

const getContactEndpoint = () => {
  let base = (import.meta.env.VITE_API_URL || '/api').trim();
  base = base.replace(/\/+$/, '');
  if (!base.endsWith('/api')) {
    base = `${base}/api`;
  }
  return `${base}/contact`;
};

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [fieldErrors, setFieldErrors] = useState({});
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      errors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      errors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address (e.g. name@example.com).';
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Please enter a subject.';
    }

    if (!formData.message.trim()) {
      errors.message = 'Please write your message.';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long.';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: null }));
    }

    if (status.error) {
      setStatus((prev) => ({ ...prev, error: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    try {
      const endpoint = getContactEndpoint();

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to deliver message. Please check backend service.');
      }

      setStatus({
        submitting: false,
        success: true,
        error: null,
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setFieldErrors({});
    } catch (err) {
      console.error('Contact Form Error:', err);
      setStatus({
        submitting: false,
        success: false,
        error: err.message || 'Unable to connect to the backend server. Please verify backend is running.',
      });
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">Get in Touch</div>
          <h2 className="section-title">Contact & Communication</h2>
          <p className="section-subtitle">
            Have a project idea, technical question, or collaboration in mind? Feel free to get in touch.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info Panel */}
          <div className="contact-info-panel surface-card">
            <h3 className="info-title">Let's Connect</h3>
            <p className="info-desc">
              Have a project idea, technical question, or collaboration in mind? Feel free to get in touch.
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon-box">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="info-label">Direct Email</div>
                  <a href={`mailto:${PROFILE.email}`} className="info-value">
                    {PROFILE.email}
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-box">
                  <Briefcase size={20} />
                </div>
                <div>
                  <div className="info-label">Current Role</div>
                  <div className="info-value">{PROFILE.currentRole}</div>
                </div>
              </div>
            </div>

            <div className="integration-notice">
              <span className="notice-label">API Integration Status</span>
              <p className="notice-text">
                Form submissions are sent to the Express.js backend and saved to MongoDB.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-panel surface-card">
            {/* Success State Alert */}
            {status.success && (
              <div className="alert-box alert-success" role="alert">
                <CheckCircle2 size={20} className="alert-icon" />
                <div>
                  <h4 className="alert-title">Message Received!</h4>
                  <p className="alert-body">
                    Thank you! Your message has been saved to the database. I will review it and reply soon.
                  </p>
                </div>
              </div>
            )}

            {/* Error State Alert */}
            {status.error && (
              <div className="alert-box alert-error" role="alert">
                <AlertCircle size={20} className="alert-icon" />
                <div>
                  <h4 className="alert-title">Submission Notice</h4>
                  <p className="alert-body">{status.error}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-row">
                {/* Name Field */}
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name <span className="req-star">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Smith"
                    className={`form-input ${fieldErrors.name ? 'input-error' : ''}`}
                    disabled={status.submitting}
                  />
                  {fieldErrors.name && <span className="field-error-msg">{fieldErrors.name}</span>}
                </div>

                {/* Email Field */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address <span className="req-star">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@example.com"
                    className={`form-input ${fieldErrors.email ? 'input-error' : ''}`}
                    disabled={status.submitting}
                  />
                  {fieldErrors.email && <span className="field-error-msg">{fieldErrors.email}</span>}
                </div>
              </div>

              {/* Subject Field */}
              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject <span className="req-star">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Project Inquiry / Discussion"
                  className={`form-input ${fieldErrors.subject ? 'input-error' : ''}`}
                  disabled={status.submitting}
                />
                {fieldErrors.subject && <span className="field-error-msg">{fieldErrors.subject}</span>}
              </div>

              {/* Message Field */}
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message Body <span className="req-star">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please write your inquiry or message here..."
                  className={`form-input form-textarea ${fieldErrors.message ? 'input-error' : ''}`}
                  disabled={status.submitting}
                />
                {fieldErrors.message && <span className="field-error-msg">{fieldErrors.message}</span>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary form-submit-btn"
                disabled={status.submitting}
              >
                {status.submitting ? (
                  <>
                    <Loader2 size={18} className="spinner" />
                    <span>Processing Submission...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr 1.5fr;
            align-items: start;
          }
        }

        .contact-info-panel {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .info-title {
          font-size: 1.375rem;
          font-weight: 700;
          color: var(--white);
        }

        .info-desc {
          font-size: 0.9375rem;
          line-height: 1.7;
          color: var(--text-secondary);
        }

        .info-items {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          padding: 1.25rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .info-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          min-width: 40px;
          background-color: var(--blue-tint);
          border: 1px solid var(--blue-border);
          color: var(--white);
          border-radius: var(--radius-sm);
        }

        .info-label {
          font-size: 0.75rem;
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          margin-bottom: 0.15rem;
        }

        .info-value {
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--white);
        }

        .integration-notice {
          background-color: rgba(255, 255, 255, 0.02);
          border-left: 3px solid var(--blue);
          padding: 1rem;
          border-radius: var(--radius-sm);
        }

        .notice-label {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--blue);
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 0.25rem;
        }

        .notice-text {
          font-size: 0.8125rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin: 0;
        }

        .contact-form-panel {
          padding: 2rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        @media (min-width: 600px) {
          .form-row {
            grid-template-columns: 1fr 1fr;
          }
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-label {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--white);
        }

        .req-star {
          color: var(--blue);
        }

        .form-input {
          width: 100%;
          background-color: rgba(15, 23, 42, 0.6);
          border: 1px solid var(--border-light);
          color: var(--white);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          font-family: var(--font-sans);
          font-size: 0.9375rem;
          transition: border-color var(--transition-fast), background-color var(--transition-fast);
        }

        .form-input:focus {
          outline: none;
          border-color: var(--blue);
          background-color: rgba(15, 23, 42, 0.9);
          box-shadow: 0 0 0 2px var(--blue-glow);
        }

        .form-input.input-error {
          border-color: var(--white);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .field-error-msg {
          font-size: 0.75rem;
          color: var(--white);
          font-family: var(--font-mono);
          opacity: 0.9;
        }

        .form-submit-btn {
          margin-top: 0.5rem;
          width: 100%;
          padding: 0.875rem 1.5rem;
        }

        @media (min-width: 600px) {
          .form-submit-btn {
            width: auto;
            align-self: flex-start;
          }
        }

        /* Strict 3-color Alert System */
        .alert-box {
          display: flex;
          gap: 0.875rem;
          padding: 1.125rem;
          border-radius: var(--radius-md);
          margin-bottom: 1.5rem;
          border: 1px solid var(--blue-border);
          background-color: var(--blue-tint);
          color: var(--white);
        }

        .alert-icon {
          color: var(--blue);
          min-width: 20px;
          margin-top: 2px;
        }

        .alert-title {
          font-size: 0.9375rem;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 0.25rem;
        }

        .alert-body {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin: 0;
        }

        .alert-error {
          border-color: var(--border-hover);
          background-color: rgba(255, 255, 255, 0.05);
        }

        .alert-error .alert-icon {
          color: var(--white);
        }

        .spinner {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
