import express from 'express';
import dotenv from 'dotenv';
import router from './routes/api.route.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { connectDB } from './db/connectDB.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use('/api/auth', router);
app.use("/uploads", express.static("uploads"));
app.listen(3001, () => {
    connectDB();
    console.log('Server is running on port 3001');
});

