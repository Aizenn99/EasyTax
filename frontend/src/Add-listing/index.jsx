import React, { useState } from "react";
import Header from "@/components/ui/custom/Header";
import carDetails from "./../Shared/carDetails.json";
import InputField from "./components/InputField";
import DropdownField from "./components/DropdownField";
import TextAreaField from "./components/TextAreaField";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { Separator } from "@/components/ui/separator";
import features from "./../Shared/features.json";
import { Checkbox } from "@/components/ui/checkbox";
import { MdSaveAlt } from "react-icons/md";


function AddListing() {
  const [formData, SetFormData] = useState({});
  

  const HandleInputChange = (name, value) => {
    SetFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  const onSubmit = (e) => {
    e.preventDefault();

   
    console.log("Form data submitted:", formData);

   
  };

  return (
    <div>
      <Header />
      <div className="px-10 md:px-20 my-10">
        <h2 className="font-bold font-mono text-4xl">Add New Listing</h2>
        <form className="border rounded-xl mt-10 p-10">
        <Separator className="my-6" />
          <div>
            <h2 className="font-medium text-xl font-mono mb-6">Car Details</h2>
            <Separator className="my-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {carDetails.carDetails.map((item, i) => (
                <div key={i}>
                  <label className="text-sm">
                    {item?.label}
                    {item.required && <span className="text-red-500">*</span>}
                  </label>
                  {item.fieldType === "text" || item.fieldType === "number" ? (
                    <InputField
                      item={item}
                      HandleInputChange={HandleInputChange} 
                      
                    />
                  ) : item.fieldType === "dropdown" ? (
                    <DropdownField
                      item={item}
                      HandleInputChange={HandleInputChange}
                    />
                  ) : item.fieldType === "textarea" ? (
                    <TextAreaField
                      item={item}
                      HandleInputChange={HandleInputChange}
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          <Separator className="my-6" />
          <div  >
            <h2 className="font-medium  text-xl  my-6s font-mono  ">
              Features
            </h2>
            <Separator className="my-6" />
            <div className="grid mt-4 grid-cols-1 md:grid-cols-2">
              {features.features.map((item, i) => (
                <div className="flex gap-2 items-center my-2 " key={i}>
                  <Checkbox
                    className="mx-2 "
                    onCheckedChange={(Value) =>
                      HandleInputChange(item.name, Value)
                    }
                  />
                  <h2>{item.label} </h2>
                </div>
              ))}
            </div>
          </div>
        </form>
        <div className="flex justify-between items-center mt-5">
          <Link to={"/profile"}>
            <Button className="font-mono">
              <GrLinkPrevious />
              PREV
            </Button>
          </Link>
          <Button type="submit" onClick={onSubmit} className="font-mono">
            SUBMIT <MdSaveAlt />
          </Button>
          
        </div>
      </div>
    </div>
  );
}

export default AddListing;
