import Heading from "../../../shared/Heading/Heading";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Customers = () => {
    return (
        <div className="max-w-screen-md mx-auto px-6">
            <Heading title="WHAT CUSTOMERS SAY"></Heading>
            <Swiper
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="pt-8 pb-16">
                        <p className="text-center font-raleway">Altair Travel Agency's deep expertise and dedication to unique experiences set them apart. Prompt communication, impressive organization—my go-to for memorable journeys.</p>
                        <h4 className="text-center text-sm pt-4 font-bold">Jhankar Mahbub Sir    <span className="text-[#b63327] font-permanent"> CEO  -    Programming Hero</span></h4>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="pt-8 pb-16">
                        <p className="text-center font-raleway">Exceptional professionalism and VIP treatment from Altair Travel Agency. Every detail exceeded expectations, making them our go-to for future adventures.</p>
                        <h4 className="text-center text-sm pt-4 font-bold">Christina Hardy      <span className="text-[#b63327] font-permanent">  Marketing Manager -   Red Inc.</span></h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="pt-8 pb-16">
                        <p className="text-center font-raleway">Altair Travel Agency turned my dream vacation into a flawless reality. Impeccable service, personalized care, and an unforgettable experience. Highly recommend!</p>
                        <h4 className="text-center text-sm pt-4 font-bold">Mark Anthony  <span className="text-[#b63327] font-permanent">CEO  -  WikiMedia</span></h4>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Customers;