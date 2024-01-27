import React from 'react';
import cPanel from "../assets/images/cPanel.webp";
import Imunify from "../assets/images/imunify.webp";
import LiteSpeed from "../assets/images/lite-Speed.webp";
import Softaculous from "../assets/images/softaculous.webp";
import WordPress from "../assets/images/wordpress.webp";
import CloudFlare from "../assets/images/cloudFlare.webp";

const Truecloud = () => {
    return (
        <>
            <div className=' max-w-[1280px] mx-auto px-3 py-10 container' id='ourservices'>
                <div className='flex flex-wrap flex-row -mx-3'>
                    <div className='w-full lg:w-1/2 px-3'>
                        <h2 className=" text-zinc-900 sm:text-[35px] text-[30px] md:text-[40px] lg:text-5xl font-extrabold font-['Inter'] leading-[40px] sm:leading-[64px]">True Cloud Web  Hosting</h2>
                        <p className="lg:max-w-[573px] text-zinc-900 text-[15px] sm:text-lg font-normal font-['Inter'] leading-[30px] sm:leading-loose pt-7">True Cloud Web Hosting All of the hosting packages we offer are deployed instantly on our SSD powered cloud. We don’t use dedicated servers that operate on single pieces of hardware. Our entire infrastructure is built to be reliable, secure, and scalable.</p>

                    </div>
                    <div className='w-full lg:w-1/2 px-3'>
                        <div className='grid grid-col-2 sm:grid-cols-3 max-sm:grid-cols-2 lg:grid-cols-3  -mx-3 gap-[59px] mt-[25px]  '>
                            <div className='span-col-2 flex lg:justify-end justify-center  items-center px-3'>
                                <img src={cPanel} alt="cPanel" />
                            </div>
                            <div className='span-col-2 flex lg:justify-end justify-center  items-center px-3'>
                                <img src={Imunify} alt="imunify" />
                            </div>
                            <div className='span-col-2 flex lg:justify-end justify-center  items-center px-3'>
                                <img src={LiteSpeed} alt="lite-speed" />
                            </div>
                            <div className='span-col-2 flex lg:justify-end justify-center  items-center px-3'>
                                <img src={Softaculous} alt="softaculaous" />
                            </div>
                            <div className='span-col-2 flex lg:justify-end justify-center  items-center px-3'>
                                <img src={WordPress} alt="wordpress" />
                            </div>
                            <div className='span-col-2 flex lg:justify-end justify-center items-center px-3'>
                                <img src={CloudFlare} alt="cloudFlare" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Truecloud