import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Button } from "../ui/button";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const categories = [
  "Full Stack Developer",
  "Backend Developer",
  "Frontend Developer",
  "UI/UX Designer",
  "Data Scientist",
  "Prompt Engineer"
];
const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    nevigate("/browse")
  }
  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent className="flex gap-0 justify-between mx-5">
          {categories.map((category, index) => (
            <CarouselItem key={index} className=" basis-1/3 p-0 m-0">
              <Button onClick={()=>searchJobHandler(category)} variant="outline" className="">{category}</Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
