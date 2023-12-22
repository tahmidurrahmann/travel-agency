import Heading from "../../../../shared/Heading/Heading";
import "./News.css"

const News = () => {
    return (
        <div>
            <div className="backNews bg-fixed">
                <div className="lg:min-h-screen">
                    <div className="text-white">
                        <Heading title="NEWS & UPDATE"></Heading>
                        <h6 className="text-gray-200 text-center text-xs font-medium md:text-sm font-permanent pb-8 md:pb-16">OUR LATEST NEWS & PROMOTIONS</h6>
                        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8 lg:gap-12 px-6 lg:px-16 pb-8 md:pb-16">
                            <img className="w-[315px] h-[400px]" src="https://themes.themegoods.com/altair/demo/wp-content/uploads/2014/10/s01-1024x682.jpg" alt="" />
                            <img className="w-[315px] h-[400px]" src="https://themes.themegoods.com/altair/demo/wp-content/uploads/2014/05/1600x1200-8-1024x768.jpg" alt="" />
                            <img className="w-[315px] h-[400px]" src="https://themes.themegoods.com/altair/demo/wp-content/uploads/2014/10/1600x1200-4-1024x768.jpg" alt="" />
                            <img className="w-[315px] h-[400px]" src="https://themes.themegoods.com/altair/demo/wp-content/uploads/2014/10/1600x1200-9-1024x768.jpg" alt="" />
                            <img className="w-[315px] h-[400px]" src="https://themes.themegoods.com/altair/demo/wp-content/uploads/2014/10/paris-opera-night-france-hd-widescreen-wallpapers-1024x640.jpg" alt="" />
                            <img className="w-[315px] h-[400px]" src="https://themes.themegoods.com/altair/demo/wp-content/uploads/2014/10/1600x1200-12-1024x768.jpg" alt="" />
                            <img className="w-[315px] h-[400px]" src="https://themes.themegoods.com/altair/demo/wp-content/uploads/2011/05/paris-cityscapes_00411691-1024x576.jpg" alt="" />
                            <img className="w-[315px] h-[400px]" src="https://themes.themegoods.com/altair/demo/wp-content/uploads/2014/10/Ermin-Celikovic-1024x682.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;