import { ImCross } from "react-icons/im";
import { Link, useNavigate, useParams } from "react-router-dom";
import useOffers from "../../hooks/useOffers";
import Loading from "../../shared/Loading/Loading";
import { useEffect, useRef, useState } from "react";
import "./Bookings.css"
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import emailjs from '@emailjs/browser';
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Bookings = () => {

    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const [allOffers, isOffers] = useOffers();
    const [singleOffer, setSingleOffer] = useState({});
    const form = useRef();
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (allOffers?.data?.length) {
            const offers = allOffers?.data?.find(offer => offer?._id === id);
            setSingleOffer(offers);
        }
    }, [allOffers, id])

    if (isOffers) {
        return <Loading />
    }

    const sendEmail = (e) => {
        e.preventDefault();
        const tripName = singleOffer?.tripName;
        const userEmail = user?.email;
        const tickets = parseInt(e?.target?.tickets?.value);
        const price = singleOffer?.price * tickets;
        const photo = singleOffer?.image;
        const bookingInfo = { tripName, userEmail, tickets, price, photo };
        emailjs.sendForm('service_8x2r2qa', 'template_z5fouma', form.current, 'kM2ZZ-I4QiQPp3W81')
            .then(async (result) => {
                if (result.text) {
                    const res = await axiosSecure.post("/bookingInfo", bookingInfo);
                    if (res?.data?.insertedId) {
                        toast.success('You Successfully Booked This Trip!');
                        navigate(`/offers/${id}`);
                    }
                    else{
                        toast.error("Insufficient ticket availability. Please choose a lower quantity.")
                    }
                }
            }, (error) => {
                toast.error(error.text);
            });
    };


    return (
        <div>
            <Helmet>
                <title>Booking | Altair</title>
            </Helmet>
            <div className="bg-no-repeat bg-cover object-cover" style={{ backgroundImage: `url(${singleOffer?.image})` }}>
                <div className="min-h-screen bg-black bg-opacity-50">
                    <Link to={`/offers/${id}`}><button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><ImCross className="text-white" size={18} /></button></Link>
                    <div className="min-h-screen flex flex-col justify-center items-center">
                        <h1 className="text-white font-bold uppercase text-xl lg:text-3xl text-center py-20 px-2 md:px-0">BOOKING FOR {singleOffer?.tripName}</h1>
                        <div className="w-full flex justify-center items-center max-w-screen-md mx-auto px-8 lg:px-0">
                            <form ref={form} onSubmit={sendEmail} className="w-full">
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="inputContainer w-full">
                                        <input defaultValue={user?.displayName} readOnly name="first_name" required className="customInput" type="text" />
                                        <label className="inputLabel font-semibold">FULL Name</label>
                                        <div className="inputUnderline"></div>
                                    </div>
                                    <div className="inputContainer w-full">
                                        <input name="tickets" required className="customInput" type="number" />
                                        <label className="inputLabel font-semibold">NUMBERS OF TICKETS</label>
                                        <div className="inputUnderline"></div>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row gap-6 mt-8">
                                    <div className="inputContainer w-full">
                                        <input defaultValue={user?.email} readOnly name="user_email" required className="customInput" type="email" />
                                        <label className="inputLabel font-semibold">EMAIL</label>
                                        <div className="inputUnderline"></div>
                                    </div>
                                    <div className="inputContainer w-full">
                                        <input name="number" required className="customInput" type="text" />
                                        <label className="inputLabel font-semibold">YOUR NUMBER</label>
                                        <div className="inputUnderline"></div>
                                    </div>
                                </div>
                                <div className="inputContainer w-full mt-8">
                                    <textarea name="message" required cols="10" rows="5" className="customInput" type="text" />
                                    <label className="inputLabel font-semibold">ADDITIONAL MESSAGE</label>
                                </div>
                                <div className="flex justify-center items-center">
                                    <input className="hover:bg-[#b63327] bg-[#4885a2] py-3 px-8 rounded-full text-white font-bold text-sm" type="submit" value="BOOK BY EMAIL" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bookings;