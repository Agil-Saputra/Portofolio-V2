import React from "react";

const GradientBgDown = () => {
  return (
    <div className="gradient-radial-background absolute inset-x-0 -bottom-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-bottom-80 pointer-events-none">
      <div className="relative left-[calc(50%-30rem)] aspect-[1155/678] w-[72.1875rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-300 via-yellow-500 to-emerald-700 opacity-[0.25]"></div>
    </div>
  );
};

export default GradientBgDown;
