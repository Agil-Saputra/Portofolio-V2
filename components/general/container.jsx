import React from "react";
import DownloadIcon from "../section/documents/download-icon";
const Container = ({ children, title, emoji }) => {
  return (
    <div className=" transition-all duration-200 rounded-lg ease-in-out group">
      <div className="rounded-lg gradient-border border-[1px] border-gray-300 group-hover:border-transparent">
        <div className="px-4 py-5 bg-inherit rounded-md">
          <h2 className="font-semibold text-xl mb-3"><span>{emoji}</span> {title}</h2>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Container;
