import React from 'react'

const Title = ({title, className}:{title: string, className?: string}) => {
  return (
    <div className={className}>
        <h1 className='text-2xl font-bold hover:underline hover:scale-105 transition-all inline-block'> {title}</h1>
    </div>
  )
}

export default Title