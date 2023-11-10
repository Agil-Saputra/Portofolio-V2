import React from 'react'
import Image from 'next/image'
export default function ImageLogo({src, alt}) {
  return (
	<Image src={src} width={80} height={64} alt={alt} className="box-border float-left object-cover rounded-lg h-14 w-14 "/>

  )
}
