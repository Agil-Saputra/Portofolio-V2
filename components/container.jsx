import React from "react";

const Container = ({ children, title }) => {
  return (
    <div className=" transition-all duration-200 rounded-lg ease-in-out group">
      <div className="rounded-lg gradient-border border-[1px] group-hover:border-transparent">
        <div className="p-3 bg-inherit rounded-md ">{children}</div>
      </div>
    </div>
  );
};

export default Container;
