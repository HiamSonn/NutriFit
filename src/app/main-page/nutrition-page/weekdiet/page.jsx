"use client";
import React from "react";
import { Ingredient } from "@/components/ingredient";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import DayMeal from "@/components/daymeal";
const weekdiet = () => {
    const map=["Hôm nay","Thứ 4","Thứ 5","Thứ 6","Thứ 7","Chủ nhật"];
  return (
    <div className="bg-white max-w-full overflow-hidden mt-10">
      <div className=" grid grid-cols-[0.5fr_11fr_0.5fr]">
        <div></div>
        <div className="lg:space-y-20 md:space-y-12 sm:space-y-8 space-y-4">
          <h1 className="text-darkgreen font-bold lg:text-2xl md:text-lg sm:text-base text-sm">
            Thực đơn tuần này
          </h1>
          <div className="border border-grayborder lg:mt-10 md:mt-8 sm:mt-6 mt-4  lg:p-4 md:p-3 p-2 rounded-md">
            <h1 className="text-darkgreen font-bold lg:text-2xl md:text-lg sm:text-base text-sm text-center">
              Nguyên liệu
            </h1>
           
            <div className="flex justify-center w-[90vw] sm:w-[85vw] md:w-[80vw] lg:w-[90vw] mt-5">
                <Swiper
                  modules={[Pagination]}
                  spaceBetween={20}
                  breakpoints={{
                    320: {
                      slidesPerView: 3,
                      spaceBetween: 5
                    },
                    640: {
                      slidesPerView: 4,
                      spaceBetween: 15
                    },
                    768: {
                      slidesPerView: 5,
                      spaceBetween: 20
                    },
                    1024: {
                      slidesPerView: 5,
                      spaceBetween: 25
                    },
                    1280: {
                      slidesPerView: 5,
                      spaceBetween: 30
                    }
                  }}
                  pagination={{
                    clickable: true,
                    bulletActiveClass: "swiper-pagination-bullet-active",
                  }}
                  className="w-full rounded-lg"
                >
                  {[...Array(10)].map((_, index) => (
                    <SwiperSlide key={index}>
                      <Ingredient />
                    </SwiperSlide>
                  ))}
                </Swiper>
             </div>
            
            <style jsx global>{`
              .swiper {
                padding-bottom: 0px !important;
              }
              .swiper-wrapper {
                padding: 0 1px !important; /* Thêm dòng này */
              }

              .swiper-pagination {
                position: relative !important;
                bottom: 0 !important;
                margin-top: 5px;
              }

              .swiper-pagination-bullet {
                background: #000 !important;
              }

              .swiper-pagination-bullet-active {
                background: darkgreen !important;
              }
            `}</style>
          </div>
          <div className="border border-grayborder lg:mt-10 md:mt-8 sm:mt-6 mt-4  p-4 rounded-md">
            <h1 className="text-darkgreen font-bold lg:text-2xl md:text-lg sm:text-base text-sm text-center">Thực đơn</h1>
            {map.map((item,index)=>(
                <DayMeal key={index} day={item}/>
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default weekdiet;
