import React, { useState } from "react";
import "../work.css";

function WorkMobile(props) {
  const [isShownFull, setIsShownFull] = useState(false);
  const divText = {
    color: props.color,
  };
  return (
    <div>
      <div className="workMobile">
        <div className="mobileWork" onClick={() => setIsShownFull(true)}>
          <img src={props.cardImage} alt="example" />
          <button onClick={() => setIsShownFull(true)}>+</button>
        </div>

        {isShownFull && (
          <div className="mobileWorkFull">
            <img
              onClick={() => setIsShownFull(false)}
              src={props.fullImage}
              alt="example"
            />
            <h5 onClick={() => setIsShownFull(false)} style={divText}>
              x
            </h5>
          </div>
        )}
      </div>
    </div>
  );
}

export default WorkMobile;
