import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "../separator";
import { CiSearch } from "react-icons/ci";
import Data from "@/Shared/Data";





function Search() {
  return (
    <div className="flex-col md:p-4 font-mono p-2 bg-white rounded-md md:rounded-full md:flex md:flex-row gap-10 px-5 items-center w-[60%] shadow-md  ">
      <Select>
        <SelectTrigger className="w-full outline-none md:border-none text-[1rem]">
          <SelectValue placeholder="Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">New</SelectItem>
          <SelectItem value="dark">Old</SelectItem>
        </SelectContent>
      </Select>
      <Separator orientation="vertical" className="hidden md:block " />
 
      <Select>
        <SelectTrigger className="w-full outline-none md:border-none text-[1rem]  ">
          <SelectValue placeholder="Car Makes" />
        </SelectTrigger>
        <SelectContent>
          {Data.CarMakes.map((maker, i) => (
            <SelectItem value={maker.name}>{maker.name}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Separator orientation="vertical" className="hidden md:block" />

      <Select>
        <SelectTrigger className="w-full outline-none md:border-none text-[1rem]">
          <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent>
          {Data.Pricing.map((price, i) => (
            <SelectItem value={price.amount}>{price.amount}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div>
        <CiSearch
          className="text-[50px] text-white bg-primary
       rounded-full p-3 cursor-pointer "
        />
      </div>
    </div>
  );
}

export default Search;
