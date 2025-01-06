'use client'
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Meal = () => {
    return (    
        <div className='bg-lightgray rounded-md p-4'>
            {/* Header content */}
            <div className='flex justify-between'>
                <div className='inline-block space-x-2'>
                    <span className='text-darkgreen font-bold'>Sáng</span>
                    <span className='text-gray text-sm'>(5-8 am)</span>
                </div>
                <FavoriteIcon className='text-darkgreen'/>
            </div>

            {/* Info content */}
            <div className='text-gray space-x-4 text-sm mb-4'>
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
                       bulletActiveClass: 'swiper-pagination-bullet-active'
                   }}
                className='w-full rounded-lg'
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
    );
};

export { Meal };