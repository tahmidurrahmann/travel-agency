import { useParams } from "react-router-dom";
import useOffers from "../../../hooks/useOffers";
import Loading from "../../../shared/Loading/Loading";
import { useEffect } from "react";
import { useState } from "react";
import { Parallax } from 'react-parallax';
import { motion } from "framer-motion"
import { Helmet } from "react-helmet-async";

const Offer = () => {
    const { id } = useParams();

    const [allOffers, isOffers] = useOffers();
    const [offer, setOffer] = useState({})

    useEffect(() => {
        const offers = allOffers?.data?.find(offer => offer?._id === id);
        setOffer(offers);
    }, [allOffers, id])

    if (isOffers) {
        return <Loading />
    }

    return (
        <div>
            <Helmet>
                <title>Offer | Altair</title>
            </Helmet>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={offer?.image}
                bgImageAlt="the dog"
                strength={-200}
                className="-mt-28 object-cover"
            >
                <div className="h-[200px] md:h-[300px] lg:h-[700px] xl:h-[800px] bg-black bg-opacity-50" >
                    <motion.div initial={{ y: -150 }} animate={{ y: 0 }} transition={{ duration: "2", delay: "0" }} className="flex flex-col justify-center items-center space-y-4 md:space-y-6 h-[200px] md:h-[300px] lg:h-[700px] xl:h-[800px]">
                        <p className="text-white font-permanent uppercase underline font-medium">{offer?.country}</p>
                        <h1 className=" text-white font-bold text-2xl md:text-4xl lg:text-5xl">{offer?.tripName}</h1>
                    </motion.div>
                </div>
            </Parallax>
            <div className="px-6 lg:px-0 max-w-screen-lg mx-auto pb-16">
                <div className="space-y-1 my-8 md:my-12">
                    <h1 className="uppercase text-lg md:text-2xl lg:text-3xl text-center font-bold">{offer?.country} MOST EXCITING TRIP</h1>
                    <p className="text-[#b63327] text-center uppercase text-xs font-medium md:text-sm font-permanent">EXPERIENCES {offer?.days} DAYS EXCITING TRIP.</p>
                </div>
                <p className="text-sm text-[#333333]">{offer?.description}</p>
                {/* video will be here */}
                <div className="my-8 lg:my-12">
                    <h1 className="uppercase text-lg md:text-2xl lg:text-3xl text-center font-bold">TOUR PROGRAM</h1>
                    <p className="text-[#b63327] text-center uppercase text-xs font-medium md:text-sm font-permanent">EXPERIENCE WORLD CLASS 5 STARS HOTELS</p>
                </div>
                <div className="space-y-8">
                    <div className="space-y-2">
                        <h6 className="text-[#b63327] text-sm font-permanent font-medium">DAY 1-2</h6>
                        <h2 className="uppercase font-bold">{offer?.Day1}</h2>
                        <p className="text-sm text-[#333333]">{offer?.Day1Plan}</p>
                    </div>
                    <div className="space-y-2">
                        <h6 className="text-[#b63327] text-sm font-permanent font-medium">DAY 3-4</h6>
                        <h2 className="uppercase font-bold">{offer?.Day3}</h2>
                        <p className="text-sm text-[#333333]">{offer?.Day3Plan}</p>
                    </div>
                    <div className="space-y-2">
                        <h6 className="text-[#b63327] text-sm font-permanent font-medium">DAY 5-6</h6>
                        <h2 className="uppercase font-bold">{offer?.Day5}</h2>
                        <p className="text-sm text-[#333333]">{offer?.Day5Plan}</p>
                    </div>
                    <div className="space-y-2">
                        <h6 className="text-[#b63327] text-sm font-permanent font-medium">DAY 7-8</h6>
                        <h2 className="uppercase font-bold">{offer?.Day7}</h2>
                        <p className="text-sm text-[#333333]">{offer?.Day7Plan}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;