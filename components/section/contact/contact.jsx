import React from "react";
import Image from "next/image";
import profile from "@/assets/profile.jpg";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  function LinkContainer({ title, link, icon }) {
    return (
      <a
        href={link}
        className="px-3 text-sm py-2 border-[1px] bg-white border-slate-300 hover:border-black cursor-pointer rounded-lg flex gap-1 items-center"
      >
        {title}
        {icon}
      </a>
    );
  }
  return (
    <>
      <div className="flex gap-4 mb-6 items-center md:items-start">
        <div className="w-[6.25rem] h-[6.25rem]">
          <Image
            src={profile}
            alt="Profile Photo"
            width={100}
            height={90}
            className="rounded-md w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="font-semibold text-[1.8rem]">Agil Saputra</h2>
          <p className="text-md paragraph-light">Front End Developer</p>
          <div className="my-4 flex flex-wrap gap-1 max-sm:hidden">
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
      <div className="my-4 flex flex-wrap justify-center gap-1 sm:hidden">
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
