import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Dish = () => {
  const router = useRouter();
  return (
    <div className="bg-white border border-grayborder
     rounded-md lg:p-4 md:p-3 p-2 max-w-[300px] lg:space-y-5 md:space-y-4 sm:space-y-3 space-y-2 cursor-pointer"
      onClick={()=>router.push('/main-page/nutrition-page/meal/mealDetail')}>
      <Image src="/salad.webp" width={300} height={200} />
      <h1 className="font-bold lg:text-lg md:text-base sm:text-sm text-sm text-darkgreen">Salad cá hồi</h1>
      <div className="text-gray lg:text-lg md:text-xs sm:text-xs text-xs">200kcal</div>
      <div className="flex justify-between text-gray lg:text-sm text-xs">
        <span>10 phút chế biến</span>
        <span>100.000 đ</span>
      </div>
      <div className=" flex justify-end">
        <button className="bg-lightgreen text-white lg:px-6 md:px-4 px-2 py-1 rounded-lg font-bold lg:text-lg md:text-base sm:text-sm text-xs">
          Xem chi tiết
        </button>
      </div>
    </div>
  );
};

export default Dish;
