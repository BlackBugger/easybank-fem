import React from 'react'
import bg from '../assets/images/bg-intro-desktop.svg'
import mobileBg from '../assets/images/bg-intro-mobile.svg'
import mobile from '../assets/images/image-mockups.png'
const Home = () => {
    return (
        <div className='bg-verylightgray max-md:pb-10 lg:h-[calc(100vh-80px)] md:h-[calc(100vh-120px)] w-full flex flex-col justify-center items-center  lg:flex-row'>

            <div className='sm:order-1 md:order-1 lg:order-2 homeBackground  '></div>

            <div className='h-full px-8 lg:w-[41%]  lg:mx-40 sm:order-2 md:order-2 lg:order-1 text-center lg:text-start 
            // md:text-center flex flex-col  justify-center lg:items-start items-center gap-5 
            md:px-10 lg:p-0 md:w-[70%] md:pb-8 w-full'>
                <h1 className='text-h1 sm:text-[52px] text-darkblue '>
                    Next generation digital banking
                </h1>
                <p className='text-p font-[400] mb-2'>
                    Take your financial life online. Your Easybank account will be a one-stop-shop
                    for spending, saving, budgeting, investing, and much more.
                </p>
                <a href="" className='hover:opacity-75 transition-all duration-500 px-[2.1875rem] py-[0.875rem] rounded-[50px] bg-gradient-to-r from-limegreen to-brightcyan text-white text-[14px] font-bold'>Request Invite</a>
            </div>


        </div>
    )
}

export default Home