import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from "./routes/auth.js";
import flightRoute from "./routes/flight.js";
import bookingRoute from "./routes/booking.js"

const app = express();
const port = 4841;
dotenv.config();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Welcome to the Backend Server');
});

// Encode password special characters
const password = encodeURIComponent('Abhijith@12345');

// Correct MongoDB connection string format
const uri = `mongodb+srv://abhijithgoud757:${password}@airline.hjeq4bt.mongodb.net/?retryWrites=true&w=majority&appName=Airline`;


const connectDB = async () => {
    try {
      await mongoose.connect(uri);
      console.log(`MongoDB connected`);
    } catch (error) {
      console.error("MongoDB connection error:", error);
    }
  };


app.use('/api', authRouter);
app.use("/api", flightRoute);
app.use("/api", bookingRoute);

app.listen(port, () => {
    connectDB();
    console.log(`Server started on port ${port}`);
});

