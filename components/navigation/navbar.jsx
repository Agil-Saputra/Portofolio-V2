import React from 'react'
import English from "@/assets/eng.svg";
import Indonesian from "@/assets/ind.svg";
import Image from 'next/image';

import { MdDarkMode, MdLightMode } from 'react-icons/md'
const Navbar = () => {
  return (
    <nav className='w-full mb-4 p-4 mx-auto container z-10 flex justify-between'>
       <h1 className='text-[1.5rem]'>Agil Saputra.com</h1>
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