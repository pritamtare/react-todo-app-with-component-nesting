import React from "react";

const ButtonComp = ({ onClick, children, className }) => {
  return (
    <div>
      <button className={className} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default ButtonComp;
