import React from 'react'
import { projectData } from '../../data'
import ProjectCard from './ProjectCard'

const Project = () => {
    return (
        <div className='p-2 sm:p-4 md:p-6 lg:p-8 bg-myWhite grid place-items-center gap-4 md:gap-6 rounded-b-3xl '>
            <h1 className='text-myBlack text-4xl md:text-4xl text-center font-semibold '>
                My Recent Work
            </h1>
            <div className='  grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6  '>
                {
                    projectData.map((project, index) => <ProjectCard key={index} project={project} />)
                }
            </div>
        </div>
    )
}

export default Project