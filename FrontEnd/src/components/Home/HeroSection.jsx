import React, { useState } from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [query,setQuery] = useState("");
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    nevigate("/browse")
  }
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-red-600 font-medium">
          Welcome to JobBridge
        </span>
        <h1 className="text-5xl font-bold">
          Jumpstart Your Career
          <br />
          with <span className="text-[#6A38C2]">Job Bridge!</span>
        </h1>
        <p className="text-lg">Job Bridge is a cutting-edge job portal designed to connect job seekers with the right opportunities and help employers find top talent efficiently.</p>
        <div className="flex w-[40%] shadow-lg border border-gray-300 pl-3 rounded-full items-center gap-4 mx-auto">
            <input
             type="text"
             placeholder="Find your job"
             onChange={(e)=>setQuery(e.target.value)}
             className="outline-none border-none w-full"
            />
            <Button onClick={searchJobHandler} className="rounded-r-full ">
                <Search className="h-5 w-5 "/>
            </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
