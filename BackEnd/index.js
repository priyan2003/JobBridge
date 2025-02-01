import express from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './utils/db.js';
import useRoute from './routes/user.route.js'
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin: 'http//localhost:5173',
    Credentials: true
}
app.use(cors(corsOptions));
const PORT = process.env.PORT || 5000;
app.use('/api/v1/user',useRoute);
// http://localhost:5000/api/v1/user/register
// http://localhost:5000/api/v1/user/login
// http://localhost:5000/api/v1/user/profile/update
app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
}) 