import React from "react";
import Container from "@/components/general/container";
import SkillBadge from "@/components/general/badges/skillBadge";

const Tools = () => {
  const tools = [
    "Github",
    "Figma",
    "Rest API",
    "Zeplin",
    "Postman",
    "Visual Studio Code",
  ];
  return (
    <Container emoji="🛠️" title="Tools">
      <div className="flex flex-wrap gap-2 mb-1">
        {tools.map((item, i) => (
          <SkillBadge key={i} title={item} />
        ))}
      </div>
    </Container>
  );
};

export default Tools;
