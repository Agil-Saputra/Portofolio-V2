// react
import React from "react";
// componets
import Container from "@/components/general/container";
import ImageLogo from "@/components/general/image";
import LinkForward from "@/components/general/linkForward";
import BasicBadge from "@/components/general/badges/basicBadge";
import DateBadge from "@/components/general/badges/dateBadge";
import BoldBadge from "@/components/general/badges/boldBadge";
// icons and Images
import { MdMilitaryTech } from "react-icons/md";
import { TiArrowForward } from "react-icons/ti";
import { SiSololearn } from "react-icons/si";
import soloLearn from "@/assets/sololearn.webp";
const Certification = () => {
  return (
    <Container title="📑 Certification">
      <div className="items-start w-full gap-4 mt-3 mb-6 md:flex">
        <ImageLogo src={soloLearn} alt="SoloLearn Image" />
        <div className="w-full">
          <div className="flex items-start justify-between w-full max-md:flex-col">
            <div>
              <h3 className="font-medium capitalize text-md">
                Sololearn Javascript Intermediate
              </h3>
              <div className="flex flex-wrap items-center gap-2 max-md:my-2">
				<BasicBadge title="JavaScript" icon={ <MdMilitaryTech />}/>
				<BasicBadge title="SoloLearn" icon={<SiSololearn />}/>
                <LinkForward title="Credential" icon={<TiArrowForward />} href={"/"} />
              </div>
            </div>

            <div className="flex flex-col md:items-end">
			  <BoldBadge title="ID: CC-ZN8ET1H1"/>
			  <DateBadge title="13 June 2023"/>
            </div>
          </div>
          <p className="paragraph-light">
    
          </p>
        </div>
      </div>
      <hr className="border-dashed" />
    </Container>
  );
};

export default Certification;
