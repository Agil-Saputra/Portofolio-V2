import React from "react";
import Container from "@/components/general/container";
import { MdOutlineDateRange, MdLocationPin } from "react-icons/md";
import { BiTimeFive, BiWorld } from "react-icons/bi";
import { ImOffice } from "react-icons/im";
import jiss from "@/assets/jiss.png";
import ImageLogo from "@/components/general/image";
const Professional = () => {
  return (
    <Container emoji="💼" title="Professional Experience">
      <div className="items-start w-full gap-4 mt-3 mb-6 md:flex">
        <ImageLogo src={jiss} alt="Jasa Inti Solusi Sukses" />
        <div className="w-full">
          <div className="flex items-start justify-between w-full max-md:flex-col">
            <div>
              <h3 className="font-medium capitalize text-md">
                Front End Developer
              </h3>
              <div className="flex flex-wrap items-center gap-2 max-md:my-2">
                <p className="flex items-center gap-2 p-1 text-sm border rounded-md">
                  <ImOffice />
                  Jasa Inti Solusi Sukses
                </p>
                <p className="flex items-center gap-2 p-1 text-sm border rounded-md">
                  <MdLocationPin />
                  Belitang, Palembang
                </p>
                <a className="flex items-center gap-1 px-2 border rounded-md cursor-pointer text-md text-cyan-600 hover:bg-slate-200 hover:border-black hover:scale-105">
                  <BiWorld />
                  jiss.site
                </a>
              </div>
            </div>

            <div className="flex flex-col md:items-end">
              <div className="flex rounded-md justify-center items-center gap-2 text-[14px] px-2 border-[1px] border-yellow-400 bg-yellow-100 text-yellow-600 mb-1 w-fit">
                <BiTimeFive />
                Full Time
              </div>
              <p className="flex items-center gap-2 p-1 text-sm capitalize border rounded-md">
                <MdOutlineDateRange />
                july 2023 - august 2023
              </p>
            </div>
          </div>
          <p className="paragraph-light">
            • Designing and crafting cutting-edge business sites using Next.js
            technology, revolutionizing company online presence for marketing
            with sleek, efficient, and user-friendly interfaces. 
			<br/>
			• Implementing a robust maintenance plan to ensure company website remains at the
            forefront of technology, consistently updating components to
            guarantee optimal performance and user satisfaction. 
          </p>
        </div>
      </div>
      <hr className="border-dashed" />
    </Container>
  );
};

export default Professional;
