import React from 'react'
import { FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';


const Contact = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className='p-2 sm:p-4 md:p-6 lg:p-8 bg-myWhite grid place-items-center gap-4 md:gap-6 rounded-t-3xl '>
            <div>
                <img src="/images/handshake.svg" alt="handshake" width={150}
                    className='rounded-full bg-myBg p-4' />
            </div>
            <h1 className='text-myBlack text-4xl md:text-5xl text-center font-semibold '>
                Feel free to contact me <br />
                about your project
            </h1>
            <div className='pt-6 flex w-full items-center justify-center gap flex-wrap'>
                <a href="#" className='text-md px-12 py-4 font-otterco bg-myBlack text-myWhite rounded-full border-myBg border-2 shadow-lg' >Resume</a>
                <a href="#" className='text-md px-12 py-4 font-otterco bg-myWhite text-myBlack rounded-full border-myBg border-2 shadow-lg' >Resume</a>
            </div>
            <hr className='w-full h-[1px] bg-myBlack' />
            <div className='flex flex-col md:flex-row items-center justify-between w-full'>
                <p className='text-xs font-otterco'> &copy; {currentYear} All rights reserved.</p>
                <ul className='flex items-center justify-end gap-2'>
                    <li>
                        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-myBlack hover:text-myWhite transition">
                            <FaInstagram className="w-4 h-4" />
                            <span className='font-otterco font-normal text-xs' >Instagram</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-myBlack hover:text-myWhite transition">
                            <FaLinkedinIn className="w-4 h-4" />
                            <span className='font-otterco font-normal text-xs' >LinkedIn</span>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:your-email@example.com" className="flex items-center space-x-2 text-myBlack hover:text-myWhite transition">
                            <FaEnvelope className="w-4 h-4" />
                            <span className='font-otterco font-normal text-xs'>Email</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Contact