import React from "react";
import { Badge } from "../ui/badge";
import { Ghost } from "lucide-react";

const JobCard = ({job}) => {
  return (
    <div className="shadow-xl p-5 rounded-md bg-white border border-gray-100 cursor-pointer">
      <div>
        <h1 className="font-md text-lg">{job?.company?.name}</h1>
        <p className="text-sm text-gray-600">India</p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">
          {job?.discription}
        </p>
      </div>
      <div className="flex items-center gap-5 mt-4">
        <Badge variant={Ghost} className={'text-blue-600 font-bold'}>{job?.position} Positions</Badge>
        <Badge variant={Ghost} className={'text-blue-600 font-bold'}>{job?.jobType}</Badge>
        <Badge variant={Ghost} className={'text-blue-600 font-bold'}>{job?.salary}</Badge>
      </div>
    </div>
  );
};

export default JobCard;
