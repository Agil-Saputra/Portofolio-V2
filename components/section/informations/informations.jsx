import React from "react";
import Container from "@/components/general/container";
import { GoMail } from "react-icons/go";
import { RxLaptop } from "react-icons/rx";
import Info from "./info";
const PersonalInformation = () => {
  return (
    <Container emoji="📱" title="Information's">
      <div className="grid gap-3">
        <Info
          title={
            <a className="hover:underline underline-offset-[3px] cursor-pointer">
              ragelyusuf752@gmail.com
            </a>
          }
		  type="email"
		  icon='💌'
        />
		<Info 
			title={<p>Home/Office</p>}
			type='work type'
			icon='🏢'
		/>
      </div>
    </Container>
  );
};

export default PersonalInformation;
