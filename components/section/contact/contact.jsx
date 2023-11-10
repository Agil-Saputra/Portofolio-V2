import React from "react";
import Image from "next/image";
import profile from "@/assets/profile.jpg";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  function LinkContainer({ title, link, icon }) {
    return (
      <a
        href={link}
        className="flex items-center gap-1 px-3 py-2 text-sm bg-white border border-black rounded-lg shadow-lg cursor-pointer hover:border-black"
      >
        {title}
        {icon}
      </a>
    );
  }
  return (
    <>
      <div className="flex items-center gap-4 mb-2 md:items-start">
        <div className="w-[6.25rem] h-[6.25rem] before:content-[''] before:h-[2rem] before:[2rem] before:bg-red-600 before:absolute before:left-0 before:top-0">
          <Image
            src={profile}
            alt="Profile Photo"
            width={100}
            height={90}
            className="object-cover w-full h-full border-2 border-black rounded-md "
          />
        </div>
        <div>
          <h2 className="font-semibold text-[1.8rem] text-slate-50">Agil Saputra</h2>
          <p className="text-md paragraph-light text-slate-50">Front End Developer</p>
          <div className="flex flex-wrap gap-1 my-4 max-sm:hidden">
            <LinkContainer
              title="GitHub"
              link="https://github.com/Agil-Saputra/"
              icon={<BsGithub />}
            />
            <LinkContainer
              title="LinkedIn"
              link="https://www.linkedin.com/in/agil-saputra07/"
              icon={<BsLinkedin />}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-1 my-4 sm:hidden">
        <LinkContainer
          title="GitHub"
          link="https://github.com/Agil-Saputra/"
          icon={<BsGithub />}
        />
        <LinkContainer
          title="LinkedIn"
          link="https://www.linkedin.com/in/agil-saputra07/"
          icon={<BsLinkedin />}
        />
      </div>
    </>
  );
};

export default Contact;
