import React from 'react'
import { FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { Element } from 'react-scroll';

const Contact = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Element name='contact' className='p-4 md:p-6 lg:p-8 bg-myWhite grid place-items-center gap-4 md:gap-6 rounded-t-3xl '>
            <div>
                <img src="/images/handshake.svg" alt="handshake" width={150}
                    className='rounded-full bg-myBg p-4 shadow-lg' />
            </div>
            <h1 className='text-myBlack text-2xl md:text-4xl text-center font-semibold '>
                Feel free to contact me <br />
                about your project
            </h1>
            <div className='pt-6 flex w-full items-center justify-center gap-4 flex-wrap'>
                <a href="https://www.linkedin.com/in/kamaldeep2004/"
                    target="_blank"
                    className='text-lg px-12 py-4 font-otterco bg-myBlack text-myWhite rounded-full border-myBg border-2 shadow-lg' >LinkedIn</a>
                <a href="https://wa.me/9817526073?text=Hello%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you!"
                    target="_blank" className='text-lg px-12 py-4 font-otterco bg-myWhite text-myBlack rounded-full border-myBg border-2 shadow-lg' >Whatsapp</a>
            </div>
            <hr className='w-full h-[1px] bg-myBlack' />
            <footer className='flex flex-col md:flex-row items-center justify-between w-full'>
                <p className='text-sm font-otterco'> &copy; {currentYear} All rights reserved.</p>
                <ul className='flex items-center justify-end gap-2 mb-4'>
                    <li>
                        <a href="https://www.instagram.com/kamal_deep_131/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-myBlack ">
                            <FaInstagram className="w-5 h-5" />
                            <span className='font-otterco font-normal text-base' >Instagram</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/kamaldeep2004/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-myBlack ">
                            <FaLinkedinIn className="w-4 h-4" />
                            <span className='font-otterco font-normal text-base' >LinkedIn</span>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:email2kamaldeep@gmail.com" className="flex items-center space-x-2 text-myBlack ">
                            <FaEnvelope className="w-4 h-4" />
                            <span className='font-otterco font-normal text-base'>Email</span>
                        </a>
                    </li>
                </ul>
            </footer>
        </Element>
    )
}

export default Contact