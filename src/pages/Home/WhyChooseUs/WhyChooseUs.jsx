import Heading from "../../../shared/Heading/Heading";
import "./whyChooseUs.css";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";

const WhyChooseUs = () => {
    return (
        <div>
            <div className="backPicture bg-fixed">
                <div className=" bg-black bg-opacity-5 lg:h-[500px]">
                    <div className="text-white pt-8">
                        <Heading title="why choose us"></Heading>
                        <div className="grid grid-cols-1 pt-8 md:grid-cols-3 gap-6 lg:gap-16 max-w-screen-lg mx-auto px-6 lg:px-0 pb-12">
                            <div className="bg-white relative text-black p-6 md:p-8 m-4">
                                <div className="flex absolute -top-6 left-[150px] md:left-[70px] lg:left-[105px]">
                                    <p className="p-3 text-white rounded-full bg-[#b63327]"><FaStar size={26} /></p>
                                </div>
                                <h1 className="font-bold text-center py-2">Handpicked Hotels</h1>
                                <p className="text-center text-[#333333] text-sm">Discover unparalleled luxury with our handpicked hotels.</p>
                            </div>
                            <div className="bg-white relative text-black p-6 md:p-8 m-4">
                                <div className="flex absolute -top-6 left-[150px] md:left-[70px] lg:left-[105px]">
                                    <p className="p-3 text-white rounded-full bg-[#b63327]"><FaGlobeAmericas size={26} /></p>
                                </div>
                                <h1 className="font-bold text-center py-2">World Class Service</h1>
                                <p className="text-center text-[#333333] text-sm">Experience world-class service tailored to perfection.</p>
                            </div>
                            <div className="bg-white relative text-black p-6 md:p-8 m-4">
                                <div className="flex absolute -top-6 left-[150px] md:left-[70px] lg:left-[105px]">
                                    <p className="p-3 text-white rounded-full bg-[#b63327]"><FaThumbsUp size={26} /></p>
                                </div>
                                <h1 className="font-bold text-center py-2">Handpicked Hotels</h1>
                                <p className="text-center text-[#333333] text-sm">Rest assured with our Best Price Guarantee – we promise the most competitive rates for your travel.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;