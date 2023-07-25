import React from "react";
import Container from "@/components/general/container";
import Chip from "@/components/general/skill-chip";

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
          <Chip key={i} title={item} />
        ))}
      </div>
    </Container>
  );
};

export default Tools;
