import Banner from "../Banner/Banner";
import Customers from "../Customers/Customers";
import FixedBanner from "../FixedBanner/FixedBanner";
import Offers from "../Offers/Offers";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import News from "./News/News";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offers></Offers>
            <Customers />
            <FixedBanner />
            <WhyChooseUs />
            <News />
        </div>
    );
};

export default Home;