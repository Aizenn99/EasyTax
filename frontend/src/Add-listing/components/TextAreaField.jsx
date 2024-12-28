import React from "react";
import { Textarea } from "@/components/ui/textarea";

function TextAreaField({ item, HandleInputChange }) {
  return (
    <div className="mt-2">
      <Textarea
        name={item.name}
        onChange={(e) => HandleInputChange(item.name, e.target.value)}
        required={item?.required}
      /> 
    </div>
  );
}

export default TextAreaField;
