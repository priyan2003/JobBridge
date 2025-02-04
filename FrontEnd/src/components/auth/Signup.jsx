import React from "react";
import Navbar from "../shared/Navbar";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div>
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          action=""
          className="w-1/2 border border-gray-200 rounded-md p-5 my-12"
        >
          <h1 className="font-bold text-3xl mb-5">Create your account</h1>
          <div className="my-2">
            <Label>Full Name</Label>
            <Input type="text" placeholder="rohilla" />
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input type="email" placeholder="abc@gmail.com" />
          </div>
          <div className="my-2">
            <Label>Phone Number</Label>
            <Input type="Number" placeholder="" />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input type="password" placeholder="pkd78#9f9" />
          </div>
          <div className="flex items-center justify-between my-3">
            <RadioGroup defaultValue="Student" className="flex gap-7">
              <div className="flex items-center space-x-2">
                <Input
                 type="radio"
                 name="role"
                 value ="student"
                 className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
              <Input
                 type="radio"
                 name="role"
                 value ="recruiter"
                 className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
                <Label>Profile</Label>
                <Input
                 accept="image/*"
                 type = "file"
                 className = "cursor-pointer"
                />
            </div>
          </div>
          <Button type="submit" className="w-full bg-blue-400 hover:bg-blue-500">Sign up</Button>
          <span className="text-sm text-muted-foreground">Already have an account?<Link to="/login" className="text-blue-400">Log in</Link></span>
        </form>
      </div>
    </div>
  );
}

export default Signup;
