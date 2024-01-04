import { Link } from "react-router-dom";
import useOffers from "../../../hooks/useOffers";
import Heading from "../../../shared/Heading/Heading";
import Loading from "../../../shared/Loading/Loading";
import { Divider } from "@mui/material";
import "./offers.css"
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

const Offers = () => {

    const [allOffers, isOffers] = useOffers();
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        setOffers(allOffers?.data)
    }, [allOffers])

    if (isOffers) {
        return <Loading />
    }

    const handleSearchDestination = (e) => {
        e.preventDefault();
        const form = e.target;
        const city = form.city.value.toLowerCase();
        // const start = form.start.value;
        // const end = form.end.value;
        const price = parseInt(form.price.value);
        // const destinationDetails = { city, start, end, price };
        // console.log(destinationDetails);
        const searchResult = allOffers?.data?.filter(offer => offer?.country === city | offer?.price === price);
        setOffers(searchResult)
    }

    return (
        <div>
            <form onSubmit={handleSearchDestination} className="flex flex-wrap md:flex-row justify-center items-center gap-6 my-6 md:my-12">
                <div className="flex-col">
                    <div><label htmlFor="destination">Destination</label></div>
                    <input type="text" name="city" className="border px-2 py-1 mt-2" placeholder="Search by City Name" required />
                </div>
                {/* <div className="flex-col">
                    <div><label htmlFor="date">Start Date</label></div>
                    <input name="start" className="border px-2 py-1 mt-2" type="date" placeholder="Departure" />
                </div>
                <div className="flex-col">
                    <div><label htmlFor="date">End Date</label></div>
                    <input name="end" className="border px-2 py-1 mt-2" type="date" placeholder="Departure" />
                </div> */}
                <div className="flex-col">
                    <div><label htmlFor="date">Price</label></div>
                    <input name="price" type="number" className="border px-2 py-1 mt-2" placeholder="USD EX. 100" required />
                </div>
                <input className="hover:bg-[#b63327] bg-[#4885a2] py-2 px-16 md:px-24 rounded-full text-white font-bold text-sm" type="submit" value="SEARCH" />
            </form>
            <Divider></Divider>
            <Heading title="best offers"></Heading>
            <p className="text-center text-[#b63327] text-xs md:text-base font-raleway font-semibold uppercase pb-8 lg:pb-16">CHECK OUT OUR BEST PROMOTION TOURS</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-8 lg:mb-16">
                {
                    offers?.map(offer => <div className="group overflow-hidden cursor-pointer font-raleway" key={offer?._id}>
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
            {
                offers?.length === 0 && <div className="flex flex-col justify-center items-center space-y-4 pb-8 md:pb-16"><IoSearch size={46} /><p>No properties found</p>
                    <p>There are no matching properties for your search criteria. Try updating your search.</p></div>
            }
        </div>
    );
};

export default Offers;