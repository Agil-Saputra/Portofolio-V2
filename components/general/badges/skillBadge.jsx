import React from 'react'

const SkillBadge = ({title}) => {
  return (
    <div className='cursor-grab active:cursor-grabbing font-bold text-cyan-800 text-[12px] px-2 py-1 rounded-md border-[1px] border-cyan-600 bg-cyan-400 bg-opacity-30 w-fit'>{title}</div>
  )
}

export default SkillBadge