import React from 'react';
import Site1 from "../assets/images/brand-1.webp";
import Site2 from "../assets/images/brand-2.webp";
import Site3 from "../assets/images/brand-3.webp";
import Site4 from "../assets/images/brand-4.webp";
import Site5 from "../assets/images/brand-5.webp";
import Site6 from "../assets/images/brand-6.webp";

const WeServeSection = () => {
    return (
        <>
            <div className=' max-w-[1280px] mx-auto px-3 sm:py-7 py-3 md:py-10 container overflow-hidden' id='blognews'>
                <div className='flex flex-wrap flex-row -mx-3'>
                    <div className='w-full lg:w-1/2 px-3'>
                        <h2 className="lg:max-w-[445px] text-zinc-900 text-3xl sm:text-5xl font-extrabold font-['Inter'] leading-10 sm:leading-[64px]">We serve over 100 Nigerian Websites</h2>
                        <p className="lg:max-w-[573px] text-zinc-900 text-lg font-normal font-['Inter'] leading-7 sm:leading-[32px] pt-5">True Cloud Web Hosting All of the hosting packages we offer are deployed instantly on our SSD powered cloud. We don’t use dedicated servers that operate on single pieces of hardware. Our entire infrastructure is built to be reliable, secure, and scalable.<br /><br /></p>

                    </div>
                    <div className='w-full lg:w-1/2 px-3'>
                        <div className='flex flex-wrap flex-row -mx-3 pt-0 sm:pt-6 justify-center'>
                            <div className='sm:w-1/3 w-1/2 px-3 max-lg:flex max-lg:justify-center'>
                                <img className='max-[576px]:w-[100px] max-[576px]:h-[80px]' src={Site1} alt="site1" />
                            </div>
                            <div className='sm:w-1/3 w-1/2 px-3 max-lg:flex max-lg:justify-center'>
                                <img className='max-[576px]:w-[100px] max-[576px]:h-[80px]' src={Site2} alt="site2" />
                            </div>
                            <div className='sm:w-1/3 w-1/2 px-3 max-lg:flex max-lg:justify-center'>
                                <img className='max-[576px]:w-[100px] max-[576px]:h-[80px]' src={Site3} alt="site3" />
                            </div>
                            <div className='sm:w-1/3 w-1/2 px-3 max-lg:flex max-lg:justify-center'>
                                <img className='max-[576px]:w-[100px] max-[576px]:h-[80px]' src={Site4} alt="site4" />
                            </div>
                            <div className='sm:w-1/3 w-1/2 px-3 max-lg:flex max-lg:justify-center'>
                                <img className='max-[576px]:w-[100px] max-[576px]:h-[80px]' src={Site5} alt="site5" />
                            </div>
                            <div className='sm:w-1/3 w-1/2 px-3 max-lg:flex max-lg:justify-center'>
                                <img className='max-[576px]:w-[100px] max-[576px]:h-[80px]' src={Site6} alt="site6" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeServeSection;