import express from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './utils/db.js';
import userRoute from './routes/user.route.js';
import companyRoute from './routes/company.route.js';
import jobRoute from './routes/job.route.js'
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
app.use('/api/v1/job',jobRoute);
// http://localhost:5000/api/v1/job/post
// http://localhost:5000/api/v1/job/get
// http://localhost:5000/api/v1/job/getadminjobs
// http://localhost:5000/api/v1/job/get/:id
app.use('/api/v1/company',companyRoute)
// http://localhost:5000/api/v1/company/register
// http://localhost:5000/api/v1/company/get
// http://localhost:5000/api/v1/company/get/:id
// http://localhost:5000/api/v1/company//update/:id
app.use('/api/v1/user',userRoute);
// http://localhost:5000/api/v1/user/register
// http://localhost:5000/api/v1/user/login
// http://localhost:5000/api/v1/user/profile/update
app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
})  