import React from "react";
import Image from "next/image";
const Dish = () => {
  return (
    <div className="bg-white border border-grayborder rounded-md p-4 max-w-[300px] space-y-5">
      <Image src="/salad.webp" width={300} height={200} />
      <h1 className="font-bold text-lg text-darkgreen">Salad cá hồi</h1>
      <div className="text-gray text-sm">200kcal</div>
      <div className="flex justify-between text-gray text-sm">
        <span>10 phút chế biến</span>
        <span>100.000 đ</span>
      </div>
      <div className=" flex justify-end">
        <button className="bg-lightgreen text-white px-6 py-1 rounded-lg font-bold">
          Xem chi tiết
        </button>
      </div>
    </div>
  );
};

export default Dish;
