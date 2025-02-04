import { populate } from 'dotenv';
import {Application} from '../models/application.model.js'
import {Job} from '../models/job.model.js'

// for student
export const applyJob = async (req,res) => {
    try {
        const userId = req.id;
        const jobId = req.params.id;
        if(!jobId){
            return res.status(404).json({
                mess: "Job Id is required!!",
                success: false
            })
        }
        // check if user is already applied or not;
        const existingApplication = await Application.findOne({job: jobId,applicant:userId});
        if(existingApplication) {
            return res.status(400).json({
                mess: "You already applied",
                success: false
            })
        }
        // check job exist or not
        const job = await Job.findById(jobId);
        if(!job){
            return res.status(404).json({
                mess:"Job not found",
                success: false
            })
        }
        if (!job.applications) {
            job.applications = [];
        }
        // create a new application
        const newApplication = await Application.create({
            job: jobId,
            applicant: userId
        })
        
        job.applications.push(newApplication._id);
        await job.save();
        return res.status(201).json({
            mess: "Job Applied successfully",
            newApplication,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}
// Here student can find their applied jobs
export const getAppliedJobs = async (req,res) => {
    try {
        const userId = req.id;
        const applications = await Application.find({applicant:userId}).sort({createdAt:-1}).populate({
            path: "job",
            options: {sort:{createdAt:-1}},
            populate:{
                path:'company',
                options:{sort:{createdAt:-1}}
            }
        });
        if(!applications){
            return res.status(404).json({
                mess:"No applications",
                success: false
            })
        }
        return res.status(200).json({
            applications,
            success:true
        })
    } catch (error) {
        console.log(error);
        
    }
}

// admin will see the how many applicants has applied for a job
export const getApplicants = async (req,res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path:'applications',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'applicant'
            }
        });
        if(!job){
            return res.status(404).json({
                message:'Job not found.',
                success:false
            })
        };
        return res.status(200).json({
            job, 
            succees:true
        });
    } catch (error) {
        console.log(error);
    }
}

export const updateStatus = async (req,res) => {
    try {
        const {status} = req.body;
        const applicationId = req.params.id;
        if(!status){
            return res.status(400).json({
                mess: "Status is required",
                success:false
            })
        }
        const application = await Application.findOne({_id:applicationId});
        if(!application){
            return res.status(404).json({
                mess: "Application not found",
                success: false
            })
        }
        application.status = status.toLowerCase();
        await application.save();
        return res.status(200).json({
            mess: "Status updated successfully",
            success: true
        })
    } catch (error) {
        console.log(error); 
    }
}