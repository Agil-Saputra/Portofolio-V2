import React from "react";
import Icon from "../../general/icon";
import { GoMail } from "react-icons/go";

const Info = ({ title, type, icon }) => {
  return (
    <div className="flex gap-3 items-center">
      <Icon>
        <p className="text-[23px]">{icon}</p>
      </Icon>
      <div>
        {title}
        <p className="text-[12px] capitalize">{type}</p>
      </div>
    </div>
  );
};

export default Info;
