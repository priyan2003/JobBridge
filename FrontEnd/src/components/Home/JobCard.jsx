import React from "react";
import { Badge } from "../ui/badge";
import { Ghost } from "lucide-react";
import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/discription/${job?._id}`)}
      className="shadow-xl p-5 rounded-md bg-white border border-gray-100 cursor-pointer"
    >
      <div>
        <div className="flex items-center">
          <img className="h-12 w-12" src={job?.company?.logo} alt="" />
          <h1 className="font-bold text-lg">{job?.company?.name}</h1>
        </div>
        <p className="text-sm text-gray-600">India</p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">{job?.discription}</p>
      </div>
      <div className="flex items-center gap-5 mt-4">
        <Badge variant={Ghost} className={"text-blue-600 font-bold"}>
          {job?.position} Positions
        </Badge>
        <Badge variant={Ghost} className={"text-blue-600 font-bold"}>
          {job?.jobType}
        </Badge>
        <Badge variant={Ghost} className={"text-blue-600 font-bold"}>
          {job?.salary}LPA
        </Badge>
      </div>
    </div>
  );
};

export default JobCard;
