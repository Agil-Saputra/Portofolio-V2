import React from "react";
import Container from "@/components/general/container";
import Skill from "@/components/general/skill-chip";

const Skills = () => {
  return (
    <Container emoji='💻' title="Skills">
      <h2 className="font-semibold mb-2">Front End</h2>
      <div className="flex flex-wrap gap-2 mb-1">
        <Skill title="Next.js" />
        <Skill title="Javascript" />
        <Skill title="HTML" />
        <Skill title="CSS" />
        <Skill title="React" />
      </div>
      <h2 className="font-semibold mb-2">Back End</h2>
      <div className="flex flex-wrap gap-2 mb-1">
        <Skill title="Next.js" />
        <Skill title="Javascript" />
        <Skill title="HTML" />
        <Skill title="CSS" />
        <Skill title="React" />
      </div>
      <h2 className="font-semibold mb-2">Testing</h2>
      <div className="flex flex-wrap gap-2 mb-1">
        <Skill title="Next.js" />
        <Skill title="Javascript" />
        <Skill title="HTML" />
        <Skill title="CSS" />
        <Skill title="React" />
      </div>
    </Container>
  );
};

export default Skills;
