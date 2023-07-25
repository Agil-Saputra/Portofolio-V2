import React from "react";
import Container from "@/components/general/container";
import { MdOutlineDateRange, MdLocationPin } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { GrScorecard } from "react-icons/gr";
const Education = () => {
  return (
    <Container emoji="📚" title="Education">
      <div className="md:flex items-start gap-4 w-full mb-6 mt-3">
        <div className="bg-zinc-950 border border-zinc-800 rounded-lg w-20 h-16 flex items-center justify-center"></div>
        <div className="w-full">
          <div className="flex max-md:flex-col justify-between items-start w-full">
            <div>
              <h3 className="font-medium text-md capitalize">
                Amikom University
              </h3>
              <div className="flex flex-wrap gap-2 items-center max-md:my-2">
                <p className="flex items-center gap-2 text-sm border rounded-md p-1 ">
                  <FaGraduationCap />
                  Bachelor&apos;s of Computer Science
                </p>
                <p className="flex items-center gap-2 text-sm border rounded-md p-1">
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
              <p className="flex items-center gap-2 text-sm border rounded-md p-1 capitalize">
                <MdOutlineDateRange />
                august 2023 - December 2025
              </p>
            </div>
          </div>
          <p className="paragraph-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            molestias culpa sed beatae labore pariatur aliquid, assumenda atque
            deleniti dolor?
          </p>
        </div>
      </div>
      <hr className="border-dashed" />
    </Container>
  );
};

export default Education;
