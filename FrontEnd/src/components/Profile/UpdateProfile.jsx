import React, { useState } from "react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { useSelector, useStore } from "react-redux";

const UpdateProfile = ({ open, setOpen }) => {
    const [loading,setLoading] = useState(false);
    const {user} = useSelector(state=>state.auth);
    const [input,setInput] = useState({
        fullname:user?.fullname,
        email:user?.email,
        phoneNumber: user?.phoneNumber,
        bio:user?.profile?.bio,
        skills:user?.profile.skills.map((skill)=>skill),
        file:user?.profile?.resume
    })
  return (
    <div>
      <Dialog open={open}>
        <DialogContent className="sm:max-w-[425px]" onInteractOutside={()=>setOpen(false)}>
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form action="">
            <div className="grid gap-2 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" name="name" value={input.fullname} className="col-span-3" />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input id="email" name="email" value={input.email}  className="col-span-3" />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phoneNumber" className="text-right">
                  Phone
                </Label>
                <Input id="phoneNumber" name="phoneNumber" value={input.phoneNumber}  className="col-span-3" />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bio" className="text-right">
                  Bio
                </Label>
                <Input id="bio" name="bio" value={input.bio}  className="col-span-3" />
              </div>
              
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="skills" className="text-right">
                  Skills
                </Label>
                <Input id="skills" name="skills" value={input.skills} className="col-span-3" />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="resume" className="text-right">
                  Resume
                </Label>
                <Input id="resume" type="file" accept="application/pdf" name="resume" value={input.file} className="col-span-3" />
              </div>
            </div>
          </form>
          <DialogFooter>
          {loading ? (
            <Button className="w-full bg-blue-400 hover:bg-blue-500 font-bold">
              {" "}
              <Loader2 className="mr-2 h-4 animate-spin"/>{" "}
              Please wait
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full bg-blue-400 hover:bg-blue-500 font-bold"
            >
              Update
            </Button>
          )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateProfile;
