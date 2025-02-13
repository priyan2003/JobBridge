import React, { useEffect, useState } from "react";
import { Badge } from "../ui/badge";
import { Ghost } from "lucide-react";
import { Button } from "../ui/button";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setSingleJob } from "@/redux/jobSlice";
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from "@/utils/constants";
import { toast } from "sonner";

const JobDiscription = () => {
  
  const jobId = useParams().id;
  const dispatch = useDispatch();
  const {user} = useSelector(state=>state.auth)
  const {singleJob} = useSelector(state=>state.job);
  const isInitiallyApplied = singleJob?.applications?.some(application=>application.applicant === user?._id) || false;
  const [isApplied,setIsApplied] = useState(isInitiallyApplied);
  const applyJobHandler = async () => {
    try {
      const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`,{withCredentials:true});
      console.log(res.data.newApplication);
      
      if(res.data.success){
        setIsApplied(true);
        const updateSingleJob = {...singleJob,applications:[...singleJob.applications,{applicant:user?._id}]}
        dispatch(setSingleJob(updateSingleJob))
        toast.success(res.data.mess);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.mess)
    }
  }
  useEffect(()=>{
    const fetchJobById = async () =>{
        try {
            const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`,{withCredentials: true});
            if(res.data.success){
                dispatch(setSingleJob(res.data.job));
                setIsApplied(res.data.job.applications.some(application=>application.applicant===user?._id))
            }
        } catch (error) {
            console.log(error);
            
        }
    }  
    fetchJobById();
  },[jobId,dispatch,user._id])
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">{singleJob?.title}</h1>
          <div className="flex items-center gap-5 mt-4">
            <Badge variant={Ghost} className={"text-blue-600 font-bold"}>
            {singleJob?.position} Positions
            </Badge>
            <Badge variant={Ghost} className={"text-blue-600 font-bold"}>
            {singleJob?.jobType}
            </Badge>
            <Badge variant={Ghost} className={"text-blue-600 font-bold"}>
            {singleJob?.salary}
            </Badge>
          </div>
        </div>
        <Button onClick={isApplied ? null : applyJobHandler}
          disabled={isApplied}
          className={`rounded-lg ${
            isApplied
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>
      <h1 className="border-b-2 border-b-gray-300 font-medium p-3">
        Job Discription
      </h1>
      <div>
        <h1 className="font-medium my-1">
          Role: <span className="pl-3 font-normal text-gray-800">{singleJob?.title}</span>
        </h1>
        <h1 className="font-medium my-1">
          Location: <span className="pl-3 font-normal text-gray-800">{singleJob?.location}</span>
        </h1>
        <h1 className="font-medium my-1">
          Description: <span className="pl-3 font-normal text-gray-800">{singleJob?.description}</span>
        </h1>
        <h1 className="font-medium my-1">
          Experience: <span className="pl-3 font-normal text-gray-800">{singleJob?.experienceLevel} years</span>
        </h1>
        <h1 className="font-medium my-1">
          Salary: <span className="pl-3 font-normal text-gray-800">
          {singleJob?.salary}
          </span>
        </h1>
        <h1 className="font-medium my-1">
          Total Applicants: <span className="pl-3 font-normal text-gray-800">{singleJob?.applications.length}</span>
        </h1>
        <h1 className="font-medium my-1">
          Posted Date: <span className="pl-3 font-normal text-gray-800">
            {singleJob?.createdAt.split('T')[0]}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default JobDiscription;
