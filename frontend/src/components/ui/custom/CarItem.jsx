import React from "react";
import { Separator } from "../separator";
import { BsFuelPump } from "react-icons/bs";
import { SlSpeedometer } from "react-icons/sl";
import { GiGearStickPattern } from "react-icons/gi";
import { MdOpenInNew } from "react-icons/md";
import Fakedata from "@/Shared/Fakedata";

function CarItem({ car }) {
  return (
    <div className="rounded-xl bg-white border  hover:shadow-2xl cursor-pointer">
      <img
        src="https://images2.alphacoders.com/461/461982.jpg "
        width={"100%"}
        height={250}
        className="rounded-t-xl "
      />
      <div className="p-4">
        <h2 className="font-bold font-mono text-black text-lg mb-2 text-center">
          {car?.name}
          <Separator className="my-2" />
        </h2>
      </div>
      <div className="grid grid-cols-3 ">
        <div className="flex flex-col items-center">
          <BsFuelPump className="text-lg mb-2" />
          <h2 className="font-mono">{car.miles} Miles</h2>
        </div>
        <div className="flex flex-col items-center">
          <SlSpeedometer className="text-lg mb-2" />
          <h2 className="font-mono">{car.fuelType} </h2>
        </div>
        <div className="flex flex-col items-center">
          <GiGearStickPattern className="text-lg mb-2" />
          <h2 className="font-mono">{car.gear} </h2>
        </div>
      </div>
      <Separator className="my-2" />
      <div className="flex justify-between items-center mx-3">
        <h2 className="font-bold font-mono text-center ">${car.price}</h2>
        <h2 className="text-primary text-sm cursor-pointer flex gap-2 items-center ">
          View Details
          <MdOpenInNew />
        </h2>
      </div>
    </div>
  );
}

export default CarItem;
