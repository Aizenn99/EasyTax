import Fakedata from "@/Shared/Fakedata";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import React from "react";
import CarItem from "./CarItem";

function MostsearchCar() {
  return (
    <div className="mx-24  hidden  md:block ">
      <h2 className="text-3xl font-bold font-mono text-center my-16">
        Most searched Car
      </h2>
      <Carousel>
        <CarouselContent>
          {Fakedata.carlist.map((car, i) => (
            <CarouselItem className="basis-1/4" key={i} >
              <CarItem car={car}  />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default MostsearchCar;
