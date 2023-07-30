import React from "react";
import Container from "@/components/general/container";
import SkillBadge from "@/components/general/badges/skillBadge";

const Skills = () => {
	const frontEnd = ["React", "Next.js", "Typescript", "Sass", "Tailwind", "Material UI", "Ant Design"]
	const backend = ["Strapi", "Contentful", "Node.js"]
	const testing = ["React Testing Libary", "Jest"]
  return (
    <Container emoji='💻' title="Skills">
      <h2 className="font-semibold mb-2">Front End</h2>
      <div className="flex flex-wrap gap-2 mb-1">
        {frontEnd.map((skill, i) => (
			<SkillBadge key={i} title={skill} />
		))}
      </div>
      <h2 className="font-semibold mb-2">Back End</h2>
      <div className="flex flex-wrap gap-2 mb-1">
	  {backend.map((skill, i) => (
			<SkillBadge key={i} title={skill} />
		))}
      </div>
      <h2 className="font-semibold mb-2">Testing</h2>
      <div className="flex flex-wrap gap-2 mb-1">
	  {testing.map((skill, i) => (
			<SkillBadge key={i} title={skill} />
		))}
      </div>
    </Container>
  );
};

export default Skills;
