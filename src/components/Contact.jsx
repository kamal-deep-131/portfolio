import React from 'react'

const Contact = () => {
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
            <div className='pt-6 flex w-full items-center justify-center gap'>
                <a href="#" className='text-md px-12 py-4 font-otterco bg-myBlack text-myWhite rounded-full border-myBg border-2 shadow-lg' >Resume</a>
                <a href="#" className='text-md px-12 py-4 font-otterco bg-myWhite text-myBlack rounded-full border-myBg border-2 shadow-lg' >Resume</a>
            </div>
        </div>
    )
}

export default Contact