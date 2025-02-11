import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const PostJob = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: 0,
    location: "",
    jobType: "",
    experience: "",
    position: 0,
    companyId: "",
  });
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: [e.target.value] });
  };
  return (
    <div>
      <div className="flex items-center justify-center w-screen">
        <div className="grid grid-cols-2 gap-5">
          <div>
            <Label>Title</Label>
            <Input
              type="text"
              name="title"
              className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              value={input.title}
              onChage={changeEventHandler}
            />
          </div>
          <div>
            <Label>Description</Label>
            <Input
              type="text"
              name="description"
              className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              value={input.description}
              onChage={changeEventHandler}
            />
          </div>
          <div>
            <Label>Requirements</Label>
            <Input
              type="text"
              name="requirements"
              className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              value={input.requirements}
              onChage={changeEventHandler}
            />
          </div>
          <div>
            <Label>Salary</Label>
            <Input
              type="number"
              name="salary"
              className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              value={input.salary}
              onChage={changeEventHandler}
            />
          </div>
          <div>
            <Label>Location</Label>
            <Input
              type="text"
              name="location"
              className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              value={input.location}
              onChage={changeEventHandler}
            />
          </div>
          <div>
            <Label>Job Type</Label>
            <Input
              type="text"
              name="jobType"
              className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              value={input.jobType}
              onChage={changeEventHandler}
            />
          </div>
          <div>
            <Label>Experience</Label>
            <Input
              type="text"
              name="experience"
              className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              value={input.experience}
              onChage={changeEventHandler}
            />
          </div>
          <div>
            <Label>No of Position</Label>
            <Input
              type="text"
              name="position"
              className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              value={input.position}
              onChage={changeEventHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
