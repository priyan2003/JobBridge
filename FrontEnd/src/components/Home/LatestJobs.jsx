import React from "react";
import JobCard from "./JobCard";
const jobs = [1, 2, 3, 4, 5, 6, 7, 8];
const LatestJobs = () => {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-4xl font-bold mb-10">
        <span className="text-[#6A38C2]">Stay Ahead with</span> Newest Job
        Openings!
      </h1>
      <div className="grid grid-cols-3 gap-3 my-3">
        {jobs.slice(0,6).map((job, index) => (
          <JobCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
