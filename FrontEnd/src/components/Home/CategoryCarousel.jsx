import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Button } from "../ui/button";
const categories = [
  "Full Stack Developer",
  "Backend Developer",
  "Fronend Developer",
  "UI/UX Designer",
  "Data Scientist",
  "Prompt Engineer",
];
const CategoryCarousel = () => {
  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent className="flex gap-0" key={}>
          {categories.map((category, index) => (
            <CarouselItem className="md:basis-1/2 lg-basis-1/3 p-0 m-0">
              <Button variant="outline" className="">{category}</Button>
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
