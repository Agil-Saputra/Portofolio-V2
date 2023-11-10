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

const Navbar = () => {
  return (
    <nav className='container z-10 flex justify-between w-full p-4 mx-auto mb-4'>
	   <div className='flex items-start gap-2 '>
		<Image src={logo} alt='agils logo' width={30} height={30} className='max-w-[2rem] '/>
	   </div>
	   <div className='flex items-center gap-3'>
		<button >
			<Image className='w-[2rem] h-[2rem] ' src={Indonesian} alt="bahasa indonesia" />
		</button>
		<button >
		<Image className='w-[2rem] h-[2rem]' src={English} alt="English" />
		</button>
	   </div>
    </nav>
  )
}

export default Navbar