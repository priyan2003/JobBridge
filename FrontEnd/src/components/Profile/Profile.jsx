import React from "react";
import { Avatar } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "../ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "../ui/badge";
import { Label } from "../ui/label";
import AppliedJobTable from "./AppliedJobTable";

const Profile = () => {
  const skills = ["Java", "Python", "JavaScript"];
  const haveResume = true;
  return (
    <div>
      <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8 ">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-32 w-32">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                officia commodi totam perferendis modi eos impedit error,
                placeat enim?
              </p>
            </div>
          </div>
          <Button className="text-right" variant="outline">
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>abc@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>4546552345</span>
          </div>
        </div>
        <div className="my-5">
          <h1>Skills</h1>
          <div className="flex items-center gap-3">
            {skills.length !== 0 ? (
              skills.map((skill, index) => <Badge key={index}>{skill}</Badge>)
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-2">
            <Label className="text-md font-bold">Resume</Label>
            {
                haveResume ? <a target="blank" href="https://google.com" className="text-blue-400 w-full hover:underline cursor-pointer">myresume</a> : <span>NA</span>
            }
        </div>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl">
            <h1>Applied Jobs</h1>
            {/* Application table */}
            <AppliedJobTable/>
        </div>
      </div>
    </div>
  );
};

export default Profile;
