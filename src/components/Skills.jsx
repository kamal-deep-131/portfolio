import React from 'react'
import { skillData } from '../../data'
import SkillCard from './SkillCard'

const Skills = () => {
    return (
        <div className='p-2 sm:p-4 md:p-6 lg:p-8 bg-myBg grid place-items-center gap-4 md:gap-6 rounded-t-3xl '>
            <h1 className='text-myBlack text-4xl md:text-4xl text-center font-semibold '>
                My Skills
            </h1>

            <div className='  grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 '>
                {skillData.map((skill, index) => <SkillCard key={index} skill={skill} />)}
            </div>
        </div>
    )
}

export default Skills