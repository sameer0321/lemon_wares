import React from 'react'
import { ClockIcon, Hosting, Certificates, Support } from './Icon'

const ServicesSection = () => {
    const products = [
        { heading: "99.9% Uptime", review: (<ClockIcon />), },
        { heading: "Blazing Fast Web Hosting", review: (<Hosting />), },
        { heading: "Free SSL Certificates", review: (<Certificates />), },
        { heading: "24x7 Friendly Support", review: (<Support />), },
    ]
    return (
        <>
            <div className=' mx-auto container  max-w-[1304px] px-3 '>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full lg:gap-5 xl:gap-[27px] my-8 sm:my-10 md:my-16 lg:my-[90px]' data-aos="fade-down" >
                    {products.map((items, index) => (
                        <div key={index} className='w-full bg-white duration-300  mb-4'>
                            <div className=' py-[10px] sm:py-[18px]'>
                                <div className='flex items-center flex-col justify-between mt-2 sm:mt-5'>
                                    <span>{items.review}</span>
                                    <p className='  text-black text-xl font-bold font-["Poppins"] pt-[15px]'>{items.heading}</p>

                                </div>
                                <p className='w-[252px] text-center text-black text-xs font-light font-["Poppins"] leading-normal pt-1 mx-auto'>We Keep Your Web build Online 24x7x365.
                                    Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.</p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ServicesSection


// hover:shadow-[0_0_4px_0_rgba(0,0,0,0.25)]