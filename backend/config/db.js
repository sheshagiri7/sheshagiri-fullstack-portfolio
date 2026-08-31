import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connString = process.env.MONGODB_URI;
    if (!connString) {
      console.warn('⚠️  MONGODB_URI is not defined in environment variables. Database features will not persist.');
      return;
    }

    const conn = await mongoose.connect(connString);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    // Do not crash the entire process immediately in dev so health checks can still be inspected,
    // but log explicit troubleshooting instructions.
    console.error('ℹ️  Ensure your MONGODB_URI in .env is correct and IP whitelist in MongoDB Atlas is enabled.');
  }
};

export default connectDB;
