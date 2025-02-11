import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
const companyArray = [];
const PostJob = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: 0,
    location: "",
    jobType: "",
    experience: 0,
    position: 0,
    companyId: "",
  });
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: [e.target.value] });
  };
  const {companies} = useSelector(store => store.company)
  return (
    <div>
      <div className="flex items-center justify-center w-screen">
        <form action="" className="p-8 max-w-4xl border border-gray-200 shadow-lg rounded-xl">
        <div className="grid grid-cols-2 gap-5 my-4">
          <div>
            <Label>Title</Label>
            <Input
              type="text"
              name="title"
              className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              value={input.title}
              onChange={changeEventHandler}
            />
          </div>
          <div>
            <Label>Description</Label>
            <Input
              type="text"
              name="description"
              className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              value={input.description}
              onChange={changeEventHandler}
            />
          </div>
          <div>
            <Label>Requirements</Label>
            <Input
              type="text"
              name="requirements"
              className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              value={input.requirements}
              onChange={changeEventHandler}
            />
          </div>
          <div>
            <Label>Salary</Label>
            <Input
              type="number"
              name="salary"
              className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              value={input.salary}
              onChange={changeEventHandler}
            />
          </div>
          <div>
            <Label>Location</Label>
            <Input
              type="text"
              name="location"
              className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              value={input.location}
              onChange={changeEventHandler}
            />
          </div>
          <div>
            <Label>Job Type</Label>
            <Input
              type="text"
              name="jobType"
              className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              value={input.jobType}
              onChange={changeEventHandler}
            />
          </div>
          <div>
            <Label>Experience</Label>
            <Input
              type="number"
              name="experience"
              className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              value={input.experience}
              onChange={changeEventHandler}
            />
          </div>
          <div>
            <Label>No of Position</Label>
            <Input
              type="number"
              name="position"
              className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              value={input.position}
              onChange={changeEventHandler}
            />
          </div>
          {
            companies.length > 0 && (
                <Select className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1">
                    <SelectTrigger className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1">
                        <SelectValue placeholder="Select company" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {
                                companies.map((company)=>{
                                    return (
                                        <SelectItem key={company._id} value={company.name}>
                                            {company.name}
                                        </SelectItem>
                                    )
                                })
                            }
                        </SelectGroup>
                    </SelectContent>
                </Select>
            )
          }
        </div>
        <Button className="w-full">Post Job</Button>
        {
            companyArray.length==0 && <p className="text-xs text-red-600 font-bold text-center my-3">*Please register a company before posting a job</p>
        }
        </form>
      </div>
    </div>
  );
};

export default PostJob;
