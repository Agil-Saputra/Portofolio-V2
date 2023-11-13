import React from "react";
import Container from "@/components/general/container";
import { MdOutlineDateRange, MdLocationPin } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import amikom from "@/assets/amikom.png"
import ImageLogo from "@/components/general/image";
const Education = () => {
  return (
    <Container emoji="📚" title="Education">
      <div className="items-start w-full gap-4 mt-3 mb-6 md:flex">
	  <ImageLogo src={amikom} alt="Jasa Inti Solusi Sukses"/>
        <div className="w-full">
          <div className="flex items-start justify-between w-full max-md:flex-col">
            <div>
              <h3 className="font-medium capitalize text-md">
                Amikom University
              </h3>
              <div className="flex flex-wrap items-center gap-2 max-md:my-2">
                <p className="flex items-center gap-2 p-1 text-sm border rounded-md ">
                  <FaGraduationCap />
                  Bachelor&apos;s of Computer Science
                </p>
                <p className="flex items-center gap-2 p-1 text-sm border rounded-md">
                  <MdLocationPin />
                  DI Yogyakarta
                </p>
              </div>
            </div>

            <div className="flex flex-col md:items-end">
              <div className="flex rounded-md justify-center items-center gap-2 text-[14px] px-2 border-[1px] border-yellow-400 bg-yellow-100 text-yellow-600 mb-1 w-fit">
                {/* <GrScorecard/> */}
                GPA: 3.78
              </div>
              <p className="flex items-center gap-2 p-1 text-sm capitalize border rounded-md">
                <MdOutlineDateRange />
                august 2023 - December 2025
              </p>
            </div>
          </div>
          <p className="paragraph-light">
          </p>
        </div>
      </div>
      <hr className="border-dashed" />
    </Container>
  );
};

export default Education;
