import React from "react";
import Container from "@/components/general/container";
import DownloadIcon from "@/components/section/documents/download-icon";
import { AiOutlineFilePdf } from "react-icons/ai";
import Icon from "@/components/general/icon";
const Documents = () => {
  return (
    <Container emoji='📄' title="Document">
      <div className="flex justify-between items-center w-full sticky top-10">
        <div className="flex items-center gap-3">
          <Icon>
            <AiOutlineFilePdf size={26} />
          </Icon>
          <div>
            <p>Resume / CV</p>
            <p className="text-[12px]">PDF</p>
          </div>
        </div>
        <DownloadIcon />
      </div>
    </Container>
  );
};

export default Documents;
