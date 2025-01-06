"use client";
import React from "react";
import Image from "next/image";
const MealDetail = () => {
  return (
    <div className="grid grid-cols-[0.5fr_11fr_0.5fr] mt-10">
      <div></div>
      <div className="space-y-10">
        <h1 className="text-darkgreen font-bold text-2xl">Salad cá hồi</h1>
        <div className="grid grid-cols-5 gap-20">
          <div className="col-span-3">
            <Image src="/salad.webp" width={700} height={300} />
          </div>
          <div className="col-span-2 space-y-10">
            <h1 className="text-darkgreen font-bold text-xl">Nguyên liệu</h1>

            <div className="space-y-5">
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
        <h1 className="text-darkgreen font-bold text-2xl">Cách chế biến</h1>
        
            <div className=" w-[40%] space-y-5">
              <div className="flex justify-between ">
                <h1>1</h1>
                <div className="space-y-4">
                  <h1>
                    Loại bỏ vỏ chuối, vỏ kiwi, vỏ xoài chín. Sau đó, cắt trái
                    cây
                  </h1>
                  <Image
                  src="/salad.webp"
                  width={200}
                  height={100}
                  className="inline-block"
                  />
                 <Image
                  src="/salad.webp"
                  width={200}
                  height={100}
                  className="inline-block"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <h1>1</h1>
                <div className="space-y-4">
                  <h1>
                    Loại bỏ vỏ chuối, vỏ kiwi, vỏ xoài chín. Sau đó, cắt trái
                    cây
                  </h1>
                  <Image
                  src="/salad.webp"
                  width={200}
                  height={100}
                  className="inline-block"
                  />
                 <Image
                  src="/salad.webp"
                  width={200}
                  height={100}
                  className="inline-block"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <h1>1</h1>
                <div className="space-y-4">
                  <h1>
                    Loại bỏ vỏ chuối, vỏ kiwi, vỏ xoài chín. Sau đó, cắt trái
                    cây
                  </h1>
                  <Image
                  src="/salad.webp"
                  width={200}
                  height={100}
                  className="inline-block"
                  />
                 <Image
                  src="/salad.webp"
                  width={200}
                  height={100}
                  className="inline-block"
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
