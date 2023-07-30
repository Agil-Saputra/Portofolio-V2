import React from "react";

export default function LinkForward({icon, title, href}) {
  return (
    <a href={href} className="flex items-center gap-1 text-sm text-cyan-600 cursor-pointer hover:bg-slate-200 hover:border-black hover:scale-105 border px-2 py-1 rounded-md">
      {title}
      {icon}
    </a>
  );
}
