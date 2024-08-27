import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'
import authRouter from "./routes/auth.js";
import flightRoute from "./routes/flight.js";
import bookingRoute from "./routes/booking.js"
import ticketRoute from "./routes/tickets.js";


const corsOptions = {
  origin: true,
};

const app = express();
const port = 4000;
dotenv.config();
app.use(express.json());
app.use(cors(corsOptions));
app.get('/', (req, res) => {
    res.send('Welcome to the Backend Server');
});
app.use(cors(corsOptions));
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


app.use("/api/v1/auth", authRouter);
app.use("/api/v1/flights", flightRoute);
app.use("/api/v1/bookings", bookingRoute);
app.use("/api/v1/tickets", ticketRoute);


app.listen(port, () => {
    connectDB();
    console.log(`Server started on port ${port}`);
});

