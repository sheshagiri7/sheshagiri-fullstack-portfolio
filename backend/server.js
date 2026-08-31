import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import apiRoutes from './routes/api.js';

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 5001;

// CORS configuration
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'http://127.0.0.1:5173',
  process.env.CLIENT_URL,
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. mobile apps, curl, Postman) or matched origins
      if (!origin || allowedOrigins.includes(origin) || process.env.NODE_ENV !== 'production') {
        callback(null, true);
      } else {
        callback(null, true); // Allow all for public portfolio API
      }
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

// Body parser
app.use(express.json({ limit: '10kb' }));

// Root route
app.get('/', (req, res) => {
  res.json({
    name: 'Sheshagiri S Portfolio API',
    status: 'online',
    version: '1.0.0',
    documentation: {
      health: 'GET /api/health',
      contact: 'POST /api/contact',
    },
  });
});

// API Routes
app.use('/api', apiRoutes);
app.use('/', apiRoutes); // Also support direct root routes /contact and /health for resilience

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found. Refer to GET / for available routes.',
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal server error occurred.',
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Portfolio backend server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
