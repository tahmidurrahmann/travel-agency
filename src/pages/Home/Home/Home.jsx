import Banner from "../Banner/Banner";
import Customers from "../Customers/Customers";
import FixedBanner from "../FixedBanner/FixedBanner";
import Offers from "../Offers/Offers";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offers></Offers>
            <Customers />
            <FixedBanner />
            <WhyChooseUs />
        </div>
    );
};

export default Home;