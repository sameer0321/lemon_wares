import React, { useState } from "react";
import logo from "../assets/images/logo.webp";
import { CallIcon } from './Icon';

const Navbar = () => {
    const [first, setfirst] = useState(false);
    function setopen() {
        setfirst(!first);
        if (first === false) {
            document.body.classList.add("max-lg:overflow-hidden");
        } else {
            document.body.classList.remove("max-lg:overflow-hidden");
        }
    }
    return (
        <>
            <div className="max-w-[1216px] mx-auto px-3 ">
                <nav className="flex items-center justify-between">
                    <div className="flex items-center gap-[110px]  xl:gap-[135px] pt-10">
                        <div className="flex items-center gap-[48px] xl:gap-[62px]">
                            <img className="max-w-[92px]" src={logo} alt="logo" />
                            <a
                                href="#!"
                                className=" max-sm:hidden font-[Poppins] font-semibold text-[#000] text-[15px] leading-normal relative before:w-0 before:h-[2px] before:rounded-[10px] before:bg-[#B00000] before:absolute before:left-3 before:bottom-[-10%] before:duration-300 before:transition-all before:ease-linear before:hover:w-[77%]"
                            >
                                Our Services
                            </a>
                        </div>
                        <div
                            className={`${first ? "right-0" : "right-[-100%]"
                                } flex  gap-[33px] sm:gap-0   max-[1023px]:w-full h-full fixed bg-slate-500 bg-[#0000] top-0 items-center justify-center lg:h-unset lg:static  lg:bg-transparent lg:justify-end flex-col lg:flex-row z-40 transition-all ease-linear duration-300 `}
                        >
                            <ul className="flex items-center gap-[33px] flex-col lg:flex-row">
                                <li>
                                    <a onClick={setopen}
                                        href="#!"
                                        className=" font-[Poppins] font-semibold text-[#000] sm:hidden text-[15px] leading-normal relative before:w-0 before:h-[2px] before:rounded-[10px] before:bg-[#B00000] before:absolute before:left-3 before:bottom-[-10%] before:duration-300 before:transition-all before:ease-linear before:hover:w-[77%]"
                                    >
                                        Our Services
                                    </a>
                                </li>
                                <li>
                                    <a onClick={setopen}
                                        href="#1"
                                        className=" font-[Poppins] font-semibold text-[#000] text-[15px] leading-normal relative before:w-0 before:h-[2px] before:rounded-[10px] before:bg-[#B00000] before:absolute before:left-1 before:bottom-[-10%] before:duration-300 before:transition-all before:ease-linear before:hover:w-[77%] "
                                    >
                                        About{" "}
                                    </a>
                                </li>
                                <li>
                                    <a onClick={setopen}
                                        href="#1"
                                        className=" font-[Poppins] font-semibold text-[#000] text-[15px] leading-normal relative before:w-0 before:h-[2px] before:rounded-[10px] before:bg-[#B00000] before:absolute before:left-2 before:bottom-[-10%] before:duration-300 before:transition-all before:ease-linear before:hover:w-[77%] "
                                    >
                                        Blog&News{" "}
                                    </a>
                                </li>
                                <li>
                                    <a onClick={setopen}
                                        href="#1"
                                        className=" font-[Poppins] font-semibold text-[#000] text-[15px] leading-normal  relative before:w-0 before:h-[2px] before:rounded-[10px] before:bg-[#B00000] before:absolute before:left-2 before:bottom-[-10%] before:duration-300 before:transition-all before:ease-linear before:hover:w-[77%]"
                                    >
                                        Contact{" "}
                                    </a>
                                </li>
                            </ul>
                            <div className="flex sm:hidden items-center gap-[33px] flex-col ">
                                <a onClick={setopen}
                                    href="#!"
                                    className=" font-[Poppins] font-semibold text-[#000] text-[15px] leading-normal before:absolute relative   after:w-0 after:h-[2px] after:rounded-[10px] after:bg-[#B00000] after:absolute after:left-2 after:bottom-[-10%] after:duration-300 after:transition-all after:ease-linear after:hover:w-[77%]"
                                >
                                    Account
                                </a>
                                <a onClick={setopen}
                                    href="#!"
                                    className=" font-[Poppins] font-semibold text-[#000] text-[15px] leading-normal flex items-center gap-[6px] lg:pe-[52px]  relative before:w-0 before:h-[2px] before:rounded-[10px] before:bg-[#B00000] before:absolute before:left-7 before:bottom-[-10%] before:duration-300 before:transition-all before:ease-linear before:hover:w-[77%]"
                                >
                                    <span>
                                        <CallIcon />
                                    </span>
                                    +2349067322844
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 pt-10">
                        <div className="hidden sm:flex items-center gap-[62px]">
                            <a
                                href="#!"
                                className=" font-[Poppins] font-semibold text-[#000] text-[15px] leading-normal before:absolute relative before:w-[1px] before:h-[19px] before:bg-[#DAD8D8] before:top-1 before:right-[-32px]  after:w-0 after:h-[2px] after:rounded-[10px] after:bg-[#B00000] after:absolute after:left-2 after:bottom-[-10%] after:duration-300 after:transition-all after:ease-linear after:hover:w-[77%]"
                            >
                                Account
                            </a>
                            <a
                                href="#!"
                                className=" font-[Poppins] font-semibold text-[#000] text-[15px] leading-normal flex items-center gap-[6px] lg:pe-[52px] relative before:w-0 before:h-[2px] before:rounded-[10px] before:bg-[#B00000] before:absolute before:left-7 before:bottom-[-10%] before:duration-300 before:transition-all before:ease-linear before:hover:w-[62%] "
                            >
                                <span>
                                    <CallIcon />
                                </span>
                                +2349067322844
                            </a>
                        </div>{" "}
                        <div onClick={setopen}>
                            {first ? (
                                <div className="flex lg:hidden flex-col relative z-50 justify-between w-[24px] h-[24px] cursor-pointer  ">
                                    {" "}
                                    <span className="bg-[#000] w-full rounded-2xl h-1 relative z-50 mb-[3px] transition-all ease-linear duration-300 rotate-[45deg] -bottom-[9px]"></span>
                                    <span className="bg-[#000] w-full rounded-2xl h-1 relative z-50 mb-[3px] transition-all ease-linear duration-300 -rotate-45 bottom-2"></span>
                                </div>
                            ) : (
                                <div className=" flex lg:hidden flex-col relative z-50 justify-between w-[24px] h-[24px] cursor-pointer ">
                                    {" "}
                                    <span className="bg-[#000] w-full rounded-2xl h-1 relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                                    <span className="bg-[#000]  w-full rounded-2xl h-1 relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                                    <span className="bg-[#000] w-full rounded-2xl h-1 relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                                </div>
                            )}
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;



