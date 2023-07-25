import React, { useState, useEffect  } from "react";
import Skill from "../../general/skill-chip";
import { BiWorld, BiDetail } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { IoMdCloseCircle } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { BsPersonSquare } from "react-icons/bs";
import { ImOffice } from "react-icons/im";

const Project = ({
  projectTitle,
  description,
  shortDescription,
  date,
  image,
  githubLink,
  projectUrl,
  projectKind,
  skills,
}) => {
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    document.body.classList = showDiv
      ? "overflow-hidden"
      : "overflow-unset";
  }, [showDiv]);

  function openPopUp() {
    setShowDiv(true);
  }
  function closePopUp() {
    setShowDiv(false);
  }

  function iconProjectKind(kind) {
    if (kind == "Personal") {
		return (
			<BsPersonSquare/>
		) 
	} else {
		return (
			<ImOffice/>
		)
	}
  }

  return (
    <>
      <div
        className={
          (showDiv ? "scale-100" : "scale-0") +
          " origin-center transition-all duration-75 ease-in-out fixed left-0 top-0 w-screen h-screen grid place-items-center z-50 p-4"
        }
      >
        <div className="w-full p-4 bg-white border-gray-300 border-[1px] rounded-md  shadow-3xl overflow-scroll max-h-[400px] md:max-h-[40.625rem] container mx-auto">
          <div className="flex justify-between items-center mb-4 sticky top-0 backdrop-blur-md rounded-2xl px-2">
            <h2 className="text-xl font-semibold">Details</h2>
            <button onClick={closePopUp} className="text-red-400 text-[1.8rem]">
              <IoMdCloseCircle />
            </button>
          </div>
          <div>
            <p className="paragraph-light">{description}</p>
          </div>
          <div className="lg:block hidden">
            <h2 className="text-xl font-semibold mb-4">Web Live preview</h2>
            <embed
              src={projectUrl}
              className="bg-white rounded-md w-full lg:h-[600px] h-[300px] border-[1px]"
            />
          </div>
        </div>
      </div>
      <div className="md:flex items-start gap-4 w-full mb-6 mt-3">
        <div className="bg-zinc-950 border border-zinc-800 rounded-lg w-20 h-16 flex items-center justify-center float-left"></div>
        <div className="w-full">
          <div className="flex max-md:flex-col justify-between items-start w-full">
            <div>
              <h3 className="font-medium text-md capitalize">{projectTitle}</h3>
              <div className="flex flex-wrap gap-2 items-center my-2">
                <a
                  href={projectUrl}
                  className="flex items-center gap-1 text-md text-cyan-600 cursor-pointer hover:bg-slate-200 hover:border-black hover:scale-105 border px-1 rounded-md"
                >
                  Live web
                  <BiWorld />
                </a>
                <a
                  href={githubLink}
                  className="flex items-center gap-1 text-md cursor-pointer hover:bg-slate-200 hover:border-black hover:scale-105 border px-1 rounded-md"
                >
                  GitHub code
                  <AiFillGithub />
                </a>
                <button
                  className="flex items-center gap-1 text-md hover:bg-slate-200 hover:border-black border px-1 rounded-md"
                  onClick={openPopUp}
                >
                  Details
                  <BiDetail />
                </button>
              </div>
            </div>

            <div className="grid items-end">
              <div className="flex justify-center rounded-md items-center gap-2 text-[14px] px-2 py-1 border-[1px] border-yellow-400 bg-yellow-100 text-yellow-600 mb-1">
                {iconProjectKind(projectKind)}
                {projectKind}
              </div>
              <p className="flex items-center gap-2 text-sm border rounded-md p-1 capitalize">
                <MdOutlineDateRange />
                {date}
              </p>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap md:mb-2 max-md:my-2">
			{skills?.map((skill, i) => (
				<Skill key={i} title={skill}/>
			))}
          </div>
          <p className="paragraph-light">{shortDescription}</p>
        </div>
      </div>
      <hr className="border-dashed"/>
    </>
  );
};

export default Project;
