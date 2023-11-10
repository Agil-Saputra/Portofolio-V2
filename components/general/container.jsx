import React from "react";

const Container = ({ children, title, emoji }) => {
  return (
    <div className="transition-all duration-200 ease-in-out rounded-lg group">
      <div className="rounded-lg gradient-border border-[1px] border-black group-hover:border-transparent">
        <div className="px-4 py-5 rounded-md bg-inherit">
          <h2 className="mb-3 text-xl font-semibold"><span>{emoji}</span> {title}</h2>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Container;
