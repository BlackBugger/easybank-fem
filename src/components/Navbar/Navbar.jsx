import React from 'react'
import logo from '../../assets/images/logo.svg'
import './navbar.css'
const Navbar = () => {

    const navToggle = (e) => {
        const nav = document.querySelector('#navMenu');
const overlay = document.querySelector('#overlay')

        document.onclick = (e) => {
         console.log(e.target.id);
        }

        nav.classList.toggle('active')
        overlay.classList.toggle('active')
    }

    return (
        <header className='w-full  text-[18px]'>
            <div id="overlay" className='overlay'></div>
            <nav className='w-full lg:px-40  z-20 bg-white border-b border-[transparent] relative flex justify-between items-center'>
                <a href="/"><img src={logo} alt="" className='w-[141px] h-[22px]' /></a>
                <button className='relative sm:hidden'>
                    <input onClick={() => navToggle()} type="checkbox" name='hamburger' id='hamburger' className='peer' hidden />
                    <label htmlFor="hamburger" className='peer-checked:hamburger block relative'>
                        <div aria-hidden="true" className='m-auto h-0.5 w-6 rounded bg-darkblue transition duration-500' />
                        <div aria-hidden="true" className='m-auto h-0.5 w-6 mt-1 rounded bg-darkblue transition duration-500' />
                        <div aria-hidden="true" className='m-auto h-0.5 w-6 mt-1 rounded bg-darkblue transition duration-500' />
                    </label>

                </button>

                <div id="navMenu" className='z-20 navbar flex flex-col sm:flex-row items-center sm:gap-[32px] sm:text-sm'>
                    <a href='#' className=''>Home</a>
                    <a href='#' className=''>About</a>
                    <a href='#' className=''>Contact</a>
                    <a href='#' className=''>Blog</a>
                    <a href='#' className=''>Careers</a>
                  
                </div>
                <button className=' hover:opacity-75 transition-all duration-500 hidden sm:block px-[2.1875rem] py-[0.875rem] rounded-[50px] bg-gradient-to-r from-limegreen to-brightcyan text-white text-[14px] font-bold '>Request Invite</button>

            </nav>

        </header>
    )
}

export default Navbar