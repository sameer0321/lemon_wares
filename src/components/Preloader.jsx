import React, { useEffect, useState } from "react";
import Flogo from "../assets/images/footer-logo.webp"
const Preloader = () => {
    const [loder, setloader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setloader(false);
        }, 3500);
    }, []);
    {
        if (loder === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }
    return (
        <div>
            {loder ? (
                <section
                    style={{ zIndex: "100" }}
                    className="bg-black top-0 start-0 fixed h-full w-full flex flex-col justify-center items-center"
                >
                    <div className="flex justify-center items-center animate-pulse
 flex-col text-center ">
                        <img className="max-w-[150px] w-full " src={Flogo} alt="Navlogo" />
                        <p className="text-[40px] text-white font-bold italic ">Lemon<span className=" text-red-700">Wares</span></p>
                    </div>
                </section>
            ) : (
                ""
            )}
        </div>
    );
};

export default Preloader;