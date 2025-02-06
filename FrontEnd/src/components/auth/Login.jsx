import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { USER_API_END_POINT } from "@/utils/constants";
import axios from "axios";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user))
        navigate("/");
        toast.success(res.data.mess);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.mess);
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <div>
      <div className="flex items-center justify-center max-w-7xl mx-auto pb-24">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-5 my-12"
        >
          <h1 className="font-bold text-3xl mb-5">Log in</h1>
          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="abc@gmail.com"
            />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="pkd78#9f9"
            />
          </div>
          <div className="flex items-center justify-between my-3">
            <RadioGroup defaultValue="Student" className="flex gap-7">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  hecked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
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
              Login
            </Button>
          )}

          <span className="text-sm text-muted-foreground">
            Don’t have an account?
            <Link to="/signup" className="text-blue-400">
              Sign up
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
