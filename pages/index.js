import React from "react";
import Head from "next/head";
// components
import GradientBg from "@/components/general/gradientBackground/gradientBg";
import Documents from "@/components/section/documents/documents";
import PersonalInformation from "@/components/section/informations/informations";
import Skills from "@/components/section/skills/skills";
import Language from "@/components/section/languages/language";
import Contact from "@/components/section/contact/contact";
import Navbar from "@/components/navigation/navbar";
import Projects from "@/components/section/projects experience/projects";
import Professional from "@/components/section/profesional experience/professional";
import Education from "@/components/section/education/education";
import AboutMe from "@/components/section/about/about-me";
import Certification from "@/components/section/certification/certification";
import Tools from "@/components/section/tools/tools";

const Home = () => {
  return (
    <>
      <Head>
        <title>Agil Saputra</title>
		<link rel="shortcut icon" href="/logo.svg" />
      </Head>
      <GradientBg />
      <Navbar />
      <div className="container flex flex-col flex-1 gap-4 px-4 mx-auto mb-10">
        <div className="flex flex-col gap-6 lg:flex-row h-fit">
          <aside className="w-full lg:w-[22.5rem] h-fit">
            <Contact />
            <div className="flex flex-col gap-6 lg:sticky lg:top-10">
              <Documents />
              <PersonalInformation />
              <Skills />
              <Tools />
              <Language />
            </div>
          </aside>
          <main className="flex flex-col flex-1 gap-6">
            <AboutMe />
            <Projects />
            <Professional />
            <Education />
            <Certification />
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
