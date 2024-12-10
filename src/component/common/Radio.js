import React, { useState } from "react";
import "./Radio.css";

const Radio = ({ labels, type }) => {
  const [state, setState] = useState("_______");

  return (
    <>
      <p>My favorite Anime is {state}</p>
      <div className="smallContainer">
        {labels.map((item, index) => (
          <div key={index}>
            <label
              className={`$n{
                type === "primary"
                  ? "button-primary"
                  : type === "disabled"
                  ? "button-disabled"
                  : type === "checked"
                  ? "button-checked"
                  : "default"
              }`}
            >
              <input
                type="radio"
                name="radiotypes"
                value={item.value}
                disabled={type === "disabled"} // Disable if the type is "disabled"
                checked={state === item.value || type === "checked"}
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
