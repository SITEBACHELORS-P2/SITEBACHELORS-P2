import React, { useState } from "react";
import classNames from "classnames";

export default function Accordion({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleMouseEnter = (event) => {
    if (!isActive) {
      event.target.style.color = "#F24E1E";
    }
  };

  const handleMouseLeave = (event) => {
    if (!isActive) {
      event.target.style.color = "";
    }
  };

  return (
    
    <div className="faq">

      
     
      <div className="faq-section">
        <div
          className={classNames("faq-item", {
            active: isActive,
          })}
          style={{
            marginBottom: "20px",
          }}
        >
          <button
            className="faq-header"
            onClick={handleClick}
            style={{
              padding: "10px",
              fontWeight: "bold",
              cursor: "pointer",
              color: isActive ? "#F24E1E" : "",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {title}
          </button>
          {isActive && (
            <div className="faq-line"></div>
          )}
          {isActive && (
            <div
              className="faq-body"
              style={{
                padding: "10px",
              }}
            >
              {content}
            </div>
          )}
        </div>
        <div className="faq-line" style={{ backgroundColor: "#ccc", height: "1px", marginBottom: "20px" }}></div>
      </div>
    </div>
  );
}
