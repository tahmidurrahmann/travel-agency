import Heading from "../../../shared/Heading/Heading";
import "./FixedBanner.css"

const FixedBanner = () => {
    return (
        <div>
            <div className="background bg-fixed">
                <div className="h-[300px] md:h-[400px] lg:h-[600px]"></div>
            </div>
            <Heading title="LAKE GENEVA SWITZERLAND"></Heading>
            <div className="pt-8 md:pt-16">
                <div className="max-w-screen-lg mx-auto flex flex-col lg:flex-row justify-center gap-8 lg:gap-16 pb-8 md:pb-16 px-6">
                    <div className="text-sm text-[#333333] font-raleway">
                        <p>Embark on a journey of unparalleled beauty with Lake Geneva Escapes, your gateway to the enchanting wonders of Switzerland. Nestled amidst the majestic Alps, Lake Geneva is a breathtaking destination that seamlessly blends natural splendor with cultural richness, and our travel agency is here to ensure you experience it all.</p>
                        <p> At Lake Geneva Escapes, we believe in creating bespoke journeys tailored to your desires. Whether you seek the tranquility of lakeside retreats, the thrill of alpine adventures, or the charm of historic towns, our expert travel consultants curate personalized itineraries that capture the essence of your dream getaway.Immerse yourself in luxury with our handpicked selection of accommodations.</p>
                    </div>
                    <div>
                        <p className="font-raleway text-lg">"It was fantastic going on the sled to see the views on the mountains! And the action of it – I loved going fast!"</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FixedBanner;