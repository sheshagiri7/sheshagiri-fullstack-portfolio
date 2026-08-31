import mongoose from 'mongoose';
import Contact from '../models/Contact.js';

// Simple email regex for controller-level pre-validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * @desc    Submit a new contact message
 * @route   POST /api/contact
 * @access  Public
 */
export const submitContact = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid name.',
      });
    }

    if (!email || typeof email !== 'string' || !email.trim()) {
      return res.status(400).json({
        success: false,
        error: 'Please provide an email address.',
      });
    }

    if (!EMAIL_REGEX.test(email.trim())) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address format (e.g. name@example.com).',
      });
    }

    if (!subject || typeof subject !== 'string' || !subject.trim()) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a subject for your message.',
      });
    }

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a message body.',
      });
    }

    // Check if MongoDB is connected
    if (mongoose.connection.readyState !== 1) {
      console.warn('⚠️  Contact submission attempted but MongoDB is not connected.');
      return res.status(503).json({
        success: false,
        error: 'Database service is currently unavailable. Please verify MONGODB_URI configuration.',
      });
    }

    // Create and save the contact message
    const newContact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
    });

    return res.status(201).json({
      success: true,
      message: 'Thank you for reaching out! Your message has been saved successfully.',
      data: {
        id: newContact._id,
        name: newContact.name,
        email: newContact.email,
        subject: newContact.subject,
        createdAt: newContact.createdAt,
      },
    });
  } catch (error) {
    console.error('Contact Submission Error:', error);

    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: messages.join(', '),
      });
    }

    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred while processing your message.',
    });
  }
};

/**
 * @desc    Get API health & database status
 * @route   GET /api/health
 * @access  Public
 */
export const getHealth = async (req, res) => {
  const dbStatus = ['Disconnected', 'Connected', 'Connecting', 'Disconnecting'][
    mongoose.connection.readyState
  ] || 'Unknown';

  res.status(200).json({
    status: 'ok',
    service: 'Sheshagiri S Portfolio API',
    database: dbStatus,
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
};
