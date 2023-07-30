import React from 'react'
import Image from 'next/image'
export default function ImageLogo({src, alt}) {
  return (
	<Image src={src} width={80} height={64} alt={alt} className="rounded-lg w-20 h-16 float-left object-cover box-border "/>

  )
}
