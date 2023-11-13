import React from "react";
import Container from "@/components/general/container";

const AboutMe = ({description}) => {
  return (
    <Container title="📝 About Me">
      {description}
    </Container>
  );
};

export default AboutMe;
