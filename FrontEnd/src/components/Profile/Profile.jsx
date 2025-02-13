import { useState } from "react";
import { Avatar } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "../ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "../ui/badge";
import { Label } from "../ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfile from "./UpdateProfile";
import { useSelector } from "react-redux";
import useGetAllAplliedJobs from "@/hooks/useGetAllAplliedJobs";

// const skills = ["Java", "Python", "JavaScript"];
const haveResume = true;
const Profile = () => {
  useGetAllAplliedJobs();
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  // const skills = user?.profile?.skills;
  return (
    <div>
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8 ">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-32 w-32">
              <AvatarImage
                className=" rounded-full"
                src={
                  user.profile.profilePhoto
                    ? user.profile.profilePhoto
                    : "https://github.com/shadcn.png"
                }
                alt="@shadcn"
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">{user?.fullname}</h1>
              <p>{user?.profile?.bio}</p>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            className="text-right"
            variant="outline"
          >
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>
        <div className="my-5">
          <h1 className="text-lg font-medium">Skills</h1>
          <div className="flex items-center gap-3">
            {user?.profile?.skills.length !== 0 ? (
              user?.profile?.skills.map((skill, index) => (
                <Badge className={"bg-blue-600 text-white"} key={index}>{skill}</Badge>
              ))
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label className="text-md font-bold">Resume</Label>
          {haveResume ? (
            <a
              target="blank"
              href={user?.profile?.resume}
              className="text-blue-400 w-full hover:underline cursor-pointer"
            >
              {user?.profile?.resumeOriginalName}
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="font-bold text-lg">Applied Jobs</h1>
        {/* Application table */}
        <AppliedJobTable />
      </div>
      <UpdateProfile open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
