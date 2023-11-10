// react
import React, { useState, useEffect } from "react";
// components
import ImageLogo from "@/components/general/image";
import SkillBadge from "@/components/general/badges/skillBadge";
// icons
import { BiWorld, BiDetail } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { IoMdCloseCircle } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { BsPersonSquare } from "react-icons/bs";
import { ImOffice } from "react-icons/im";

function IconLinkButton({ link, title, icon }) {
  return (
    <a
      href={link}
      className="flex items-center gap-1 px-1 border rounded-sm cursor-pointer text-md hover:bg-slate-200 hover:border-black hover:scale-105"
    >
      {title}
      {icon}
    </a>
  );
}

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
  logo,
}) => {
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    document.body.classList = showDiv ? "overflow-hidden" : "overflow-unset";
  }, [showDiv]);

  function openPopUp() {
    setShowDiv(true);
  }
  function closePopUp() {
    setShowDiv(false);
  }

  function iconProjectKind(kind) {
    if (kind == "Personal") {
      return <BsPersonSquare />;
    } else {
      return <ImOffice />;
    }
  }

  return (
    <>
      {showDiv && (
        <div
          className={
            " origin-center transition-all duration-75 ease-in-out fixed left-0 top-0 w-screen h-screen grid place-items-center z-50 p-4"
          }
        >
          <div className=" p-4 bg-white border-gray-300 border-[1px] rounded-md  shadow-3xl overflow-scroll max-h-[400px] md:max-h-[40.625rem] container mx-auto">
            <div className="sticky top-0 flex items-center justify-between px-2 mb-4 backdrop-blur-md rounded-2xl">
              <h2 className="text-xl font-semibold">Details</h2>
              <button
                onClick={closePopUp}
                className="text-red-400 text-[1.8rem]"
              >
                <IoMdCloseCircle />
              </button>
            </div>
            <div>
              <p className="paragraph-light">{description}</p>
            </div>
            <div className="hidden lg:block">
              <h2 className="mb-4 text-xl font-semibold">Web Live preview</h2>
              <embed
                src={projectUrl}
                className="bg-white rounded-md w-full lg:h-[600px] h-[300px] border-[1px]"
              />
            </div>
          </div>
        </div>
      )}

      <div className="w-full p-3 border rounded-md shadow-md ">
        <div className="flex items-center gap-2">
          <ImageLogo src={logo} alt={projectTitle} />
          <h3 className="font-medium capitalize text-md">{projectTitle}</h3>
        </div>
        <div className="flex flex-wrap items-center gap-2 my-2">
          <IconLinkButton
            title="Live web"
            link={projectUrl}
            icon={<BiWorld />}
          />
          <IconLinkButton
            title="GitHub code"
            link={githubLink}
            icon={<AiFillGithub />}
          />
          <button
            className="flex items-center gap-1 px-1 border border-blue-500 rounded-sm text-md hover:bg-slate-200 hover:border-black"
            onClick={openPopUp}
          >
            Details
            <BiDetail />
          </button>
        </div>

        <div className="flex flex-wrap gap-2 md:mb-2 max-md:my-2">
          {skills?.map((skill, i) => (
            <SkillBadge key={i} title={skill} />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="flex justify-center w-fit rounded-md items-center gap-2 text-[14px] px-2 py-1 border-[1px] border-yellow-400 bg-yellow-100 text-yellow-600 ">
            {iconProjectKind(projectKind)}
            {projectKind}
          </div>
          <p className="flex items-center gap-2 p-1 text-sm capitalize border border-gray-400 rounded-md w-fit">
            <MdOutlineDateRange />
            {date}
          </p>
        </div>
      </div>
    </>
  );
};

export default Project;
