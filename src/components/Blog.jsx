import React from 'react'

import money from '../assets/images/image-currency.jpg'
import restaurant from '../assets/images/image-restaurant.jpg'
import plane from '../assets/images/image-plane.jpg'
import confetti from '../assets/images/image-confetti.jpg'

const Blog = () => {

    const blogs = [
        {
            image: money,
            title: "Receive money in any currency with no fees",
            author: "By Claire Robinson",
            desription: "The world is getting smaller and we are becoming more mobile. So why should you be forced to only receive money in a single …"
        },
        {
            image: restaurant,
            title: "Treat yourself without worrying about money",
            author: "Wilson Hutton",
            desription: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
        },
        {
            image: plane,
            title: "Take your Easybank card wherever you go",
            author: "By Wilson Hutton",
            desription: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
        },
        {
            image: confetti,
            title: "Our invite-only Beta accounts are now live!",
            author: "By Claire Robinson",
            desription: "  After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
        },
    ]

    return (
        <div className=' w-full md:h-full py-16 px-6 md:px-16 lg:px-40 bg-verylightgray flex flex-col gap-10 md:gap-16 items-center justify-center text-center lg:items-start lg:text-start'>

            <h2 className="text-darkblue text-h2 ">
                Latest Articles
            </h2>

            <div className='w-full grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-around gap-[1.875rem] items-center '>

                {blogs.map((blog, i) => (

                    <div className='bg-white overflow-hidden rounded-lg h-full w-full lg:w-[250px] card-shadow hover:scale-105 transition-all duration-1000 ease-in-out  '>

                        <div className='h-3/6'>
                            <img src={blog.image} alt="" className='h-full w-full object-cover scale-105 ' />
                        </div>
                        <a href="/" target="_blank" rel="noopener noreferrer"><div className='h-3/6 lg:p-6 p-6 flex flex-col gap-3'>
                            <p className='text-xxsP'></p>
                            <h4 className='text-h4 text-darkblue font-[400]'>{blog.title}</h4>
                            <p className='text-xsP'>{blog.desription}</p>
                        </div>
                        </a>
                    </div>

                ))}

             
            </div>


        </div>
    )
}

export default Blog