import { Link } from "react-router-dom";
import useOffers from "../../../hooks/useOffers";
import Heading from "../../../shared/Heading/Heading";
import Loading from "../../../shared/Loading/Loading";
import "./offers.css"

const Offers = () => {

    const [allOffers, isOffers] = useOffers();

    if (isOffers) {
        return <Loading />
    }

    return (
        <div>
            <Heading title="best offers"></Heading>
            <p className="text-center text-[#b63327] text-xs md:text-base font-raleway font-semibold uppercase pb-8 lg:pb-16">CHECK OUT OUR BEST PROMOTION TOURS</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-8 lg:mb-16">
                {
                    allOffers?.data?.map(offer => <div className="group overflow-hidden cursor-pointer font-raleway" key={offer?._id}>
                        <Link to={`/offers/${offer?._id}`} className="group relative block">
                            <div className="relative h-[350px] sm:h-[450px]">
                                <img
                                    src={offer?.image}
                                    alt="country's trip image"
                                    className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:scale-110 transition"
                                />
                            </div>
                            <div className="absolute hover:bg-[#b63327ab] top-[280px] md:top-[360px] py-4 md:py-6 detail flex justify-around items-center">
                                <div>
                                    <h3 className="text-sm font-permanent">{offer?.country}</h3>
                                    <h1 className="md:text-xl font-bold">{offer?.tripName}</h1>
                                </div>
                                <div>
                                    <p className="text-xs font-bold">{offer?.days} DAYS</p>
                                    <p className="font-bold text-xl">${offer?.price}</p>
                                </div>
                            </div>
                        </Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Offers;