import Image from 'next/image'
import React from 'react'
import { socials } from '@/constants/Socials'
import { cn } from '@/lib/utils'

const Navbar = ({className}: {className?: string}) => {
    return (
        <nav className={cn('flex flex-row justify-between items-center py-10 px-5', className)}>
            <div className='flex flex-row items-center gap-2 my-2'>
                    <Image
                        src='/LogoCentrum.png'
                        width={50}
                        height={50}
                        alt='logo'
                        className='rounded-full'
                    />
                    <h1 className='text-xl font-bold  '>Centrum</h1>
            </div>
            <div className='flex flex-row items-center gap-5'>
                {socials.map((social, index) => {
                    const Icon = social.icon
                    return (
                        <a href={social.link} key={index} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                            <Icon className='w-5 h-5 cursor-pointer hover:scale-125 transition-all'/>
                        </a>
                    )
                })}
            </div>
        </nav>
    )
}

export default Navbar