import React from "react";
import Container from "@/components/general/container";
import English from "@/assets/eng.svg";
import Indonesian from "@/assets/ind.svg";
import Image from "next/image";
import Icon from "@/components/general/icon";

const Language = () => {
  return (
    <Container title="Languages">
      <div className="grid gap-4">
        <div className="flex items-center gap-3">
          <Icon>
            <Image src={English} alt="English" width={40} height={40} />
          </Icon>
          <div>
            <p className="font-semibold">English</p>
            <p className="text-[12px]">Professional Proficiency</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
        <Icon>
          <Image src={Indonesian} alt="indonesian" width={40} height={40} />
        </Icon>
          <div>
            <p className="font-semibold">Indonesia</p>
            <p className="text-[12px]">Native / Billingual Proficiency</p>
          </div>
        </div>
      </div>
     
    </Container>
  );
};

export default Language;
