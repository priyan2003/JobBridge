import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { LogOut, User2 } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        {/* /*left wala part*/}
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-red-800">Bridge</span>
          </h1>
        </div>
        {/* right wala part */}
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/browse">Browse</Link>
            </li>
          </ul>
          {!user ? (
            <div className="flex items-center gap-5">
              <Link to="/login">
                <Button variant="outline" className="">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#935fec] hover:bg-[#6b44ab]">
                  Sign up
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild className="my-1">
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    className="w-10 rounded-full"
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 shadow-lg rounded-xl p-3">
                <div className="flex gap-5 space-y-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      className="w-10 rounded-full"
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h5 className="font-medium">Priyanshu</h5>
                    <p className="text-sm text-muted-foreground">
                      I am Full Stack Developer
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 text-gray-5 my-5">
                  <div className="flex w-fit items-center gap-1 cursor-pointer">
                    <User2 />
                    <button className=" border-none hover:underline">
                      <Link to="/profile">View Profile</Link>
                    </button>
                  </div>
                  <div className="flex w-fit items-center gap-1 cursor-pointer">
                    <LogOut />
                    <button className="border-none hover:underline">
                      Logout
                    </button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
