import { Input } from "@/components/ui/input";
import React from "react";

function InputField({ item,HandleInputChange }) {
  return (
    <div className="mt-2">
      <Input
        type={item?.feildType}
        name={item?.name}
        required={item?.required}
        onChange={(e) => HandleInputChange( item.name, e.target.value) }
      />
    </div>
  );
}

export default InputField;
