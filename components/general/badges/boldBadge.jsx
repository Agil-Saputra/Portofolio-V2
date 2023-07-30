import React from "react";

export default function BoldBadge({title}) {
  return (
    <div className="flex rounded-md justify-center items-center gap-2 text-[14px] px-2 border-[1px] border-yellow-400 bg-yellow-100 text-yellow-600 mb-1 w-fit">
      {title}
    </div>
  );
}
