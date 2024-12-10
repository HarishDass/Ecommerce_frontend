import React,{useState} from "react";
import "./Radio.css";

const Radio = ({ lables, type }) => {
 const [state, setState]= useState("_______")
  
  return (
    <>
    <p>My favorite Anime is <b>{state}</b></p>
    <div className="smallContainer">
      {lables.map((item,index) => (
        <div>
        <label key={item.value} className={`${type === "primary"? "button-primary": type === "disabled"? "button-disabled" : type === "checked"? "button-checked": "default"} ${state === item.value ? "selected" : ""}`}>
          <input className={` ${state === item.value ? "selected" : ""}`}

            type="radio"
            name="radiotypes"
            value={item.value}
            disabled={type === "disabled"} // Disable if the type is "disabled"
            defaultChecked={type === "checked"} // Set to checked if the type is "checked"
            onChange ={()=>setState(item.value)}
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