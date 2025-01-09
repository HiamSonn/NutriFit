"use client";
import React from "react";
import Image from "next/image";
const MealDetail = () => {
  return (
    <div className="grid grid-cols-[0.5fr_11fr_0.5fr] mt-10">
      <div></div>
      <div className="lg:space-y-10 md:space-y-8 sm:space-y-6 space-y-4">
        <h1 className="text-darkgreen font-bold lg:text-2xl md:text-xl text-lg">Salad cá hồi</h1>
        <div className="grid grid-cols-5 lg:gap-20 md:gap-16 sm:gap-12 gap-8">
          <div className="col-span-3">
            <Image src="/salad.webp" width={700} height={300} />
          </div>
          <div className="col-span-2 lg:space-y-10 md:space-y-8 sm:space-y-6 space-y-4">
            <h1 className="text-darkgreen font-bold lg:text-xl md:text-lg sm:text-base text-sm">Nguyên liệu</h1>

            <div className="lg:space-y-5 md:space-y-4 sm:space-y-3 space-y-2 lg:text-lg md:text-base sm:text-sm text-xs">
              <div className="flex justify-between text-gray ">
                <span>Kiwi</span>
                <span>300 Gr</span>
              </div>
              <div className="flex justify-between text-gray ">
                <span>Củ dền</span>
                <span>300 Gr</span>
              </div>
              <div className="flex justify-between text-gray ">
                <span>Cam</span>
                <span>300 Gr</span>
              </div>
              <div className="flex justify-between text-gray ">
                <span>Hạt chia</span>
                <span>300 Gr</span>
              </div>
              <div className="flex justify-between text-gray ">
                <span>Kiwi</span>
                <span>300 Gr</span>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-darkgreen font-bold lg:text-xl md:text-lg sm:text-base text-sm">Cách chế biến</h1>

        <div className="lg:w-[50%] md:w-[60%] w-[80%] space-y-5">
          <div className="flex justify-between ">
            <div className="lg:h-8 lg:w-8 md:h-6 md:w-6 sm:w-6 sm:h-6 h-4 w-4 rounded-full bg-darkgreen text-white flex items-center justify-center">
              <span className="lg:text-xl md:text-lg sm:text-base text-xs">1</span>
            </div>
            <div className="space-y-4">
              <h1 className="lg:text-xl md:text-lg sm:text-base text-xs">
                Loại bỏ vỏ chuối, vỏ kiwi, vỏ xoài chín. Sau đó, cắt trái cây
              </h1>
              <Image
                src="/salad.webp"
                width={200}
                height={100}
                className="inline-block lg:w-[200px] lg:h-[130px] md:w-[160px] md:h-[180] w-[150px] h-[100px]"
              />
              <Image
                src="/salad.webp"
                width={200}
                height={100}
                className="inline-block lg:w-[200px] lg:h-[130px] md:w-[160px] md:h-[180] w-[150px] h-[100px]"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="lg:h-8 lg:w-8 md:h-6 md:w-6 sm:w-6 sm:h-6 h-4 w-4 rounded-full bg-darkgreen text-white flex items-center justify-center">
              <span className="lg:text-xl md:text-lg sm:text-base text-xs">2</span>
            </div>
            <div className="space-y-4">
              <h1 className="lg:text-xl md:text-lg sm:text-base text-xs">Củ dền gọt bỏ vỏ, cắt khối vuông. Yến mạch bạn có thể sử</h1>
              <Image
                src="/salad.webp"
                width={200}
                height={100}
                className="inline-block lg:w-[200px] lg:h-[130px] md:w-[160px] md:h-[180] w-[150px] h-[100px]"
              />
              <Image
                src="/salad.webp"
                width={200}
                height={100}
                className="inline-block lg:w-[200px] lg:h-[130px] md:w-[160px] md:h-[180] w-[150px] h-[100px]"
              />
            </div>
          </div>
           <div className="flex justify-between">
            <div className="lg:h-8 lg:w-8 md:h-6 md:w-6 sm:w-6 sm:h-6 h-4 w-4 rounded-full bg-darkgreen text-white flex items-center justify-center">
              <span className="lg:text-xl md:text-lg sm:text-base text-xs">3</span>
            </div>
            <div className="space-y-4">
              <h1 className="lg:text-xl md:text-lg sm:text-base text-xs">Củ dền gọt bỏ vỏ, cắt khối vuông. Yến mạch bạn có thể sử</h1>
              <Image
                src="/salad.webp"
                width={200}
                height={100}
                className="inline-block lg:w-[200px] lg:h-[130px] md:w-[160px] md:h-[180] w-[150px] h-[100px]"
              />
              <Image
                src="/salad.webp"
                width={200}
                height={100}
                className="inline-block lg:w-[200px] lg:h-[130px] md:w-[160px] md:h-[180] w-[150px] h-[100px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default MealDetail;
