import React, { useState } from 'react'
import { TickSign } from './Icon';

const PlansSection = () => {
    const [first, setFirst] = useState("tab1")
    function tabs(tab) {
        setFirst(tab);
    }
    const [isChecked, setIsChecked] = useState(false);

    const toggleSwitch = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div id='about' className=' max-w-[1121px] mx-auto px-3 mt-[40px] 576:mt-[50px] md:mt-[90px] 992:mt-[133px] overflow-hidden'>

            <p className=' font-poppins text-[#000] font-semibold leading-[36px] 450:leading-[50px] 576:leading-[60px] text-center text-[28px] 450:text-[40px] 576:text-[50px] mx-auto max-w-[650px]'>Ready to get started with
                Lemon Wares?</p>
            <p className=' text-center font-poppins text-[16px] 450:text-[22px] 576:text-[25px] leading-[25px] text-[#000] font-normal mt-[10px] 576:mt-[38px]'>Choose the package that suits you</p>
            <div className=' flex items-center mx-auto 450:justify-center mt-[15px] 576:mt-[30px] md:mt-[57px] justify-between max-w-[300px] 450:max-w-[unset]'>
                <p className=' font-poppins text-[20px] 450:text-[25px] font-normal leading-[25px] text-[#000] 450:mr-[31px]'>Monthly</p>
                <label htmlFor="toggle" className="flex items-center cursor-pointer">
                    <div className="relative">
                        <input
                            type="checkbox"
                            id="toggle"
                            className="hidden"
                            checked={isChecked}
                            onChange={toggleSwitch}
                        />
                        <div className={`${isChecked ? 'bg-[#FFE87A]' : 'bg-[#B00000]'} duration-300 rounded-[73px] w-[75px] 450:w-[93px] h-[35px] 450:h-[50px] p-[10px_9px]`}>
                            <div
                                className={`absolute w-[22px] 450:w-[30px] h-[22px] 450:h-[30px] bg-white rounded-full shadow inset-y-0 top-[6px] 450:top-[10px] duration-300 ${isChecked ? ' translate-x-[37px] 450:translate-x-[43px]' : 'translate-x-0'
                                    }`}
                            ></div>
                        </div>

                    </div>
                </label>
                <p className=' font-poppins text-[20px] 450:text-[25px] font-normal leading-[25px] text-[#000] 450:ml-[26px] 450:mr-[17px]'>Yearly</p>
                <button className=' hidden 450:block font-poppins text-[10px] leading-[9px] font-medium text-[#000] p-[7px_8px] rounded-[8px] bg-[#FFE87A]'>20% discount</button>
            </div>
            <button className=' hidden mx-auto mt-[8px] font-poppins text-[10px] leading-[9px] font-medium text-[#000] p-[7px_8px] rounded-[8px] bg-[#FFE87A]'>20% discount</button>
            <div className=' max-w-[856px] mx-auto flex relative after:absolute after:w-full after:left-0 after:h-[4px] after:bottom-[-6px] after:bg-[#C4C4C4] mt-[20px] 576:mt-[40px] md:mt-[70px]'>
                <div onClick={() => tabs('tab1')} className={` ${first === "tab1" ? " relative after:absolute after:w-full after:h-1  after:left-0 after:bottom-[-6px] after:bg-[#B00000] z-10" : ""} w-[50%] flex justify-center`}>
                    <span onClick={() => tabs('tab1')} className='text-[#000] font-poppins text-[30px] font-semibold leading-[40px] cursor-pointer'>Basic</span></div>
                <div onClick={() => tabs('tab2')} className={` ${first === "tab2" ? "relative after:absolute after:w-full after:h-1  after:left-0 after:bottom-[-6px] after:bg-[#B00000] z-10" : ""} w-[50%] flex justify-center`}>
                    <span onClick={() => tabs('tab2')} className=' text-[#000] font-poppins text-[30px] font-semibold leading-[40px] cursor-pointer'>Premium</span></div>
            </div>
            {first === 'tab1' && <div className=' flex flex-wrap flex-row -mx-3 mt-[20px] 576:mt-[40px] md:mt-[65px] lg:mt-[95px] justify-center md:justify-start'>
                <div className=' w-full 576:w-1/2 md:w-1/3 px-3'>
                    <div className=' cursor-pointer mx-auto 992:mx-0 p-[20px_15px] 576:p-[34px_15px_48px_20px] 992:p-[34px_27px_48px_34px] max-w-[300px] rounded-[15px] bg-[#fff] border-[1.5px] border-[#C4C4C4] shadow-[0px_0px_4px_0px_#00000040_inset] duration-[.3s] ease-linear hover:shadow-[0px_0px_5px_0px_#b000004d_inset] hover:border-transparent'>
                        <p className=' font-poppins text-[28px] font-semibold leading-[25px] text-[#000]'>Starter</p>
                        <p className=' max-w-[237px] font-poppins text-[12px] font-normal leading-[18px] text-[#000] mt-[5px] 576:mt-[11px]'>with all your customers via all conversation channels in one central dashboard.</p>
                        <p className=' font-poppins text-[42px] leading-[32px] font-semibold text-[#000] mt-[10px] 576:mt-[28px]'>{isChecked ? '$26.88' : '$2.80'}</p>
                        <p className=' text-[#000] font-poppins text-[14px] font-light leading-[14px] mt-[11px]'>{isChecked ? 'Per year' : 'Per month'}</p>
                         <button className=' font-poppins text-[14px] text-[#000] font-semibold leading-[32px] rounded-[12px] border-[2px] border-[#000] max-w-[256px] w-full mt-[14px] 576:mt-[35px] py-[4px] 576:py-[9px] text-center hover:text-[#fff] hover:shadow-[0px_0px_64px_0px_#b000004d] duration-300 hover:border-transparent hover:bg-[#B00000]'>Choose this Plan</button>
                        <div className=' flex flex-col gap-[6px] 576:gap-[15px] mt-[14px] 576:mt-[35px]'>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>2GB SSD</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>10GB Bandwidth</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>15 Email Accounts</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>Unlimited Database</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>4 Subdomains</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>1 Parked Domain</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>2 Websites</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>Free SSL</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>Softaculous</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' w-full 576:w-1/2 md:w-1/3 px-3 mt-[8px] 450:mt-[20px] 576:mt-0'>
                    <div className=' cursor-pointer mx-auto 992:mx-0 p-[20px_15px] 576:p-[34px_15px_48px_20px] 992:p-[34px_27px_48px_34px] max-w-[300px] rounded-[15px] bg-[#fff] border-[1.5px] border-[#C4C4C4] shadow-[0px_0px_4px_0px_#00000040_inset] duration-[.3s] ease-linear hover:shadow-[0px_0px_5px_0px_#b000004d_inset] hover:border-transparent'>
                        <p className=' font-poppins text-[28px] font-semibold leading-[25px] text-[#000]'>Standard</p>
                        <p className=' max-w-[237px] font-poppins text-[12px] font-normal leading-[18px] text-[#000] mt-[5px] 576:mt-[11px]'>with all your customers via all conversation channels in one central dashboard.</p>
                        <p className=' font-poppins text-[42px] leading-[32px] font-semibold text-[#000] mt-[10px] 576:mt-[28px]'>{isChecked ? '$40.32' : '$4.20'}</p>
                        <p className=' text-[#000] font-poppins text-[14px] font-light leading-[14px] mt-[11px]'>{isChecked ? 'Per year' : 'Per month'}</p>
                         <button className=' font-poppins text-[14px] text-[#000] font-semibold leading-[32px] rounded-[12px] border-[2px] border-[#000] max-w-[256px] w-full mt-[14px] 576:mt-[35px] py-[4px] 576:py-[9px] text-center hover:text-[#fff] hover:shadow-[0px_0px_64px_0px_#b000004d] duration-300 hover:border-transparent hover:bg-[#B00000]'>Choose this Plan</button>
                        <div className=' flex flex-col gap-[6px] 576:gap-[15px] mt-[14px] 576:mt-[35px]'>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter ttext-[14px] 450:ext-[16px] font-bold leading-[24px] text-[#808080]'>2GB SSD</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>10GB Bandwidth</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>15 Email Accounts</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>Unlimited Database</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>4 Subdomains</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>1 Parked Domain</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>2 Websites</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>Free SSL</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>Softaculous</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' w-full 576:w-1/2 md:w-1/3 px-3 mt-[8px] 450:mt-[20px] md:mt-0'>
                    <div className=' cursor-pointer mx-auto 992:mx-0 p-[20px_15px] 576:p-[34px_15px_48px_20px] 992:p-[34px_27px_48px_34px] max-w-[300px] rounded-[15px] bg-[#fff] border-[1.5px] border-[#C4C4C4] shadow-[0px_0px_4px_0px_#00000040_inset] duration-[.3s] ease-linear hover:shadow-[0px_0px_5px_0px_#b000004d_inset] hover:border-transparent'>
                        <p className=' font-poppins text-[28px] font-semibold leading-[25px] text-[#000]'>Suprem</p>
                        <p className=' max-w-[237px] font-poppins text-[12px] font-normal leading-[18px] text-[#000] mt-[5px] 576:mt-[11px]'>with all your customers via all conversation channels in one central dashboard.</p>
                        <p className=' font-poppins text-[42px] leading-[32px] font-semibold text-[#000] mt-[10px] 576:mt-[28px]'>{isChecked ? '$67.20' : '$7.00'}</p>
                        <p className=' text-[#000] font-poppins text-[14px] font-light leading-[14px] mt-[11px]'>{isChecked ? 'Per year' : 'Per month'}</p>
                         <button className=' font-poppins text-[14px] text-[#000] font-semibold leading-[32px] rounded-[12px] border-[2px] border-[#000] max-w-[256px] w-full mt-[14px] 576:mt-[35px] py-[4px] 576:py-[9px] text-center hover:text-[#fff] hover:shadow-[0px_0px_64px_0px_#b000004d] duration-300 hover:border-transparent hover:bg-[#B00000]'>Choose this Plan</button>
                        <div className=' flex flex-col gap-[6px] 576:gap-[15px] mt-[14px] 576:mt-[35px]'>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>2GB SSD</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>10GB Bandwidth</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>15 Email Accounts</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>Unlimited Database</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>4 Subdomains</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>1 Parked Domain</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>2 Websites</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>Free SSL</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>Softaculous</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>}
            {first === 'tab2' && <div className=' flex flex-wrap flex-row -mx-3 mt-[20px] 576:mt-[40px] md:mt-[65px] lg:mt-[95px] justify-center md:justify-start'>
                <div className=' w-full 576:w-1/2 md:w-1/3 px-3'>
                    <div className=' cursor-pointer mx-auto 992:mx-0 p-[20px_15px] 576:p-[34px_15px_48px_20px] 992:p-[34px_27px_48px_34px] max-w-[300px] rounded-[15px] bg-[#fff] border-[1.5px] border-[#C4C4C4] shadow-[0px_0px_4px_0px_#00000040_inset] duration-[.3s] ease-linear hover:shadow-[0px_0px_5px_0px_#b000004d_inset] hover:border-transparent'>
                        <p className=' font-poppins text-[28px] font-semibold leading-[25px] text-[#000]'>Suprem</p>
                        <p className=' max-w-[237px] font-poppins text-[12px] font-normal leading-[18px] text-[#000] mt-[5px] 576:mt-[11px]'>with all your customers via all conversation channels in one central dashboard.</p>
                        <p className=' font-poppins text-[42px] leading-[32px] font-semibold text-[#000] mt-[10px] 576:mt-[28px]'>{isChecked ? '$67.20' : '$7.00'}</p>
                        <p className=' text-[#000] font-poppins text-[14px] font-light leading-[14px] mt-[11px]'>{isChecked ? 'Per year' : 'Per month'}</p>
                         <button className=' font-poppins text-[14px] text-[#000] font-semibold leading-[32px] rounded-[12px] border-[2px] border-[#000] max-w-[256px] w-full mt-[14px] 576:mt-[35px] py-[4px] 576:py-[9px] text-center hover:text-[#fff] hover:shadow-[0px_0px_64px_0px_#b000004d] duration-300 hover:border-transparent hover:bg-[#B00000]'>Choose this Plan</button>
                        <div className=' flex flex-col gap-[6px] 576:gap-[15px] mt-[14px] 576:mt-[35px]'>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>2GB SSD</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>10GB Bandwidth</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>15 Email Accounts</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>Unlimited Database</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>4 Subdomains</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>1 Parked Domain</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>2 Websites</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>Free SSL</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>Softaculous</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' w-full 576:w-1/2 md:w-1/3 px-3 mt-[8px] 450:mt-[20px] 576:mt-0'>
                    <div className=' cursor-pointer mx-auto 992:mx-0 p-[20px_15px] 576:p-[34px_15px_48px_20px] 992:p-[34px_27px_48px_34px] max-w-[300px] rounded-[15px] bg-[#fff] border-[1.5px] border-[#C4C4C4] shadow-[0px_0px_4px_0px_#00000040_inset] duration-[.3s] ease-linear hover:shadow-[0px_0px_5px_0px_#b000004d_inset] hover:border-transparent'>
                        <p className=' font-poppins text-[28px] font-semibold leading-[25px] text-[#000]'>Standard</p>
                        <p className=' max-w-[237px] font-poppins text-[12px] font-normal leading-[18px] text-[#000] mt-[5px] 576:mt-[11px]'>with all your customers via all conversation channels in one central dashboard.</p>
                        <p className=' font-poppins text-[42px] leading-[32px] font-semibold text-[#000] mt-[10px] 576:mt-[28px]'>{isChecked ? '$40.32' : '$4.20'}</p>
                        <p className=' text-[#000] font-poppins text-[14px] font-light leading-[14px] mt-[11px]'>{isChecked ? 'Per year' : 'Per month'}</p>
                         <button className=' font-poppins text-[14px] text-[#000] font-semibold leading-[32px] rounded-[12px] border-[2px] border-[#000] max-w-[256px] w-full mt-[14px] 576:mt-[35px] py-[4px] 576:py-[9px] text-center hover:text-[#fff] hover:shadow-[0px_0px_64px_0px_#b000004d] duration-300 hover:border-transparent hover:bg-[#B00000]'>Choose this Plan</button>
                        <div className=' flex flex-col gap-[6px] 576:gap-[15px] mt-[14px] 576:mt-[35px]'>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>2GB SSD</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>10GB Bandwidth</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>15 Email Accounts</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>Unlimited Database</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>4 Subdomains</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>1 Parked Domain</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>2 Websites</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>Free SSL</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>Softaculous</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' w-full 576:w-1/2 md:w-1/3 px-3 mt-[8px] 450:mt-[20px] md:mt-0'>
                    <div className=' cursor-pointer mx-auto 992:mx-0 p-[20px_15px] 576:p-[34px_15px_48px_20px] 992:p-[34px_27px_48px_34px] max-w-[300px] rounded-[15px] bg-[#fff] border-[1.5px] border-[#C4C4C4] shadow-[0px_0px_4px_0px_#00000040_inset] duration-[.3s] ease-linear hover:shadow-[0px_0px_5px_0px_#b000004d_inset] hover:border-transparent'>
                        <p className=' font-poppins text-[28px] font-semibold leading-[25px] text-[#000]'>Starter</p>
                        <p className=' max-w-[237px] font-poppins text-[12px] font-normal leading-[18px] text-[#000] mt-[5px] 576:mt-[11px]'>with all your customers via all conversation channels in one central dashboard.</p>
                        <p className=' font-poppins text-[42px] leading-[32px] font-semibold text-[#000] mt-[10px] 576:mt-[28px]'>{isChecked ? '$26.88' : '$2.80'}</p>
                        <p className=' text-[#000] font-poppins text-[14px] font-light leading-[14px] mt-[11px]'>{isChecked ? 'Per year' : 'Per month'}</p>
                         <button className=' font-poppins text-[14px] text-[#000] font-semibold leading-[32px] rounded-[12px] border-[2px] border-[#000] max-w-[256px] w-full mt-[14px] 576:mt-[35px] py-[4px] 576:py-[9px] text-center hover:text-[#fff] hover:shadow-[0px_0px_64px_0px_#b000004d] duration-300 hover:border-transparent hover:bg-[#B00000]'>Choose this Plan</button>
                        <div className=' flex flex-col gap-[6px] 576:gap-[15px] mt-[14px] 576:mt-[35px]'>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>2GB SSD</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>10GB Bandwidth</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>15 Email Accounts</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>Unlimited Database</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>4 Subdomains</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>1 Parked Domain</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>2 Websites</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>Free SSL</p>
                            </div>
                            <div className=' flex gap-[10px] 450:gap-[15px] 992:gap-[24px] items-center'>
                                <span><TickSign /></span>
                                <p className=' font-inter text-[14px] 450:text-[16px] font-bold leading-[24px] text-[#808080]'>Softaculous</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}

        </div>
    )
}

export default PlansSection