import React from "react";
import { Badge } from "../ui/badge";
import { Ghost } from "lucide-react";

const JobCard = () => {
  return (
    <div className="shadow-xl p-5 rounded-md bg-white border border-gray-100 cursor-pointer">
      <div>
        <h1 className="font-md text-lg">Company Name</h1>
        <p className="text-sm text-gray-600">India</p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Job Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          repudiandae, pariatur sed eligendi reprehenderit rerum deleniti!
        </p>
      </div>
      <div className="flex items-center gap-5 mt-4">
        <Badge variant={Ghost} className={'text-blue-600 font-bold'}>10 Positions</Badge>
        <Badge variant={Ghost} className={'text-blue-600 font-bold'}>Part Time</Badge>
        <Badge variant={Ghost} className={'text-blue-600 font-bold'}>20K</Badge>
      </div>
    </div>
  );
};

export default JobCard;
