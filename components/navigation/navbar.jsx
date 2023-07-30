import React from 'react'
import English from "@/assets/eng.svg";
import Indonesian from "@/assets/ind.svg";
import logo from "@/assets/logo.svg"
import Image from 'next/image';
import { Bebas_Neue, Amatic_SC, Righteous }  from "next/font/google"

const font = Righteous({
	weight: "400",
	subsets: ["latin"],
  });

import { MdDarkMode, MdLightMode } from 'react-icons/md'
const Navbar = () => {
  return (
    <nav className='w-full mb-4 p-4 mx-auto container z-10 flex justify-between'>
	   <div className='flex items-start gap-2'>
		<Image src={logo} alt='agils logo' width={30} height={30} className='max-w-[2rem]'/>
		<p className={`text-[1.45rem] max-[400px]:hidden ${font.className}`}>Agil Saputra.tech</p>
	   </div>
	   <div className='flex gap-3 items-center'>
		<button className='hover:bg-slate-200 p-2 rounded-2xl'>
			<MdLightMode/>
		</button>
		<button >
			<Image className='w-[2rem] h-auto' src={Indonesian} alt="bahasa indonesia" />
		</button>
		<button >
		<Image className='w-[2rem] h-auto' src={English} alt="English" />
		</button>
	   </div>
    </nav>
  )
}

export default Navbar