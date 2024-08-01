import React from 'react'
import { Element } from 'react-scroll'

const Hero = () => {
    return (
        <Element name={"home"} className='pt-24 md:pt-28 p-2 sm:p-4 md:p-6 lg:p-8 overflow-x-hidden bg-myBg grid place-items-center gap-4 md:gap-6 rounded-b-3xl '>
            <div className="relative w-fit z-0 ">
                <img src="/images/kamal.jpg" width={160} alt="Kamal" className="rounded-full border-4 border-myWhite shadow-lg" />
                <p className="absolute font-semibold text-xs font-otterco px-6 py-3 bg-myWhite rounded-full top-16 -right-24 shadow-lg  animate-slideIn">
                    Kamal deep 👋🏼
                </p>
            </div>
            <div>
                <h1 className='text-gradient text-4xl md:text-5xl text-center font-semibold tracking-tight'>
                    Building digital <br />
                    products, brands, and <br />
                    experience.
                </h1>
            </div>
            <div className='py-6'>
                <a href="#" className='text-md px-12 py-4 font-otterco shadow-lg bg-myBlack text-myWhite rounded-full' >Resume</a>
            </div>
        </Element>
    )
}

export default Hero