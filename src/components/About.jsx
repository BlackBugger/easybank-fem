import React from 'react'
import bankingIcon from '../assets/images/icon-online.svg'
import budgetingIcon from '../assets/images/icon-budgeting.svg'
import onboardingIcon from '../assets/images/icon-onboarding.svg'
import apiIcon from '../assets/images/icon-api.svg'
const About = () => {

  const items = [
    {
      image: bankingIcon,
      title: "Online Banking",
      desription: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
    },
    {
      image: budgetingIcon,
      title: "Simple Budgeting",
      desription: "See exactly where your money goes each month. Receive notifications when you are close to hitting your limits."
    },
    {
      image: onboardingIcon,
      title: "Fast Onboarding",
      desription: "We do not do branches. Open your account in minutes online and start taking control of your finances right away."
    },
    {
      image: apiIcon,
      title: "Open API",
      desription: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
    },
  ]

  return (
    <div className=' w-full md:h-full py-16 px-6 md:px-16 lg:px-40 bg-lightgrayblue flex flex-col gap-10 md:gap-16 items-center justify-center text-center lg:items-start lg:text-start'>
      <div className="flex flex-col gap-5 md:w-4/6 lg:w-2/6">
        <h2 className="text-darkblue text-h2 ">
          Why choose Easybank?
        </h2>
        <p className="text-smP">
          We leverage Open Banking to turn your bank account into your financial hub. Control
          your finances like never before.
        </p>
      </div>


      <div className='w-full  flex flex-col md:flex-row justify-around items-center'>
        <div className='w-full flex  gap-8 flex-wrap justify-between items-center'>

          {items.map((item, i) => (
            <div className='md:w-[300px] flex flex-col lg:items-start items-center justify-center gap-5 hover:scale-105 transition-all duration-1000 ease-in-out' key={i}>
              <img src={item.image} alt="" />
              <h3 className="text-h3 text-darkblue">{item.title}</h3>
              <p className="text-smP ">{item.desription}</p>
            </div>
          ))}


        </div>
      </div>


    </div>
  )
}

export default About