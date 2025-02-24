import React from "react";
import JobCard from "./JobCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// const jobs = [1, 2, 3, 4, 5, 6, 7, 8];
const LatestJobs = () => {
  const {allJobs} = useSelector(store=>store.job);
  
  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-4xl font-bold mb-10">
        <span className="text-[#6A38C2]">Stay Ahead with</span> Newest Job
        Openings!
      </h1>
      <div className="grid grid-cols-3 gap-3 my-3">
        
        {
        allJobs.length<=0?<span>No Job Available</span> :
        allJobs.slice(0,6).map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
