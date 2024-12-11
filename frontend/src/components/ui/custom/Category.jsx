import Data from "@/Shared/Data";
import React from "react";

function Category() {
  return (
    <div className="mt-40">
      <h2 className="font-bold font-mono my-16 text-center text-[2rem]">
        Browse By Type
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 px-20">
        {Data.category.map((category, index) => (
          <div
            key={category.id || index}
            className="border rounded-md p-3 items-center flex flex-col cursor-pointer hover:shadow-lg"
          >
            <img src={category.icon} alt={category.name} width={35} height={35} />
            <h2 className="mt-2 font-mono">{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
