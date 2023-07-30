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
      <div className="md:flex items-start gap-4 w-full mb-6 mt-3">
        <ImageLogo src={soloLearn} alt="SoloLearn Image" />
        <div className="w-full">
          <div className="flex max-md:flex-col justify-between items-start w-full">
            <div>
              <h3 className="font-medium text-md capitalize">
                Sololearn Javascript Intermediate
              </h3>
              <div className="flex flex-wrap gap-2 items-center max-md:my-2">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            molestias culpa sed beatae labore pariatur aliquid, assumenda atque
            deleniti dolor?
          </p>
        </div>
      </div>
      <hr className="border-dashed" />
    </Container>
  );
};

export default Certification;
