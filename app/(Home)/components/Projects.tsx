import React from 'react'
import { projects } from '@/constants/Projects'
import Title from './Title'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from '@/components/ui/DirectionAwareHover'

const Projects = () => {

  return (
    <div className='py-10 p-5 sm:p-0 max-w-6xl mx-auto'>
        <Title title="Projects - Work" className='flex flex-col items-center justify-center'/>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-20 gap-5'>
           {projects.map((project, index) => {
            return (
                <Link key={index} href={project.link}>
                    <div className={cn("p-5 gap-5 rounded-md", project.background)}>
                        <DirectionAwareHover
                            imageUrl={project.cover}
                            className='w-full space-y-5 cursor-pointer'
                        >
                            <div className='space-y-5'>    
                                <h1 className='text-2xl font-bold'>{project.title}</h1>
                                <div className='flex items center gap-5'>
                                    {project.tech.map((Icon, index) => {
                                        return (
                                            <Icon key={index} className='w-10 h-10' />
                                        )
                                    })}
                                </div>
                            </div>
                        </DirectionAwareHover>
                    </div>
                </Link>
            )
            
            })} 
        </div>
    </div>
  )
}

export default Projects