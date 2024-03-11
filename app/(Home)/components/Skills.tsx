"use client"
import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/CardHoverEffect'
import { skills } from '@/constants/Skills'

const Skills = () => {
  return (
    <div className='max-w-5xl items-center mx-auto mt-20'>
        <Title title="Skills" className='flex flex-col items-center justify-center'/>
        <HoverEffect items={skills}/>
    </div>
  )
}

export default Skills