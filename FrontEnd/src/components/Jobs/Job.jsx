import React from "react";
import { Button } from "../ui/button";
import { Bookmark, Ghost } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Link, useNavigate } from "react-router-dom";

const Job = ({job}) => {
  const navigate = useNavigate();
  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDiff = currentTime - createdAt;
    return Math.floor(timeDiff/(1000*60*60*24))
  }
  return (
    <div className="p-5  rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{daysAgoFunction(job?.createdAt) ===0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center my-2 gap-2">
        <Button variant="outline" className="rounded-full" size="icon">
          <Avatar>
            <AvatarImage src={job?.company?.logo} />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-500">
          {job?.discription}
        </p>
      </div>
      <div className="flex items-center gap-5 mt-4">
        <Badge variant={Ghost} className={"text-blue-600 font-bold"}>
          {job?.position} Positions
        </Badge>
        <Badge variant={Ghost} className={"text-blue-600 font-bold"}>
          {job?.jobType}
        </Badge>
        <Badge variant={Ghost} className={"text-blue-600 font-bold"}>
          {job?.salary}
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-5">
        <Button variant="outline"><Link to={`/discription/${job?._id}`}>Details</Link></Button>
        <Button className="bg-[#935fec] hover:bg-[#6b44ab]"> Save</Button>
      </div>
    </div>
  );
};

export default Job;
