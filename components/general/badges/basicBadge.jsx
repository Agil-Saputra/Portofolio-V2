import React from "react";

export default function BasicBadge({ title, icon }) {
  return (
    <p className="flex items-center gap-2 text-sm border rounded-md p-1 ">
      {title}
      {icon}
    </p>
  );
}
