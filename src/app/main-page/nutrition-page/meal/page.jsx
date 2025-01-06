"use client";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SendIcon from '@mui/icons-material/Send';
import Dish from "@/components/dish";
const meal = () => {
  return (
    <div className="bg-white max-w-full overflow-hidden mt-10">
      <div className=" grid grid-cols-[0.5fr_11fr_0.5fr]">
        <div></div>
        <div className="space-y-10">
          <div className="grid grid-cols-2 gap-20 min-h-[100px] mt-10 ">
            <div className="col-span-1 space-y-2 border border-grayborder px-4 py-2 rounded-md">
              <div className="flex justify-between">
                <div className="text-darkgreen font-bold text-xl">
                  Bữa sáng kiểu mỹ
                </div>
                <FavoriteIcon className="text-darkgreen" />
              </div>
              <h1 className="font-bold text-lg">Bữa sáng</h1>
              <div className="text-gray text-sm space-x-4">
                <span>200kcal</span>
                <span>5 phút chế biến</span>
                <span>50.000 đ</span>
              </div>
            </div>
            <div className="col-span-1  px-4 py-2 rounded-md">
             <div className="flex justify-end space-x-5">
                <AccountCircleIcon fontSize="large" className="text-darkgreen "/>
                 <span className="flex items-center text-xl">Nguyễn Văn A</span>
             </div>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4">
            <Dish />
            <Dish />
            <Dish />
            <Dish />
            <Dish />
          </div>
          <div className="border border-grayborder px-4 py-2 rounded-md w-[60%]">
            <h1 className="text-darkgreen font-bold text-2xl">Bình luận</h1>
            <div className="border border-grayborder p-2 flex justify-between rounded-md">
            <AccountCircleIcon fontSize="large" className="text-darkgreen "/>
            <SendIcon fontSize="medium" className="text-darkgreen -rotate-45 items-center"/>
            </div>
            <div className="py-3 flex  rounded-md justify-between pl-2 space-x-2">
            <AccountCircleIcon fontSize="large" className="text-darkgreen "/>
            <div className="border border-grayborder p-3 rounded-md">
                <h1 className=" font-bold text-lg">
                    Trịnh Trần Phương Tuấn
                </h1>
                <p>
                Cá hồi salad tuyệt vời! Miếng cá hồi tươi ngon,
                 mềm mại được kết hợp hoàn hảo với rau xanh giòn
                  và sốt trộn đậm đà. Một món ăn healthy, thanh mát
                   mà còn cực kỳ dinh dưỡng, chắc chắn sẽ khiến bạn thích mê!!!
                </p>
            </div>
            </div>
            <div className="py-3 flex  rounded-md justify-between pl-2 space-x-2">
            <AccountCircleIcon fontSize="large" className="text-darkgreen "/>
            <div className="border border-grayborder p-3 rounded-md">
                <h1 className=" font-bold text-lg">
                    Trịnh Trần Phương Tuấn
                </h1>
                <p>
                Cá hồi salad tuyệt vời! Miếng cá hồi tươi ngon,
                 mềm mại được kết hợp hoàn hảo với rau xanh giòn
                  và sốt trộn đậm đà. Một món ăn healthy, thanh mát
                   mà còn cực kỳ dinh dưỡng, chắc chắn sẽ khiến bạn thích mê!!!
                </p>
            </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default meal;
