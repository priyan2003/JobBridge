import express from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './utils/db.js';
import userRoute from './routes/user.route.js';
import companyRoute from './routes/company.route.js';
import jobRoute from './routes/job.route.js'
import applicationRoute from './routes/application.route.js'
import path from "path"
dotenv.config();
const app = express();

const _dirname = path.resolve();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin: 'https://jobbridge-priyanshu.onrender.com',
    credentials: true
}
app.use(cors(corsOptions));
const PORT = process.env.PORT || 5000;
app.use('/api/v1/application',applicationRoute);
// http://localhost:5000/api/v1/application/apply/:id
// http://localhost:5000/api/v1/application/get
// http://localhost:5000/api/v1/application/:id/applicants
// http://localhost:5000/api/v1/application/status/:id/update

app.use('/api/v1/job',jobRoute);
// http://localhost:5000/api/v1/job/post
// http://localhost:5000/api/v1/job/get
// http://localhost:5000/api/v1/job/getadminjobs
// http://localhost:5000/api/v1/job/get/:id
app.use('/api/v1/company',companyRoute)
// http://localhost:5000/api/v1/company/register
// http://localhost:5000/api/v1/company/get
// http://localhost:5000/api/v1/company/get/:id
// http://localhost:5000/api/v1/company/update/:id
app.use('/api/v1/user',userRoute);
// http://localhost:5000/api/v1/user/register
// http://localhost:5000/api/v1/user/login
// http://localhost:5000/api/v1/user/profile/update
app.use(express.static(path.join(_dirname,"/FrontEnd/dist")));
app.get('*',(req, res) => {
    res.sendFile(path.resolve(_dirname, "FrontEnd", "dist", "index.html"));
});
app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
})  