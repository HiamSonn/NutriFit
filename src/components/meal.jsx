"use client";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from 'react';
const Meal = ({bua}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };
  const router = useRouter();
  return (
    <div
      className="bg-lightgray rounded-md lg:p-4 md:p-3 p-2 cursor-pointer  "
      onClick={() => router.push("/main-page/nutrition-page/meal")}
    >
      {/* Header content */}
      <div className="flex justify-between">
        <div className="inline-block space-x-2">
          <span className="text-darkgreen font-bold lg:text-lg md:text-base sm:text-sm text-sm">
           {bua}
          </span>
          <span className="text-gray lg:text-sm md:text-sm sm:text-xs text-xs">
            (5-8 am)
          </span>
        </div>
        <FavoriteIcon 
  sx={{ 
    fontSize: {
      xs: '16px',
      sm: '20px',
      md: '24px',
      lg: '28px'
    }
  }}
  className={`cursor-pointer ${isFavorite ? 'text-lightgreen' : 'text-darkgreen'}`}
  onClick={handleFavoriteClick}
/>
      </div>

      {/* Info content */}
      <div className="text-gray lg:space-x-4 md:space-x-3 space-x-2 lg:text-sm md:text-sm sm:text-xs text-xs lg:mb-4 md:mb-3 mb-2">
        <span>50kcal</span>
        <span>5 phút chế biến</span>
        <span>50.000đ</span>
      </div>

      {/* Enhanced Swiper */}
      <Swiper
        modules={[Pagination]} // Chỉ dùng Pagination
        spaceBetween={20}
        slidesPerView={1.5}
        pagination={{
          clickable: true,
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        className="w-full rounded-lg"
      >
        <SwiperSlide>
          <Image
            src="/salad.webp"
            width={300}
            height={200}
            alt="Salad"
            className="rounded-lg object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/salad.webp"
            width={300}
            height={200}
            alt="Meal 2"
            className="rounded-lg object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/salad.webp"
            width={300}
            height={200}
            alt="Meal 2"
            className="rounded-lg object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/salad.webp"
            width={300}
            height={200}
            alt="Meal 2"
            className="rounded-lg object-cover"
          />
        </SwiperSlide>
      </Swiper>
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
          lg:margin-top: 5px md:margin-top: 3px margin-top: 1px;
        }

        .swiper-pagination-bullet {
          background: #000 !important;
         
        }

        .swiper-pagination-bullet-active {
          background: darkgreen !important;
        }
      `}</style>
    </div>
  );
};

export { Meal };
