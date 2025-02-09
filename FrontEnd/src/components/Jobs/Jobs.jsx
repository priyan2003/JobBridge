import React from "react";
import FilterCard from "./FilterCard";
import Job from "./Job";
import Navbar from "../shared/Navbar";
import { useSelector } from "react-redux";
// const jobs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Jobs = () => {
  const {allJobs} = useSelector(state=>state.job);
  return (
    <div>
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-20%">
            <FilterCard />
          </div>
          {allJobs.length <= 0 ? (
            <span>Job not found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-4">
              <div className="grid grid-cols-3 gap-4">
                {allJobs.map((job) => (
                  <div key={job._id}>
                    <Job job={job}/>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
