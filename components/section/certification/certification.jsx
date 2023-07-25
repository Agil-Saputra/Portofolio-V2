import Container from '@/components/general/container'
import React from 'react'
import { MdMilitaryTech } from 'react-icons/md'
import {TiArrowForward} from "react-icons/ti"
import { MdOutlineDateRange } from 'react-icons/md'
import {SiSololearn} from "react-icons/si"

const Certification = () => {
  return (
    <Container title="📑 Certification">
		 <div className="md:flex items-start gap-4 w-full mb-6 mt-3">
        <div className="bg-zinc-950 border border-zinc-800 rounded-lg w-20 h-16 flex items-center justify-center"></div>
        <div className="w-full">
          <div className="flex max-md:flex-col justify-between items-start w-full">
            <div>
              <h3 className="font-medium text-md capitalize">
                Sololearn Javascript Intermediate
              </h3>
              <div className="flex flex-wrap gap-2 items-center max-md:my-2">
                <p className="flex items-center gap-2 text-sm border rounded-md p-1 ">
                
                  JavaScript
				  <MdMilitaryTech/>
                </p>
                <p className="flex items-center gap-2 text-sm border rounded-md p-1 ">      
                  Sololearn
				  <SiSololearn/>
                </p>
				<a
                  className="flex items-center gap-1 text-sm text-cyan-600 cursor-pointer hover:bg-slate-200 hover:border-black hover:scale-105 border px-2 py-1 rounded-md"
                >
                  Credential
                  <TiArrowForward />
                </a>
              </div>
            </div>

            <div className="flex flex-col md:items-end">
              <div className="flex rounded-md justify-center items-center gap-2 text-[14px] px-2 border-[1px] border-yellow-400 bg-yellow-100 text-yellow-600 mb-1 w-fit">
                ID: CC-ZN8ET1H1
              </div>
              <p className="flex items-center gap-2 text-sm border rounded-md p-1 capitalize">
				<MdOutlineDateRange/>
                13 June 2023
              </p>
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
  )
}

export default Certification