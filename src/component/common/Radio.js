import React,{useState} from "react";
import "./Radio.css";

const Radio = ({ labels, type }) => {
 const [state, setState]= useState("_____")
  
  return (
    <>
    <p>My favorite Anime is {state}</p>
    <div className="smallContainer">
      {labels.map((item) => (
        <div>
        <label key={item.value} className={`${type === "primary"? "button-primary": type === "disabled"? "button-disabled" : type === "checked"? "button-checked": "default"}`}>
          <input
            type="radio"
            name="radiotypes"
            value={item.value}
            disabled={type === "disabled"} // Disable if the type is "disabled"
            Checked={type === "checked"} // Set to checked if the type is "checked"
            className="radio-input"
            onChange={() => setState(item.value)}
            />
          {item.label}
        </label>
        </div>
      ))}
      </div>
    </>
  );
};

export default Radio;