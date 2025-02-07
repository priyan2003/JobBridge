import React from "react";
import { Badge } from "../ui/badge";
import { Ghost } from "lucide-react";
import { Button } from "../ui/button";

const JobDiscription = () => {
  const isApplied = true;
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">Frontend Developer</h1>
          <div className="flex items-center gap-5 mt-4">
            <Badge variant={Ghost} className={"text-blue-600 font-bold"}>
              10 Positions
            </Badge>
            <Badge variant={Ghost} className={"text-blue-600 font-bold"}>
              Part Time
            </Badge>
            <Badge variant={Ghost} className={"text-blue-600 font-bold"}>
              20K
            </Badge>
          </div>
        </div>
        <Button
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
          Role: <span className="pl-3 font-normal text-gray-800">Frontend Developer</span>
        </h1>
        <h1 className="font-medium my-1">
          Location: <span className="pl-3 font-normal text-gray-800">Gurugoan</span>
        </h1>
        <h1 className="font-medium my-1">
          Discription: <span className="pl-3 font-normal text-gray-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quasi veniam ipsa accusantium aspernatur cum?</span>
        </h1>
        <h1 className="font-medium my-1">
          Experience: <span className="pl-3 font-normal text-gray-800">0 - 4</span>
        </h1>
        <h1 className="font-medium my-1">
          Salary: <span className="pl-3 font-normal text-gray-800">9 LPA</span>
        </h1>
        <h1 className="font-medium my-1">
          Total Applicants: <span className="pl-3 font-normal text-gray-800">15</span>
        </h1>
        <h1 className="font-medium my-1">
          Posted Date: <span className="pl-3 font-normal text-gray-800">13-09-2024</span>
        </h1>
      </div>
    </div>
  );
};

export default JobDiscription;
