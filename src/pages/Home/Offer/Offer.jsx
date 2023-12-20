import { useParams } from "react-router-dom";
import useOffers from "../../../hooks/useOffers";
import Loading from "../../../shared/Loading/Loading";
import { useEffect } from "react";
import { useState } from "react";
import { Parallax } from 'react-parallax';
import { motion } from "framer-motion"

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
console.log(offer);
    return (
        <div>
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
        </div>
    );
};

export default Offer;