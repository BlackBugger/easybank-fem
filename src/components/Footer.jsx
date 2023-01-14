import React from 'react'
import logo from '../assets/images/logo-light.svg'
import facebook from '../assets/images/icon-facebook.svg'
import youtube from '../assets/images/icon-youtube.svg'
import twitter from '../assets/images/icon-twitter.svg'
import pinterest from '../assets/images/icon-pinterest.svg'
import instagram from '../assets/images/icon-instagram.svg'


const Footer = () => {
    return (
        <div className='text-white text-a w-full md:h-full p-10 md:px-16 lg:px-40 bg-darkblue 
        flex flex-col gap-10 md:gap-16 items-center justify-center text-center lg:items-start lg:text-start'>
            <div className=' flex lg:flex-row  flex-col w-full justify-between gap-5'>
                <div className=' flex lg:flex-row flex-col lg:gap-[100px] gap-2 '>
                    <div className='w-full h-full flex flex-col justify-between items-center gap-7 lg:gap-5 mb-5 md:mb-0'>
                        <a href="/"><img src={logo} alt="" className='lg:w-[450px] object-cover' /></a>
                        <div className='flex gap-2'>
                            <a href="#"><img src={facebook} className='' alt="facebook" /></a>
                            <a href="#"><img src={youtube} alt="youtube" /></a>
                            <a href="#"><img src={twitter} alt="twitter" /></a>
                            <a href="#"><img src={pinterest} alt="pinterest" /></a>
                            <a href="#"><img src={instagram} alt="instagram" /></a>

                        </div>
                    </div>
                    <div className='flex flex-col w-full gap-3'>
                        <a href="#" className='hover:text-limegreen transition-all duration-300 ease-in-out'>About Us</a>
                        <a href="#" className='hover:text-limegreen transition-all duration-300 ease-in-out'>Contact</a>
                        <a href="#" className='hover:text-limegreen transition-all duration-300 ease-in-out'>Blog</a>
                    </div>
                    <div className='flex flex-col w-full gap-3'>
                        <a href="#" className='hover:text-limegreen transition-all duration-300 ease-in-out'>Careers</a>
                        <a href="#" className='hover:text-limegreen transition-all duration-300 ease-in-out'>Support</a>
                        <a href="#" className='hover:text-limegreen transition-all duration-300 ease-in-out'>Privacy Policy</a>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-5 lg:items-end items-center  h-full justify-between '>
                    <button className='hover:opacity-75 transition-all duration-500  px-[2.1rem] py-[0.875rem] rounded-[50px] bg-gradient-to-r from-limegreen to-brightcyan text-white text-[14px] font-400'>Request Invite</button>
                    <p className=' text-grayishblue'>© Easybank. All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer