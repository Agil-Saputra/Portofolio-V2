import React from "react";
import Container from "@/components/general/container";
import Project from "@/components/section/projects experience/projectCard";
import { projectsData } from "@/data/projects";

const Projects = () => {
  return (
    <Container emoji="🗂️" title="Projects Experience">
      {projectsData.map((item, i) => {
        const {
          title,
          link,
          github,
          image,
          description,
          skills,
          date,
          kind,
          shortDescription,
		  logo
        } = item;
        return (
          <Project
            key={i}
            projectTitle={title}
            description={description}
            shortDescription={shortDescription}
            image={image}
			logo={logo}
            githubLink={github}
            projectUrl={link}
            projectKind={kind}
            skills={skills}
            date={date}
          />
        );
      })}
    </Container>
  );
};

export default Projects;
