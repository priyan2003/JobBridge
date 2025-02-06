import React from "react";
import { Button } from "../ui/button";
import { Bookmark, Ghost } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";

const Job = () => {
  return (
    <div className="p-5  rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">5 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center my-2 gap-2">
        <Button variant="outline" className="rounded-full" size="icon">
          <Avatar>
            <AvatarImage src="https://img.freepik.com/premium-vector/colorful-logo-template-flat-design-logo-design_1100229-7152.jpg?w=740" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">Company name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit debitis
          ut, voluptas saepe recusandae praesentium.
        </p>
      </div>
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
      <div className="flex items-center gap-4 mt-5">
        <Button variant="outline">Details</Button>
        <Button className="bg-[#935fec] hover:bg-[#6b44ab]"> Save</Button>
      </div>
    </div>
  );
};

export default Job;
