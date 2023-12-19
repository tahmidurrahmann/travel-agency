import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from "framer-motion"

const Banner = () => {
    return (
        <div className="-mt-28">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className="lg:h-[700px] w-full" src="https://i.ibb.co/XDXB34p/anthony-delanoix-QAwci-Fl-S1g4-unsplash.jpg" alt="" />
                    <div className='absolute top-0 bg-gradient-to-r from-[#151515] to-[#15151500] w-full h-full text-white'>
                        <motion.div initial={{ y: -150 }} animate={{ y: 0 }} transition={{ duration: "2", delay: "0" }} className='absolute right-28 left-16 md:left-24 space-y-2 md:space-y-5 top-24 md:top-52 lg:top-72'>
                            <p>FRANCE</p>
                            <h1 className='text-xl md:text-3xl lg:text-5xl text-white'>PARIS</h1>
                            <p className='text-sm md:text-base font-medium lg:w-1/3'>Discover Paris in style with Atlair — your passport to bespoke adventures in the City of Lights.</p>
                        </motion.div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="lg:h-[700px] w-full" src="https://i.ibb.co/PTs0vT7/henrique-ferreira-RKs-LQo-Snu-Tc-unsplash.jpg" alt="" />
                    <div className='absolute top-0 bg-gradient-to-r from-[#151515] to-[#15151500] w-full h-full text-white'>
                        <motion.div initial={{ y: -150 }} animate={{ y: 0 }} transition={{ duration: "2", delay: "0" }} className='absolute right-28 left-16 md:left-24 space-y-2 md:space-y-5 top-24 md:top-52 lg:top-72'>
                            <p>ITALY</p>
                            <h1 className='text-xl md:text-3xl lg:text-5xl text-white'>VENEZIA</h1>
                            <p className='text-sm md:text-base font-medium lg:w-1/3'>Experience enchanting Venice with Atlair — where every canal becomes a pathway to unforgettable moments in the Floating City.</p>
                        </motion.div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="lg:h-[700px] w-full" src="https://i.ibb.co/ctFqGxn/henrique-ferreira-omi-Tb-S-nb-M-unsplash.jpg" alt="" />
                    <div className='absolute top-0 bg-gradient-to-r from-[#151515] to-[#15151500] w-full h-full text-white'>
                        <motion.div initial={{ y: -150 }} animate={{ y: 0 }} transition={{ duration: "2", delay: "0" }} className='absolute right-28 left-16 md:left-24 space-y-2 md:space-y-5 top-24 md:top-52 lg:top-72'>
                            <p>SWITZERLAND</p>
                            <h1 className='text-xl md:text-3xl lg:text-5xl text-white'>ZURICH</h1>
                            <p className='text-sm md:text-base font-medium lg:w-1/3'>Embark on Swiss elegance with Atlair in Zurich — where stunning landscapes and cosmopolitan charm meet for an unforgettable journey through the heart of Switzerland.</p>
                        </motion.div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="lg:h-[700px] w-full" src="https://i.ibb.co/Bt9hQrV/justin-ziadeh-Y8d5m5-TZ0p0-unsplash.jpg" alt="" />
                    <div className='absolute top-0 bg-gradient-to-r from-[#151515] to-[#15151500] w-full h-full text-white'>
                        <motion.div initial={{ y: -150 }} animate={{ y: 0 }} transition={{ duration: "2", delay: "0" }} className='absolute right-28 left-16 md:left-24 space-y-2 md:space-y-5 top-24 md:top-52 lg:top-72'>
                            <p>CANADA</p>
                            <h1 className='text-xl md:text-3xl lg:text-5xl text-white'>TORONTO</h1>
                            <p className='text-sm md:text-base font-medium lg:w-1/3'>Discover Toronto's vibrant tapestry with Atlair — where urban sophistication and natural wonders converge for a uniquely Canadian adventure.</p>
                        </motion.div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;