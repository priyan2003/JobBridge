import { Job } from "../models/job.model.js";
// ye admin post krega
export const postJob = async (req,res) =>{
    try {
        const {title,discription,requirements,salary,location,jobType,experience,position,companyId} = req.body;
        const userId = req.id;
        if(!title||!discription||!requirements||!salary||!location||!jobType||!position||!experience||!companyId){
            return res.status(400).json({
                mess: "Something is missing",
                success: false
            })
        }
        const job = await Job.create({
            title,
            discription,
            requirements:requirements.split(','),
            salary: Number(salary),
            location,
            jobType,
            experienceLevel : experience,
            position,
            company: companyId,
            created_by: userId
        })
        return res.status(200).json({
            mess: "New job created successfully",
            job,
            success: true
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const getAllJobs = async (req,res) => {
    try {
        const keyword = req.query.keyword || ""
        const query = {
            $or:[
                {title: {$regex:keyword,$options:"i"}},
                {discription: {$regex:keyword,$options:"i"}}
            ]
        }
        const jobs = await Job.find(query).populate({
            path: "company"
        });
        if(!jobs){
            return res.status(404).json({
                mess: "Job not found!!"
            })
        }
        return res.status(200).json({
            jobs,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}
// ye student ke liye
export const getJobById = async(req,res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path:"applications"
        });
        if(!job){
            return res.status(404).json({
                mess: "Job not found",
                success: false
            })
        }
        return res.status(200).json({
            job,
            success: true
        })
    } catch (error) {
        console.log(error);
        
    }
}
// admin kitni job create ki hai

export const getAdminJobs = async (req,res) => {
    try {
        const adminId = req.id;
        const jobs = await Job.find({created_by: adminId}).populate({
            path:'company'
        });
        if(!jobs){
            return res.status(404).json({
                mess: "Jobs not found",
                success: false
            })
        }
        return res.status(200).json({
            jobs,
            success: true
        })
    } catch (error) {
        console.log(error);
        
    }
}