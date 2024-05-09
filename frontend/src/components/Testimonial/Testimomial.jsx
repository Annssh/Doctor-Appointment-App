import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactStars from "react-stars";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
// import patientAvatar from "../../assets/images/patient-avatar.png";
// import { HiStar } from "react-icons/hi";

const Testimomial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px] cursor-[grab] border border-[2px] rounded-[20px] bg-[#F3EBFE]">
      {/* <Swiper
        modules={Pagination}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Ansh Agrawal
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "I have taken medical services from them. They treat so well and
              they are providing the best medical services."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Ansh Agrawal
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "I have taken medical services from them. They treat so well and
              they are providing the best medical services."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Ansh Agrawal
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "I have taken medical services from them. They treat so well and
              they are providing the best medical services."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Ansh Agrawal
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "I have taken medical services from them. They treat so well and
              they are providing the best medical services."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Ansh Agrawal
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "I have taken medical services from them. They treat so well and
              they are providing the best medical services."
            </p>
          </div>
        </SwiperSlide>
      </Swiper> */}
      <Swiper
        slidesPerView={3}
        spaceBetween={25}
        loop={true}
        className="w-11/12"
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
      >
        <SwiperSlide key={1}>
          <div className="select-none flex flex-col items-center p-1 bg-richblack-800 w-full gap-2">
            {/* image and name part */}
            <div className="flex justify-around py-2 items-center ">
              {/* Place image instead of div */}
              <div className="bg-white w-10 h-10 lg:w-12 lg:h-12 object-cover rounded-full"></div>
              <div className="flex flex-col justify-center flex-wrap w-[70%]">
                <p className="text-richblack-5 text-lg font-bold">
                  Dushyant Bhutiyani
                </p>
                <p className="text-richblack-500 text-sm">
                  Web Development Master Course @dot Batch
                </p>
              </div>
            </div>
            {/* The review */}
            <div className="text-richblack-100 flex justify-center font-semibold lg:font-medium items-center px-3">
              I appreciate all the efforts made by the designer and developing
              team. An amazing platform for learning. Best teachers and staff.
            </div>
            {/* Rating stars part */}
            <div className="w-full flex justify-start gap-2 px-3">
              <h3 className="flex mt-1 items-center justify-center font-semibold text-yellow-100">
                4.0
              </h3>
              <div className="flex justify-center items-center">
                <ReactStars
                  count={5}
                  value={4}
                  size={20}
                  edit={false}
                  activeColor="#ffd700"
                  emptyIcon={<FaStar />}
                  fullIcon={<FaStar />}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide key={2}>
          <div className="select-none flex flex-col items-center p-1 bg-richblack-800 w-full gap-2">
            {/* image and name part */}
            <div className="flex justify-around py-2 items-center ">
              {/* Place image instead of div */}
              <div className="bg-white w-10 h-10 lg:w-12 lg:h-12 object-cover rounded-full"></div>
              <div className="flex flex-col justify-center flex-wrap w-[70%]">
                <p className="text-richblack-5 text-lg font-bold">
                  Ansh Agrawal
                </p>
                <p className="text-richblack-500 text-sm">
                  Web Development Master Course @dot Batch
                </p>
              </div>
            </div>
            {/* The review */}
            <div className="text-richblack-100 flex justify-center font-semibold lg:font-medium items-center px-3">
              I appreciate all the efforts made by the designer and developing
              team. An amazing platform for learning. Best teachers and staff.
            </div>
            {/* Rating stars part */}
            <div className="w-full flex justify-start gap-2 px-3">
              <h3 className="flex mt-1 items-center justify-center font-semibold text-yellow-100">
                4.0
              </h3>
              <div className="flex justify-center items-center">
                <ReactStars
                  count={5}
                  value={4}
                  size={20}
                  edit={false}
                  activeColor="#ffd700"
                  emptyIcon={<FaStar />}
                  fullIcon={<FaStar />}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide key={3}>
          <div className="select-none flex flex-col items-center p-1 bg-richblack-800 w-full gap-2">
            {/* image and name part */}
            <div className="flex justify-around py-2 items-center ">
              {/* Place image instead of div */}
              <div className="bg-white w-10 h-10 lg:w-12 lg:h-12 object-cover rounded-full"></div>
              <div className="flex flex-col justify-center flex-wrap w-[70%]">
                <p className="text-richblack-5 text-lg font-bold">
                  Dhairya Virmani
                </p>
                <p className="text-richblack-500 text-sm">
                  Web Development Master Course @dot Batch
                </p>
              </div>
            </div>
            {/* The review */}
            <div className="text-richblack-100 flex justify-center font-semibold lg:font-medium items-center px-3">
              I appreciate all the efforts made by the designer and developing
              team. An amazing platform for learning. Best teachers and staff.
            </div>
            {/* Rating stars part */}
            <div className="w-full flex justify-start gap-2 px-3">
              <h3 className="flex mt-1 items-center justify-center font-semibold text-yellow-100">
                4.0
              </h3>
              <div className="flex justify-center items-center">
                <ReactStars
                  count={5}
                  value={4}
                  size={20}
                  edit={false}
                  activeColor="#ffd700"
                  emptyIcon={<FaStar />}
                  fullIcon={<FaStar />}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide key={4}>
          <div className="select-none flex flex-col items-center p-1 bg-richblack-800 w-full gap-2">
            {/* image and name part */}
            <div className="flex justify-around py-2 items-center ">
              {/* Place image instead of div */}
              <div className="bg-white w-10 h-10 lg:w-12 lg:h-12 object-cover rounded-full"></div>
              <div className="flex flex-col justify-center flex-wrap w-[70%]">
                <p className="text-richblack-5 text-lg font-bold">
                  Daggu Virmani
                </p>
                <p className="text-richblack-500 text-sm">
                  Web Development Master Course @dot Batch
                </p>
              </div>
            </div>
            {/* The review */}
            <div className="text-richblack-100 flex justify-center font-semibold lg:font-medium items-center px-3">
              I appreciate all the efforts made by the designer and developing
              team. An amazing platform for learning. Best teachers and staff.
            </div>
            {/* Rating stars part */}
            <div className="w-full flex justify-start gap-2 px-3">
              <h3 className="flex mt-1 items-center justify-center font-semibold text-yellow-100">
                4.0
              </h3>
              <div className="flex justify-center items-center">
                <ReactStars
                  count={5}
                  value={4}
                  size={20}
                  edit={false}
                  activeColor="#ffd700"
                  emptyIcon={<FaStar />}
                  fullIcon={<FaStar />}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide key={5}>
          <div className="select-none flex flex-col items-center p-1 bg-richblack-800 w-full gap-2">
            {/* image and name part */}
            <div className="flex justify-around py-2 items-center ">
              {/* Place image instead of div */}
              <div className="bg-white w-10 h-10 lg:w-12 lg:h-12 object-cover rounded-full"></div>
              <div className="flex flex-col justify-center flex-wrap w-[70%]">
                <p className="text-richblack-5 text-lg font-bold">
                  Daggu Virmani
                </p>
                <p className="text-richblack-500 text-sm">
                  Web Development Master Course @dot Batch
                </p>
              </div>
            </div>
            {/* The review */}
            <div className="text-richblack-100 flex justify-center font-semibold lg:font-medium items-center px-3">
              I appreciate all the efforts made by the designer and developing
              team. An amazing platform for learning. Best teachers and staff.
            </div>
            {/* Rating stars part */}
            <div className="w-full flex justify-start gap-2 px-3">
              <h3 className="flex mt-1 items-center justify-center font-semibold text-yellow-100">
                4.0
              </h3>
              <div className="flex justify-center items-center">
                <ReactStars
                  count={5}
                  value={4}
                  size={20}
                  edit={false}
                  activeColor="#ffd700"
                  emptyIcon={<FaStar />}
                  fullIcon={<FaStar />}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide key={6}>
          <div className="select-none flex flex-col items-center p-1 bg-richblack-800 w-full gap-2">
            {/* image and name part */}
            <div className="flex justify-around py-2 items-center ">
              {/* Place image instead of div */}
              <div className="bg-white w-10 h-10 lg:w-12 lg:h-12 object-cover rounded-full"></div>
              <div className="flex flex-col justify-center flex-wrap w-[70%]">
                <p className="text-richblack-5 text-lg font-bold">
                  Daggu Virmani
                </p>
                <p className="text-richblack-500 text-sm">
                  Web Development Master Course @dot Batch
                </p>
              </div>
            </div>
            {/* The review */}
            <div className="text-richblack-100 flex justify-center font-semibold lg:font-medium items-center px-3">
              I appreciate all the efforts made by the designer and developing
              team. An amazing platform for learning. Best teachers and staff.
            </div>
            {/* Rating stars part */}
            <div className="w-full flex justify-start gap-2 px-3">
              <h3 className="flex mt-1 items-center justify-center font-semibold text-yellow-100">
                4.0
              </h3>
              <div className="flex justify-center items-center">
                <ReactStars
                  count={5}
                  value={4}
                  size={20}
                  edit={false}
                  activeColor="#ffd700"
                  emptyIcon={<FaStar />}
                  fullIcon={<FaStar />}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimomial;
